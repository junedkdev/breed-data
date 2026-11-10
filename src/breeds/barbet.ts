import type { Breed } from "../schema/breed.types";

export const barbet: Breed = {
  slug: "barbet",
  name: "Barbet",
  scientificName: "Canis lupus familiaris",

  alternateNames: [
    "French Water Dog",
    "Barbet Français",
    "Französischer Wasserhund",
    "Perro de Agua Francés"
  ],

  group:
    "Gundogs; Section 3 — Water Dogs (with working trial; also classified in the Sporting and Gun Dog groups)",

  origin: {
    country: "France",
    region:
      "France (developed across coastal wetlands, marshes, and estuaries throughout mainland France)"
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Barbet-1.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Barbet-1.jpg",
      title: "Barbet-1.jpg",
      description: "An adult black Barbet standing in profile outdoors.",
      creator: "Pleple2000",
      uploader: "Pleple2000",
      capturedOn: "2008-10-05",
      uploadedOn: "2008-10-18",
      width: 2400,
      height: 1800,
      licenseId: "cc-by-sa-3.0",
      attribution:
        "Photo by Pleple2000, Wikimedia Commons, CC BY-SA 3.0. Source: https://commons.wikimedia.org/wiki/File:Barbet-1.jpg. License: https://creativecommons.org/licenses/by-sa/3.0/. Changes, if any, must be indicated; adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-11-10"
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Barbet_688.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Barbet_688.jpg",
      title: "Barbet 688.jpg",
      description: "A dark brown Barbet outdoors in grass.",
      creator: "Tomasz Sienicki",
      uploader: "Pmg",
      capturedOn: "2006-05-20",
      uploadedOn: "2006-05-21",
      width: 600,
      height: 520,
      licenseId: "cc-by-sa-3.0",
      attribution:
        "Photo by Tomasz Sienicki, Wikimedia Commons, CC BY-SA 3.0. Source: https://commons.wikimedia.org/wiki/File:Barbet_688.jpg. License: https://creativecommons.org/licenses/by-sa/3.0/. Changes, if any, must be indicated; adaptations must comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-11-10"
    }
  ],

  overview: {
    summary:
      "An ancient, medium-sized French water retriever distinguished by its dense, curly, water-repellent fleece coat, distinctive chin beard, webbed feet, and calm, affectionate, and cheerful working disposition.",

    description:
      "The Barbet is a rustic, medium-sized water dog built with balanced, sturdy substance, strong bone, and an athletic, slightly rectangular frame. Historically developed to locate, flush, and retrieve waterfowl from freezing marshes and coastal estuaries, the dog possesses a waterproof double coat composed of thick, natural woolly curls that cover the body from head to tail. Its facial furnishings feature prominent whiskers and an abundant chin beard—from which the French word 'barbe' and the breed name derive—framing round, dark hazel or dark brown eyes radiating gentle intelligence. The webbed paws and muscular thighs provide powerful swimming drive in muddy waters. In domestic life, the dog is calm, cheerful, and deeply affectionate with family members, adapting easily to active households while maintaining an enduring passion for swimming, retrieving, and outdoor exploration.",

    history:
      "The Barbet is one of Europe's most ancient waterfowl dogs, with historical and literary records across France dating back to the late sixteenth century. Mentions appear in King Henry IV's royal court chronicles as well as natural history treatises by Buffon, who described the rustic water dog as an ancestor of several modern gundog and companion breeds, notably the Poodle, Bichon types, and various European water spaniels. During the eighteenth and nineteenth centuries, French market hunters and wildfowlers relied on these dogs to retrieve downed ducks, geese, and game from freezing bogs and marshes. The disruptions of the World Wars caused the rustic working landrace to decline sharply, prompting French cynologists and dedicated breeders in the mid-twentieth century to collect and preserve surviving bloodlines. Today, the breed is celebrated internationally as an authentic, historical sporting dog and versatile companion.",

    originalPurpose:
      "Searching, flushing, and retrieving waterfowl and marsh game from freezing lakes, bogs, and coastal estuaries.",

    currentRoles: [
      "Traditional waterfowl flushing and retrieving gundog",
      "Field trial and hunt test competitor",
      "Devoted household companion and family pet",
      "Therapy and emotional support visiting dog",
      "Canine athlete in agility, dock diving, tracking, and rally"
    ]
  },

  physical: {
    sizeCategory: "Medium",

    height: {
      unit: "cm",
      male: {
        min: 58,
        max: 65
      },
      female: {
        min: 53,
        max: 61
      }
    },

    weight: {
      unit: "kg",
      male: {
        min: 20,
        max: 28
      },
      female: {
        min: 17,
        max: 24
      }
    },

    lifespanYears: {
      min: 12,
      max: 14
    },

    coatType:
      "Long, woolly, curly coat that can form natural cords, dense and thick, covering the entire body naturally without sculpting, forming a characteristic beard on the chin.",

    coatLength: "Long",

    coatColors: [
      "Solid black",
      "Solid brown (chocolate)",
      "Solid fawn (pale to dark red-fawn)",
      "Grey",
      "White",
      "Pied (white ground with black, brown, fawn, or grey patches)"
    ],

    sheddingLevel:
      "Low; hair sheds into the curls rather than onto furnishings, requiring regular combing to prevent matting",

    droolingLevel:
      "Low to moderate; tight lips prevent excessive drool, though long beard furnishings collect water after drinking",

    distinctiveFeatures: [
      "Rustic, medium-sized water dog of balanced rectangular proportions",
      "Height at the withers of 58 to 65 cm for males and 53 to 61 cm for females, with a permissible variation of plus or minus one centimetre",
      "Weight of 20 to 28 kg for males and 17 to 24 kg for females in lean, conditioned working form",
      "Profuse, natural curly woolly coat covering the entire body, head, and tail",
      "Prominent facial beard on the chin and long moustache covering the muzzle",
      "Round, expressive dark brown or hazel eyes framed by long hair that falls over the bridge without blinding the dog",
      "Broad, flat skull with a defined stop and a strong, wide, square muzzle",
      "Complete scissor bite with strong jaws and sound teeth",
      "Broad, flat, long drop ears set low on a level with the eyes, covered in long curly strands extending past the mouth",
      "Deep, broad chest reaching down to the elbows with well-sprung ribs",
      "Low-set tail carried in a gentle upward curve when active without curling over the back",
      "Round, broad feet with pronounced interdigital webbing and tough black or dark brown pads adapted for marsh swimming"
    ]
  },

  temperament: {
    traits: [
      "Joyful, even-tempered, and remarkably friendly",
      "Deeply affectionate, devoted, and loyal with family members",
      "Passionate water lover with an instinctive desire to retrieve",
      "Gentle, patient, and playful with children",
      "Sociable, polite, and peaceful with other dogs and domestic pets",
      "Intelligent, eager to please, and highly trainable",
      "Calm and relaxed indoors when adequately exercised",
      "Alert watchdog that announces visitors without aggression",
      "Sensitive to human emotional tone, thriving under gentle leadership",
      "Low prey drive toward non-avian domestic animals"
    ],

    scores: {
      affection: 5,
      withChildren: 5,
      withDogs: 5,
      withStrangers: 4,
      protectiveness: 2,
      independence: 2,
      trainability: 5,
      barking: 2,
      energy: 4
    }
  },

  care: {
    exercise: {
      level:
        "High; an active gundog requiring daily aerobic exercise, mental engagement, and regular opportunities to swim and retrieve",

      minutesPerDay: {
        min: 60,
        max: 90
      },

      activities: [
        "Daily brisk leashed walks and trail hikes in natural environments",
        "Swimming and water retrieving in lakes, ponds, or calm coastal waters",
        "Interactive fetch, bumper retrieving, and field hunting drills",
        "Canine sports including agility, dock diving, tracking, and rally",
        "Food puzzle toys, snuffle mats, and scent-searching enrichment",
        "Supervised play and social romping in a securely fenced yard"
      ]
    },

    grooming: {
      level: "High",

      brushing:
        "Line-comb thoroughly down to the skin two to three times weekly using a wide-toothed metal greyhound comb and slicker brush to prevent felted mats in the curly fleece; inspect and detangle high-friction areas behind the ears, armpits, and groin.",

      bathing:
        "Bathe every four to eight weeks or after swampy field swims using a moisturizing canine shampoo; allow the coat to air dry naturally to restore authentic tight curls, as high-velocity blow dryers blow out the curls into an unnatural fluff.",

      notes: [
        "The coat must not be sculpted, blown straight, or clipped in artificial patterns; it should be presented in its natural rustic curls, with occasional uniform hand-scissoring every two to three months to maintain manageable length.",
        "Inspect and clean the long dropped ears two to three times weekly, drying the ear canal entrance carefully after swimming to prevent moist bacterial or yeast infections.",
        "Wipe and dry the long chin beard after eating and drinking to prevent moisture accumulation and odor.",
        "Trim excess hair between footpads to maintain traction and prevent ice balls in winter.",
        "Trim nails every two to three weeks to maintain compact foot structure.",
        "Brush teeth several times weekly using dog-specific enzymatic toothpaste."
      ]
    },

    training: {
      difficulty:
        "Easy to moderate; exceptionally intelligent, biddable, and eager to please, learning cues and complex retrieving patterns rapidly",

      tips: [
        "Use positive reinforcement, high-value treats, and enthusiastic praise.",
        "Keep sessions varied, cheerful, and interactive to maintain high motivation.",
        "Begin gentle water introduction, retrieving games, and recall practice early in puppyhood.",
        "Avoid harsh verbal corrections or heavy physical pressure, which cause this sensitive retriever to shut down.",
        "Incorporate scentwork and retrieving drills to channel natural gundog instincts.",
        "Teach polite greetings early to prevent joyful jumping on family members."
      ],

      socialization:
        "Introduce the puppy early, gradually, and positively to a wide range of people, friendly vaccinated dogs, water bodies, novel surfaces, and busy environments. Early structured socialization develops an adaptable, stable companion that is welcoming to strangers and calm in diverse public settings."
    },

    livingEnvironment: {
      apartmentSuitable: true,
      houseWithYardSuitable: true,

      climates: [
        "Temperate climates",
        "Cool and rainy climates, where the dense curly coat provides exceptional water and cold insulation",
        "Warm climates, provided indoor cooling, shade, fresh water, and access to swimming are available, scheduling exercise during cooler morning or evening hours"
      ],

      aloneTimeTolerance:
        "Low to moderate; deeply people-oriented and thrives on human inclusion, prone to separation distress or persistent whining if isolated for extended workdays without interaction."
    }
  },

  nutrition: {
    dietType:
      "High-quality complete and balanced dog food formulated for medium-sized active sporting breeds, adjusted for age, metabolism, and physical output.",

    feedingFrequency: {
      puppy:
        "Three to four measured small meals daily until six months of age, transitioning to two meals daily on a growth formula supporting steady development.",
      adult:
        "Two measured meals daily to support steady metabolism and digestive comfort.",
      senior:
        "Two portion-controlled meals daily adapted for lower metabolic output, joint support, and lean muscle retention."
    },

    guidelines:
      "Measure food portions carefully using a digital kitchen scale or standard measuring cup, adjusting amounts to maintain a lean, athletic body silhouette where the ribs are easily felt through the dense curls. Divide daily food into two distinct meals, restrict vigorous exercise immediately before and after eating, use narrow food bowls to keep the beard clean, and provide fresh drinking water at all times.",

    considerations: [
      "Maintain a lean, muscular body condition; excess weight places unnecessary mechanical strain on hips and stifles.",
      "Account for training treats within the total daily caloric allowance to avoid creeping weight gain.",
      "Use narrow spaniel-style bowls or elevated stands to prevent the long beard from soaking in water dishes.",
      "Avoid feeding high-fat table scraps that can trigger digestive upset or acute pancreatitis.",
      "Provide clean drinking water at all times, especially after swimming in salty or chlorinated water.",
      "Transition between diet formulas gradually over five to seven days."
    ],

    note:
      "Caloric needs vary significantly based on swimming frequency, outdoor temperature, and daily exercise. Consult a veterinarian to establish tailored daily feeding guidelines."
  },

  health: {
    overview:
      "The Barbet is a remarkably robust, rustic sporting dog with a typical life expectancy of 12 to 14 years. Having been preserved through functional working lines with attention to genetic health, it has avoided many artificial conformational exaggerations. However, responsible health management requires screening for hereditary conditions seen across water retrievers, including hip dysplasia, elbow dysplasia, hereditary eye diseases (such as progressive retinal atrophy and cataracts), idiopathic epilepsy, and chronic otitis externa due to heavily coated drop ears.",

    commonConditions: [
      "Hip dysplasia — developmental laxity and malformation of the coxofemoral joints leading to osteoarthritis and hind-limb lameness, monitored through pre-breeding radiographic screening",
      "Elbow dysplasia — developmental abnormalities of the elbow joint causing forelimb lameness and joint stiffness",
      "Progressive retinal atrophy (prcd-PRA) — an inherited neurodegenerative ocular condition causing progressive photoreceptor degeneration and eventual blindness, screenable via DNA testing",
      "Hereditary cataracts and distichiasis — ocular conditions monitored through annual veterinary ophthalmologist examinations",
      "Idiopathic epilepsy — inherited seizure disorder reported in some European lines, managed through pedigree evaluation and neurological care",
      "Chronic otitis externa — bacterial and yeast ear infections promoted by heavy, hairy drop ears that restrict ventilation and trap moisture after swimming",
      "Allergic dermatitis — occasional sensitivities to environmental allergens or fleas causing skin itching and secondary infections"
    ],

    preventiveCare: [
      "Confirm that breeding stock has certified radiographic clearances for hips and elbows, DNA clearance for prcd-PRA, and current ophthalmologist eye certifications.",
      "Thoroughly dry the ears and wipe ear canals with a veterinary ear wash after every swim or bath.",
      "Maintain a lean, athletic body condition to avoid placing excess mechanical wear on hips and elbows.",
      "Brush and comb the curly fleece down to the skin multiple times weekly to prevent painful matting and skin hot spots.",
      "Administer consistent year-round parasite prevention against fleas, ticks, and heartworms.",
      "Schedule annual veterinary wellness examinations, vaccinations, and routine dental cleanings."
    ],

    recommendedScreenings: [
      "Radiographic hip dysplasia evaluation through an accredited national screening program prior to breeding",
      "Radiographic elbow dysplasia evaluation prior to breeding",
      "DNA marker test for Progressive Retinal Atrophy (prcd-PRA) prior to breeding",
      "Annual ophthalmic examination by a board-certified veterinary ophthalmologist"
    ],

    dentalCare:
      "Brush teeth several times weekly using dog-specific enzymatic toothpaste. The breed has strong, wide jaws with a complete 42-tooth scissor bite; periodic veterinary dental assessments preserve gum health.",

    earCare:
      "Inspect the long drop ears two to three times weekly for wax buildup, moisture, or foul odor. Clean gently using a veterinarian-recommended ear cleanser, drying the leather and canal opening thoroughly after swimming.",

    skinCare:
      "Part the dense curly fleece weekly during line-combing to inspect the skin for external parasites, redness, or mats. Avoid blow-drying the coat straight, as natural air drying maintains healthy curl structure and skin aeration."
  },

  suitability: {
    firstTimeOwners: true,
    familiesWithChildren: true,
    seniorOwners: true,
    activeOwners: true,
    apartmentLiving: true,

    idealFor: [
      "Active families seeking an affectionate, playful, and gentle medium-sized companion",
      "Outdoor lovers, hikers, and swimmers who enjoy water sports and trail exploration",
      "First-time dog owners committed to positive training and thorough weekly coat brushing",
      "Apartment or house dwellers who provide daily walks, play, and close indoor family inclusion",
      "Waterfowlers and gundog enthusiasts looking for an authentic, historic water retriever"
    ],

    notIdealFor: [
      "Owners unwilling to dedicate time to regular line-combing and curly coat maintenance",
      "Households seeking a low-exercise indoor lap dog",
      "Owners who leave a dog home alone in isolation for long workdays without company",
      "People who dislike wet, muddy paws and damp beards around the home after outdoor runs",
      "Individuals looking for an aggressive protective guard dog"
    ]
  },

  funFacts: [
    "The breed name Barbet comes directly from the French word 'barbe' (meaning beard), referring to the characteristic tuft of long, curly hair growing from its chin.",
    "The popular French idiom 'crotté comme un barbet' (muddy as a barbet) originated centuries ago, affectionately describing someone soaked, disheveled, and covered in mud after an outdoor adventure.",
    "Historical cynologists widely consider the Barbet to be the common ancestor of several European breeds, including the Poodle, the Portuguese Water Dog, the Spanish Water Dog, and the Bichon family.",
    "King Henry IV of France was an avid hunter who kept Barbet water dogs, and historical letters recount his mistress jokingly complaining that the king brought his wet, muddy Barbets directly into royal bedchambers.",
    "Unlike the sculpted, shaved show trims of poodles, the Barbet's breed standard strictly requires it to be presented in its natural rustic curls, with no clipping of the face or hindquarters.",
    "The breed has fully webbed feet, functioning like natural flippers that give the dog remarkable propulsion and endurance when swimming in deep or muddy water."
  ],

  faq: [
    {
      question: "What is a Barbet?",
      answer:
        "The Barbet is an ancient French water dog known for its dense curly fleece coat, characteristic chin beard, webbed paws, and gentle, joyful personality."
    },
    {
      question: "What is the difference between a Barbet and a Poodle?",
      answer:
        "While closely related historically, the Barbet is a distinct gundog with a broader head, slightly rectangular body, heavier bone, and a natural, unsculpted curly coat, whereas the Poodle has a longer muzzle, a square silhouette, lighter bone, and a tradition of styled coats."
    },
    {
      question: "How tall and heavy is a Barbet?",
      answer:
        "Adult males stand 58 to 65 cm at the withers and weigh 20 to 28 kg, while adult females stand 53 to 61 cm and weigh 17 to 24 kg, with a height tolerance of plus or minus one centimetre."
    },
    {
      question: "How long does a Barbet live?",
      answer:
        "With proper nutrition, regular exercise, and conscientious preventive veterinary care, the breed typically enjoys a healthy lifespan of 12 to 14 years."
    },
    {
      question: "Do Barbets shed, and how is their coat groomed?",
      answer:
        "Barbets are low-shedding dogs because dead hairs catch in their dense curls rather than falling out. They require thorough line-combing two to three times a week down to the skin to prevent mats, along with an occasional uniform trim every couple of months; they should not be blown straight or shaved."
    },
    {
      question: "Are Barbets good family pets and good with children?",
      answer:
        "Yes. They are famously gentle, patient, and affectionate with children, making wonderful family pets; they also get along very well with other dogs and domestic animals."
    },
    {
      question: "Can a Barbet live in an apartment?",
      answer:
        "Yes. They adapt well to apartment living provided they receive daily physical exercise, walks, and human companionship, as they are calm and clean indoors."
    },
    {
      question: "Are Barbets easy to train?",
      answer:
        "They are highly intelligent, eager to please, and food-motivated, responding enthusiastically to positive reinforcement, praise, and gentle guidance in obedience, agility, and retrieving."
    },
    {
      question: "Do Barbets love water?",
      answer:
        "Yes. Swimming and retrieving from water are deep ancestral instincts for the breed; their webbed feet and waterproof double coat make them exceptional swimmers."
    },
    {
      question: "What health tests are recommended for the Barbet?",
      answer:
        "Recommended pre-breeding screenings include radiographic evaluations for hip and elbow dysplasia, DNA testing for progressive retinal atrophy (prcd-PRA), and annual specialist eye examinations."
    }
  ],

  references: [
    "fci-barbet-official-standard",
    "fci-barbet-nomenclature",
    "scc-barbet-breed-standard",
    "club-du-barbet-profile",
    "akc-barbet-breed-standard",
    "akc-barbet-breed-profile",
    "the-kennel-club-barbet-breed-standard",
    "ukc-barbet-breed-standard",
    "ofa-barbet-chic-requirements",
    "wikimedia-barbet-1-pleple2000",
    "wikimedia-barbet-688-tomasz-sienicki"
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
          id: "fci-barbet-official-standard",
          role: "verified",
          locator: "Standard heading: BARBET (French Water Dog)"
        },
        {
          id: "fci-barbet-nomenclature",
          role: "verified",
          locator: "Official nomenclature: BARBET (105), Französischer Wasserhund, Perro de agua francés"
        },
        {
          id: "scc-barbet-breed-standard",
          role: "verified",
          locator: "Dénomination officielle: Barbet (Chien d'eau français)"
        },
        {
          id: "akc-barbet-breed-profile",
          role: "verified",
          locator: "History: French Water Dog"
        }
      ],
      verifiedOn: "2026-11-10",
      note: "Verified across FCI Standard No. 105, FCI Nomenclature, SCC, and AKC."
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-barbet-official-standard",
          role: "verified",
          locator: "FCI Classification: Group 8 Retrievers, Flushing Dogs, Water Dogs, Section 3 Water Dogs, with working trial"
        },
        {
          id: "fci-barbet-nomenclature",
          role: "verified",
          locator: "Group 8, Section 3 Water Dogs, with working trial"
        },
        {
          id: "akc-barbet-breed-standard",
          role: "verified",
          locator: "Sporting Group"
        },
        {
          id: "the-kennel-club-barbet-breed-standard",
          role: "verified",
          locator: "Gundog Group"
        },
        {
          id: "ukc-barbet-breed-standard",
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
          id: "fci-barbet-official-standard",
          role: "verified",
          locator: "ORIGIN: France; BRIEF HISTORICAL SUMMARY"
        },
        {
          id: "fci-barbet-nomenclature",
          role: "verified",
          locator: "Country of origin: France"
        },
        {
          id: "scc-barbet-breed-standard",
          role: "verified",
          locator: "Origine: France"
        }
      ],
      verifiedOn: "2026-11-10",
      note: null
    },

    overview: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-barbet-official-standard",
          role: "verified",
          locator: "UTILIZATION, BRIEF HISTORICAL SUMMARY, GENERAL APPEARANCE, IMPORTANT PROPORTIONS, BEHAVIOUR/TEMPERAMENT"
        },
        {
          id: "scc-barbet-breed-standard",
          role: "verified",
          locator: "Historique, aptitudes, morphologie et caractère"
        },
        {
          id: "club-du-barbet-profile",
          role: "verified",
          locator: "Histoire du Barbet, Henri IV, Buffon et sélection moderne"
        },
        {
          id: "akc-barbet-breed-profile",
          role: "verified",
          locator: "About the Breed, History, and Roles"
        }
      ],
      verifiedOn: "2026-11-10",
      note:
        "Synthesized in original prose from FCI Standard No. 105, SCC, French parent club, and AKC official records."
    },

    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-barbet-official-standard",
          role: "verified",
          locator: "HEAD, BODY, TAIL, LIMBS, COAT, COLOUR, SIZE"
        },
        {
          id: "scc-barbet-breed-standard",
          role: "verified",
          locator: "Tête, barbe, corps, pattes palmées, toison bouclée et couleurs"
        },
        {
          id: "akc-barbet-breed-standard",
          role: "verified",
          locator: "General Appearance, Size, Head, Beard, Body, Coat, Color"
        }
      ],
      verifiedOn: "2026-11-10",
      note:
        "Conformation, rectangular build, curly woolly coat, chin beard, webbed feet, and distinctive features follow official standards."
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-barbet-official-standard",
          role: "verified",
          locator: "SIZE: Height at withers: Males: 58 cm to 65 cm. Females: 53 cm to 61 cm. Tolerance: +/- 1 cm."
        },
        {
          id: "scc-barbet-breed-standard",
          role: "verified",
          locator: "Taille: Mâles: 58 à 65 cm; Femelles: 53 à 61 cm (tolérance +/- 1 cm)"
        },
        {
          id: "akc-barbet-breed-standard",
          role: "verified",
          locator: "Height: Males: 21 to 25 inches (58 to 65 cm); Females: 19 to 24 inches (53 to 61 cm)"
        }
      ],
      verifiedOn: "2026-11-10",
      note:
        "Preserved in published unit of centimetres (58–65 cm for males, 53–61 cm for females) exactly as specified in the official FCI Standard No. 105 and SCC standard."
    },

    "physical.weight": {
      reliability: "reliable_source",
      sources: [
        {
          id: "scc-barbet-breed-standard",
          role: "verified",
          locator: "Poids: Mâles: 20 à 28 kg; Femelles: 17 à 24 kg"
        },
        {
          id: "club-du-barbet-profile",
          role: "verified",
          locator: "Poids moyen d'un Barbet adulte: 20-28 kg chez le mâle, 17-24 kg chez la femelle"
        },
        {
          id: "akc-barbet-breed-profile",
          role: "verified",
          locator: "Weight: 35-65 pounds (approx. 17-28 kg)"
        }
      ],
      verifiedOn: "2026-11-10",
      note:
        "FCI Standard No. 105 specifies height ranges without publishing numerical weight limits. The stored 20 to 28 kg for males and 17 to 24 kg for females represent canonical figures published by SCC and the French parent club, preserved in kilograms."
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-barbet-breed-profile",
          role: "verified",
          locator: "Life Expectancy: 12-14 years"
        },
        {
          id: "the-kennel-club-barbet-breed-standard",
          role: "verified",
          locator: "Longevity and health actuarial profile (12-14 years)"
        }
      ],
      verifiedOn: "2026-11-10",
      note: "Supported by kennel club and breed club actuarial profiles."
    },

    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-barbet-breed-profile",
          role: "verified",
          locator: "Breed Traits: Shedding Level (1/5 to 2/5)"
        },
        {
          id: "fci-barbet-official-standard",
          role: "verified",
          locator: "COAT: Long, woolly, curly coat forming cords; low shedding"
        }
      ],
      verifiedOn: "2026-11-10",
      note: null
    },

    "physical.droolingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-barbet-breed-profile",
          role: "verified",
          locator: "Breed Traits: Drooling Level (2/5)"
        },
        {
          id: "fci-barbet-official-standard",
          role: "verified",
          locator: "Lips: Thick, well pigmented, completely covered by hair"
        }
      ],
      verifiedOn: "2026-11-10",
      note: "Tight lips result in low to moderate drooling, though beards retain drinking moisture."
    },

    "temperament.traits": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-barbet-official-standard",
          role: "verified",
          locator: "BEHAVIOUR/TEMPERAMENT: Even-tempered, very attached to master, very social, loves water"
        },
        {
          id: "scc-barbet-breed-standard",
          role: "verified",
          locator: "Caractère: Équilibré, fidèle, affectueux, grand amateur d'eau"
        },
        {
          id: "akc-barbet-breed-standard",
          role: "verified",
          locator: "Temperament: Friendly, joyful, obedient, intelligent, passionate water retriever"
        }
      ],
      verifiedOn: "2026-11-10",
      note: null
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "akc-barbet-breed-profile",
          role: "cited",
          locator: "Breed Traits & Characteristics trait ratings"
        },
        {
          id: "the-kennel-club-barbet-breed-standard",
          role: "cited",
          locator: "Temperament and behavior guidance"
        }
      ],
      verifiedOn: null,
      note:
        "Editorial 1–5 estimates based on documented gundog temperament, high sociability, and water passion."
    },

    care: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-barbet-breed-profile",
          role: "cited",
          locator: "Grooming, Exercise, Training, and Nutrition"
        },
        {
          id: "club-du-barbet-profile",
          role: "cited",
          locator: "Entretien de la toison, séchage naturel et santé"
        }
      ],
      verifiedOn: null,
      note:
        "Combines active water retriever care with natural curly fleece grooming and ear drying protocols."
    },

    "care.exercise.level": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-barbet-breed-profile",
          role: "verified",
          locator: "Energy Level (4/5); Exercise Needs (4/5)"
        },
        {
          id: "fci-barbet-official-standard",
          role: "verified",
          locator: "UTILIZATION: Water dog for searching and flushing game"
        }
      ],
      verifiedOn: "2026-11-10",
      note: null
    },

    "care.exercise.minutesPerDay": {
      reliability: "estimate",
      sources: [
        {
          id: "the-kennel-club-barbet-breed-standard",
          role: "cited",
          locator: "Exercise: Up to 1 hour or more per day"
        },
        {
          id: "akc-barbet-breed-profile",
          role: "cited",
          locator: "Daily exercise recommendations"
        }
      ],
      verifiedOn: null,
      note:
        "Estimated 60 to 90 minutes of daily activity reflects the exercise demands of an active sporting water dog."
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-barbet-breed-profile",
          role: "verified",
          locator: "Adaptability: Adapts Well to Apartment Living (3/5 to 4/5) with adequate outdoor exercise"
        }
      ],
      verifiedOn: "2026-11-10",
      note: null
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-barbet-breed-profile",
          role: "verified",
          locator: "Exercise and secure fenced-yard recommendations"
        },
        {
          id: "club-du-barbet-profile",
          role: "verified",
          locator: "Cadre de vie et espace extérieur"
        }
      ],
      verifiedOn: "2026-11-10",
      note: null
    },

    "care.livingEnvironment.climates": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-barbet-official-standard",
          role: "verified",
          locator: "COAT: Water-repellent woolly fleece adapted to cold water and wetlands"
        },
        {
          id: "akc-barbet-breed-profile",
          role: "verified",
          locator: "Weather adaptation: thrives in temperate and wet conditions"
        }
      ],
      verifiedOn: "2026-11-10",
      note: null
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-barbet-breed-profile",
          role: "verified",
          locator: "Tolerates Being Alone: Low to moderate; people-oriented gundog"
        }
      ],
      verifiedOn: "2026-11-10",
      note: null
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-barbet-breed-profile",
          role: "cited",
          locator: "Nutrition: High-quality food, portion control, treat budgeting"
        }
      ],
      verifiedOn: null,
      note:
        "Standard nutritional recommendations for active medium sporting breeds."
    },

    "nutrition.feedingFrequency": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akc-barbet-breed-profile",
          role: "cited",
          locator: "Life-stage feeding guidance"
        }
      ],
      verifiedOn: null,
      note: "Standard canine life-stage feeding schedule."
    },

    "health.overview": {
      reliability: "reliable_source",
      sources: [
        {
          id: "ofa-barbet-chic-requirements",
          role: "verified",
          locator: "CHIC Program requirements: Hip Dysplasia, Elbow Dysplasia, Eye Examination, prcd-PRA DNA test"
        },
        {
          id: "club-du-barbet-profile",
          role: "verified",
          locator: "Santé, dépistage de la dysplasie de la hanche et tares oculaires"
        }
      ],
      verifiedOn: "2026-11-10",
      note:
        "Synthesizes national health registry screening requirements with French parent club veterinary data."
    },

    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "ofa-barbet-chic-requirements",
          role: "verified",
          locator: "Hip dysplasia, elbow dysplasia, progressive retinal atrophy, cataracts"
        },
        {
          id: "club-du-barbet-profile",
          role: "verified",
          locator: "Otites récurrentes dues aux oreilles tombantes et poils dans les conduits, épilepsie"
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
          id: "club-du-barbet-profile",
          role: "cited",
          locator: "Soins des oreilles après baignade, démêlage de la toison et dépistage pré-reproduction"
        },
        {
          id: "akc-barbet-breed-profile",
          role: "cited",
          locator: "Routine care, health testing, and ear drying"
        }
      ],
      verifiedOn: null,
      note: "Standard preventive care protocol tailored to curly drop-eared water retrievers."
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "ofa-barbet-chic-requirements",
          role: "verified",
          locator: "CHIC Program required screenings: Radiographic Hip Dysplasia evaluation, Elbow Dysplasia evaluation, CAER Eye examination, prcd-PRA DNA test"
        },
        {
          id: "club-du-barbet-profile",
          role: "verified",
          locator: "Dépistage obligatoire des reproducteurs: hanches et tares oculaires"
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
          id: "fci-barbet-official-standard",
          role: "cited",
          locator: "Jaws/teeth: complete scissor bite with strong teeth"
        },
        {
          id: "akc-barbet-breed-profile",
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
          id: "fci-barbet-official-standard",
          role: "cited",
          locator: "Ears: set on low, long, flat, covered by long curly hair"
        },
        {
          id: "club-du-barbet-profile",
          role: "cited",
          locator: "Nettoyage et séchage des oreilles après le travail à l'eau"
        }
      ],
      verifiedOn: null,
      note: "Ear maintenance protocol for heavy, hairy drop ears prone to moisture retention."
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "fci-barbet-official-standard",
          role: "cited",
          locator: "Skin: relatively thick, no dewlap; woolly curly coat care"
        },
        {
          id: "club-du-barbet-profile",
          role: "cited",
          locator: "Entretien de la toison bouclée et prévention des feutrages"
        }
      ],
      verifiedOn: null,
      note: "Dermatological care protocol for breeds with dense curly double coats."
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "akc-barbet-breed-profile",
          role: "cited",
          locator: "About the breed, Temperament, and Family life ratings"
        },
        {
          id: "the-kennel-club-barbet-breed-standard",
          role: "cited",
          locator: "Characteristics, lifestyle suitability, and exercise"
        }
      ],
      verifiedOn: null,
      note:
        "Suitability evaluations are editorial recommendations based on breed temperament, exercise demands, and coat care commitments."
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akc-barbet-breed-profile",
          role: "verified",
          locator: "Etymology (barbe meaning beard), King Henry IV historical lore, common ancestor to Poodle and water dogs"
        },
        {
          id: "club-du-barbet-profile",
          role: "verified",
          locator: "Proverbe 'crotté comme un barbet', pattes palmées, toison rustique naturelle"
        },
        {
          id: "fci-barbet-official-standard",
          role: "verified",
          locator: "Brief historical summary: Ancient French waterfowl dog"
        }
      ],
      verifiedOn: "2026-11-10",
      note: "Verified historical folklore and working heritage facts."
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-barbet-official-standard",
          role: "verified",
          locator: "Origin, size (58-65 cm / 53-61 cm), curly coat, and colors"
        },
        {
          id: "scc-barbet-breed-standard",
          role: "verified",
          locator: "Poids (20-28 kg / 17-24 kg), longévité (12-14 ans), pattes palmées et tempérament"
        },
        {
          id: "akc-barbet-breed-profile",
          role: "verified",
          locator: "Comparison with Poodle, grooming, family suitability, and water work"
        },
        {
          id: "ofa-barbet-chic-requirements",
          role: "verified",
          locator: "Recommended health screening panel"
        }
      ],
      verifiedOn: "2026-11-10",
      note:
        "FAQ answers synthesize verified standards, kennel club publications, and parent club data without naming registries in prose."
    }
  },

  updatedOn: "2026-11-10"
};
