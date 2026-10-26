import type { Breed } from "../schema/breed.types";

export const ibizan_hound: Breed = {
  slug: "ibizan-hound",
  name: "Ibizan Hound",
  scientificName: null,
  alternateNames: [
    "Podenco Ibicenco",
    "Ibizan Podenco",
    "Podenco d'Ibiza",
    "Ca Eivissec",
    "Ibizan Warren Hound",
  ],
  group:
    "FCI Group 5 — Spitz and primitive types; Section 7 — Primitive type hunting dogs; also classified in the Hound group by some kennel clubs",
  origin: {
    country: "Spain",
    region: "Balearic Islands, especially Ibiza and neighbouring islands including Mallorca, Menorca and Formentera",
  },
  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Ibizan_Hound.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Ibizan_Hound.jpg",
      title: "Ibizan Hound.jpg",
      description: "Photograph of an Ibizan Hound.",
      creator: "sean mason",
      uploader: "Ltshears (Flickr upload bot)",
      capturedOn: "2002-11-10",
      uploadedOn: "2008-11-18",
      width: 1773,
      height: 1185,
      licenseId: "cc-by-2.0",
      attribution:
        "Photo by sean mason, originally posted to Flickr and shared via Wikimedia Commons, licensed under CC BY 2.0. https://creativecommons.org/licenses/by/2.0/. Changes, if any, must be indicated.",
      restrictions: null,
      metadataCheckedOn: "2026-10-26",
    },
  ],
  overview: {
    summary:
      "The Ibizan Hound is an agile, long-legged rabbit hunter from Spain's Balearic Islands, recognised by its tall mobile ears, lean outline and remarkable jumping ability. It is an athletic, alert and independent dog that needs daily activity, secure exercise areas and thoughtful recall training.",
    description:
      "Elegant but athletic, the Ibizan Hound has a narrow head, amber-toned eyes, long legs and large erect ears that move expressively when the dog is alert. Its body is slightly longer than it is tall, with lean muscle and a deep chest. The breed occurs in smooth and wire-haired varieties; both have a hard-textured coat and may be white, red or a combination of those colours. Bred to hunt rabbits, it combines speed, agility, stamina and a strong chase instinct. Many are affectionate with their own people, while some may be reserved with unfamiliar people. Individual behaviour varies, and a high prey drive makes safe containment and carefully built recall important.",
    history:
      "The Ibizan Hound developed in Spain's Balearic Islands and is known locally by names including Podenco Ibicenco and Ca Eivissec. It has a long association with rabbit hunting, often working over rocky terrain and in cover. Its breed type is traditionally linked with the islands of Ibiza, Mallorca, Menorca and Formentera. Although its appearance is sometimes compared with ancient Mediterranean hunting dogs, direct ancestry claims beyond the documented breed history should be treated cautiously.",
    originalPurpose:
      "Hunting rabbits and other quarry, using agility, scent and hearing to locate and pursue game, sometimes in coordinated groups.",
    currentRoles: [
      "Rabbit and small-game hunting where legally permitted",
      "Lure coursing and other suitable sighthound activities",
      "Agility, tracking and reward-based training activities",
      "Active companion in a home that can safely manage its speed and prey drive",
    ],
  },
  physical: {
    sizeCategory: "Large",
    height: {
      unit: "in",
      male: { min: 23, max: 27 },
      female: { min: 22, max: 26 },
    },
    weight: {
      unit: "lb",
      male: { min: 46, max: 55 },
      female: { min: 40, max: 50 },
    },
    lifespanYears: { min: 11, max: 14 },
    coatType:
      "Hard-textured coat in two varieties: smooth and wire-haired. The smooth coat is short and close; the wire coat is rougher and may include a moustache.",
    coatLength:
      "The smooth coat is shortest on the head and ears and longer at the back of the thighs and beneath the tail. The wire coat can be 1–3 inches long on all or part of the body, depending on the individual and registry standard.",
    coatColors: [
      "White",
      "Red, from light yellowish-red often called lion to deeper red",
      "White and red in combination",
    ],
    sheddingLevel:
      "Sheds; the short coat is easy to maintain, while the wire-haired variety may need extra brushing to remove loose hair and debris.",
    droolingLevel: null,
    distinctiveFeatures: [
      "Very large, naturally erect and highly mobile ears",
      "Long, narrow head and clear amber-to-caramel eyes",
      "Lean, fine-boned, athletic body with a deep chest",
      "Long legs and exceptional agility and jumping ability",
      "Smooth and wire-haired coat varieties",
      "Light, springy movement with a brief suspended phase at the trot",
    ],
  },
  temperament: {
    traits: [
      "Alert, intelligent and observant",
      "Often affectionate and loyal with familiar people",
      "Independent-minded and capable of making decisions while hunting",
      "Athletic, fast and persistent when pursuing moving quarry",
      "May be reserved with strangers without being nervous or aggressive",
      "Often responds well to patient, reward-based training",
    ],
    scores: {
      affection: 4,
      withChildren: 3,
      withDogs: 3,
      withStrangers: 3,
      protectiveness: 2,
      independence: 5,
      trainability: 4,
      barking: 2,
      energy: 5,
    },
  },
  care: {
    exercise: {
      level:
        "Very high. This is a fast, athletic hunting breed that needs substantial daily exercise and opportunities for safe running. The Royal Kennel Club recommends more than two hours per day.",
      minutesPerDay: { min: 120, max: null },
      activities: [
        "Long walks and hikes suited to the dog's age and conditioning",
        "Securely fenced running and play areas",
        "Lure coursing or other appropriate sighthound sports",
        "Scent-based search games and tracking",
        "Reward-based obedience and recall practice",
        "Interactive enrichment that engages the dog's attention without encouraging unsafe chasing",
      ],
    },
    grooming: {
      level: "Low to moderate; needs differ between smooth and wire coats.",
      brushing:
        "Brush the smooth coat about weekly with a soft brush or grooming mitt. Brush the wire coat more thoroughly as needed, checking for tangles, burrs and debris without trimming the coat unnecessarily.",
      bathing:
        "Bathe when needed with a mild dog shampoo and dry thoroughly. Avoid over-bathing, which may dry or irritate the skin.",
      notes: [
        "Check the large upright ears weekly for wax, debris, redness or odour.",
        "Inspect skin and paws after outdoor exercise.",
        "Trim nails as needed and maintain routine dental care.",
        "The two coat varieties are traditionally shown untrimmed; seek experienced grooming advice if the wire coat becomes tangled.",
      ],
    },
    training: {
      difficulty:
        "Moderate to challenging for off-leash reliability because hunting motivation and independence can compete with handler cues. The breed can learn well with consistent, reward-based methods.",
      tips: [
        "Start recall training early and practise first in low-distraction, enclosed spaces.",
        "Use a secure fenced area for running; do not assume recall will override the urge to chase wildlife.",
        "Reward attention, check-ins and calm behaviour around moving animals at a safe distance.",
        "Keep sessions varied and positive, with opportunities for safe running and scent work.",
        "Socialise gradually and positively with people, dogs and new environments.",
      ],
      socialization:
        "Provide early, ongoing positive exposure to a range of people, dogs, sounds and environments. Pair new experiences with rewards and allow the dog space to observe rather than forcing interactions.",
    },
    livingEnvironment: {
      apartmentSuitable: null,
      houseWithYardSuitable: true,
      climates: [
        "Provide shade, ventilation and fresh water during hot weather.",
        "Avoid strenuous exercise in peak heat and adjust activity to the individual dog.",
        "In cold or wet weather, monitor comfort, particularly for lean dogs with a short coat.",
        "A securely fenced yard is useful, but does not replace walks, training and enrichment.",
      ],
      aloneTimeTolerance:
        "A reliable breed-wide duration is not established. Build alone time gradually and provide exercise and enrichment; avoid routinely leaving the dog alone for long periods.",
    },
  },
  nutrition: {
    dietType:
      "Complete and balanced dog food appropriate to the dog's life stage, body condition, activity level and health.",
    feedingFrequency: {
      puppy: null,
      adult: null,
      senior: null,
    },
    guidelines:
      "Use the food manufacturer's guidance as a starting point and adjust portions according to body condition, activity and veterinary advice. Keep fresh water available and review the diet as the dog grows older or its workload changes.",
    considerations: [
      "A lean outline is characteristic, but the dog should not be underweight; assess body condition rather than appearance alone.",
      "Adjust food intake to exercise and body condition instead of assuming every dog has the same calorie requirement.",
      "Discuss supplements, special diets and persistent digestive or skin symptoms with a veterinarian.",
      "Avoid vigorous exercise around meals if your veterinarian advises this for the individual dog.",
    ],
    note:
      "No universal breed-specific calorie target or feeding schedule is recorded; needs vary with age, workload, body condition and health.",
  },
  health: {
    overview:
      "The breed parent club identifies hip dysplasia, eye disorders, congenital deafness and autoimmune thyroiditis among the health concerns for which breeding-dog screening is recommended. Seizures and bloat are also discussed as concerns, but the available sources do not establish that every listed condition is common or inevitable in the breed. Screening results should be reviewed individually; completion of a health-screening programme is not a guarantee that a dog is free from disease.",
    commonConditions: [
      "Hip dysplasia",
      "Eye disorders",
      "Congenital deafness",
      "Autoimmune thyroiditis",
      "Seizure disorders have been reported; causes vary and may not always be hereditary",
      "Gastric dilatation-volvulus (bloat) is a serious general canine emergency; breed-specific prevalence is not established here",
    ],
    preventiveCare: [
      "Ask the breeder for documented results of the health tests recommended by the relevant breed club.",
      "Maintain regular veterinary examinations, vaccinations and parasite prevention.",
      "Monitor hearing, vision, mobility, body condition and changes in behaviour.",
      "Learn the warning signs of gastric dilatation-volvulus and seek emergency veterinary care if suspected.",
      "Keep the dog lean and fit without abruptly increasing exercise intensity.",
    ],
    recommendedScreenings: [
      "Hip evaluation using an accepted programme such as OFA or PennHIP",
      "Eye examination by a qualified veterinary ophthalmologist",
      "BAER hearing test for congenital deafness",
      "Autoimmune thyroiditis evaluation through an approved laboratory",
      "Cardiac evaluation as included in the current parent-club CHIC screening protocol",
    ],
    dentalCare:
      "Brush teeth regularly with dog-specific toothpaste and arrange routine veterinary dental checks.",
    earCare:
      "Inspect the upright ears weekly for wax, dirt, redness, discharge or odour. Clean only with a dog-safe product when needed, and consult a veterinarian if irritation or infection is suspected.",
    skinCare:
      "Check the skin and coat during grooming, especially after outdoor activity. Seek veterinary advice for persistent itching, redness, sores or hair loss.",
  },
  suitability: {
    firstTimeOwners: null,
    familiesWithChildren: null,
    seniorOwners: null,
    activeOwners: true,
    apartmentLiving: null,
    idealFor: [
      "Active owners who can provide substantial daily exercise and safe running opportunities",
      "People interested in lure coursing, tracking, scent games or other structured activities",
      "Handlers willing to train recall patiently and manage a strong prey drive",
      "Homes with secure fencing and a plan for enrichment and companionship",
    ],
    notIdealFor: [
      "Households looking for a low-energy dog with minimal exercise needs",
      "Owners who expect dependable off-leash behaviour around wildlife without extensive training",
      "Homes without safe containment or secure opportunities for running",
      "People unable to provide daily activity, training and companionship",
    ],
  },
  funFacts: [
    "The breed's Spanish name, Podenco Ibicenco, reflects its association with Ibiza.",
    "The breed was developed to hunt rabbits and can use scent and hearing as well as sight to locate quarry.",
    "Ibizan Hounds are known for their ability to jump from a standing start, so secure fencing matters.",
    "Both smooth and wire-haired coats are recognised, and neither is universally preferred in the American standard.",
  ],
  faq: [
    {
      question: "What was the Ibizan Hound bred for?",
      answer:
        "It was developed in Spain's Balearic Islands to hunt rabbits and other quarry. The breed combines speed, agility and a strong instinct to pursue moving animals.",
    },
    {
      question: "How tall is an Ibizan Hound?",
      answer:
        "The United Kennel Club standard lists males at 23–27 inches and females at 22–26 inches at the withers. Other registries may use slightly different ranges.",
    },
    {
      question: "How much does an Ibizan Hound weigh?",
      answer:
        "The United Kennel Club standard lists a weight range of 46–55 pounds for males and 40–50 pounds for females. Individual healthy weight depends on build and body condition.",
    },
    {
      question: "How much exercise does an Ibizan Hound need?",
      answer:
        "The breed needs substantial daily exercise and safe opportunities to run. The Royal Kennel Club recommends more than two hours per day, adjusted for the dog's age, health and fitness.",
    },
    {
      question: "Does an Ibizan Hound need a lot of grooming?",
      answer:
        "The smooth coat is relatively easy to maintain and usually needs weekly brushing. The wire-haired coat may need more attention to remove loose hair, burrs and debris.",
    },
    {
      question: "Can an Ibizan Hound be trusted off leash?",
      answer:
        "Not automatically. The breed has a strong hunting and chasing instinct, so recall should be trained gradually and exercise should take place in secure areas unless the individual dog is reliably safe in that setting.",
    },
    {
      question: "Which health tests should I ask a breeder about?",
      answer:
        "Ask for results of hip evaluation, eye examination, BAER hearing testing and autoimmune thyroiditis evaluation. The current parent-club screening protocol also includes a cardiac evaluation. Review the results with a veterinarian rather than treating a screening certificate as a guarantee of future health.",
    },
  ],
  references: [
    "fci-podenco-ibicenco-standard-089",
    "united-kennel-club-ibizan-hound-standard",
    "american-kennel-club-ibizan-hound",
    "ibizan-hound-club-us-akc-standard",
    "ibizan-hound-club-us-health",
    "royal-kennel-club-ibizan-hound",
    "commons-ibizan-hound-sean-mason",
  ],
  evidence: {
    alternateNames: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-podenco-ibicenco-standard-089",
          role: "verified",
          locator: "Breed nomenclature and brief historical summary; Podenco Ibicenco / Ca Eivissec",
        },
        {
          id: "royal-kennel-club-ibizan-hound",
          role: "verified",
          locator: "Breed overview: Podenco Ibicenco",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "Names are limited to terms found in kennel-club and breed references.",
    },
    scientificName: {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No breed-specific scientific name is recorded; this field is left null rather than asserting a taxonomic label.",
    },
    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-podenco-ibicenco-standard-089",
          role: "verified",
          locator: "FCI classification: Group 5, Section 7, primitive type hunting dogs",
        },
        {
          id: "royal-kennel-club-ibizan-hound",
          role: "cited",
          locator: "Hound breed group",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "Group descriptions differ between registries; the FCI classification is stated first and the other grouping is noted.",
    },
    origin: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-podenco-ibicenco-standard-089",
          role: "verified",
          locator: "Origin: Spain (Balearic Islands); brief historical summary",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "The region reflects the documented Balearic Islands origin.",
    },
    overview: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-podenco-ibicenco-standard-089",
          role: "verified",
          locator: "Utilization and brief historical summary",
        },
        {
          id: "ibizan-hound-club-us-akc-standard",
          role: "verified",
          locator: "General appearance, movement and temperament",
        },
        {
          id: "royal-kennel-club-ibizan-hound",
          role: "verified",
          locator: "About this breed and breed characteristics",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "Original summary of the breed's island origin, hunting role and physical type.",
    },
    "physical.sizeCategory": {
      reliability: "reliable_source",
      sources: [
        {
          id: "royal-kennel-club-ibizan-hound",
          role: "verified",
          locator: "Breed characteristics: size listed as Large",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "Broad size category follows the kennel-club profile.",
    },
    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "united-kennel-club-ibizan-hound-standard",
          role: "verified",
          locator: "Height & Weight: dogs 23–27 inches; bitches 22–26 inches",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "Values are copied in inches from the published UKC standard; no unit conversion was performed.",
    },
    "physical.weight": {
      reliability: "official_standard",
      sources: [
        {
          id: "united-kennel-club-ibizan-hound-standard",
          role: "verified",
          locator: "Height & Weight: male range 46–55 pounds; female range 40–50 pounds",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "Values are copied in pounds from the published UKC standard; no unit conversion was performed.",
    },
    "physical.lifespanYears": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-ibizan-hound",
          role: "cited",
          locator: "Breed profile: life expectancy",
        },
        {
          id: "royal-kennel-club-ibizan-hound",
          role: "cited",
          locator: "Breed characteristics: lifespan over 10 years",
        },
      ],
      verifiedOn: null,
      note: "A practical lifespan estimate based on breed-profile guidance, not a guarantee or a population study.",
    },
    "physical.coatType": {
      reliability: "official_standard",
      sources: [
        {
          id: "ibizan-hound-club-us-akc-standard",
          role: "verified",
          locator: "Coat: smooth and wire-haired varieties, both hard in texture",
        },
        {
          id: "united-kennel-club-ibizan-hound-standard",
          role: "verified",
          locator: "Coat: smooth and rough/long-haired varieties",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "Coat varieties are described without treating one as universally preferable.",
    },
    "physical.coatLength": {
      reliability: "official_standard",
      sources: [
        {
          id: "ibizan-hound-club-us-akc-standard",
          role: "verified",
          locator: "Coat: smooth coat distribution and wire coat 1–3 inches",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "The published wire-coat length is retained in inches.",
    },
    "physical.coatColors": {
      reliability: "official_standard",
      sources: [
        {
          id: "ibizan-hound-club-us-akc-standard",
          role: "verified",
          locator: "Color: white or red, solid or in combination",
        },
        {
          id: "royal-kennel-club-ibizan-hound",
          role: "verified",
          locator: "Breed standard colours",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "Colour descriptions are paraphrased from standards; registry wording can vary.",
    },
    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "royal-kennel-club-ibizan-hound",
          role: "verified",
          locator: "Breed characteristics: sheds and grooming once a week",
        },
        {
          id: "american-kennel-club-ibizan-hound",
          role: "verified",
          locator: "Grooming: smooth and wire coat varieties",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "Describes shedding and maintenance qualitatively; no measured shedding quantity is claimed.",
    },
    "physical.droolingLevel": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable breed-specific drooling measurement was established.",
    },
    "physical.distinctiveFeatures": {
      reliability: "official_standard",
      sources: [
        {
          id: "ibizan-hound-club-us-akc-standard",
          role: "verified",
          locator: "General appearance, head, ears, body, coat and gait",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "Features are original summaries of the standard's appearance description.",
    },
    "temperament.traits": {
      reliability: "reliable_source",
      sources: [
        {
          id: "ibizan-hound-club-us-akc-standard",
          role: "verified",
          locator: "Temperament: even-tempered, affectionate, loyal, trainable, hunting instinct",
        },
        {
          id: "royal-kennel-club-ibizan-hound",
          role: "verified",
          locator: "Breed standard: reserved with strangers, dignified, intelligent and independent",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "Breed-level descriptions are not guarantees about an individual dog's behaviour.",
    },
    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "ibizan-hound-club-us-akc-standard",
          role: "cited",
          locator: "Temperament and hunting characteristics",
        },
        {
          id: "royal-kennel-club-ibizan-hound",
          role: "cited",
          locator: "Breed standard temperament",
        },
      ],
      verifiedOn: null,
      note: "Editorial 1–5 scores inferred from qualitative descriptions; they are not validated behavioural test results.",
    },
    "care.exercise": {
      reliability: "reliable_source",
      sources: [
        {
          id: "royal-kennel-club-ibizan-hound",
          role: "verified",
          locator: "Breed characteristics: more than 2 hours of exercise per day",
        },
        {
          id: "american-kennel-club-ibizan-hound",
          role: "verified",
          locator: "Breed overview: athletic sprinter and jumper requiring space",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "The lower bound reflects the kennel-club recommendation; the dog's age, health and fitness should guide actual exercise.",
    },
    "care.grooming": {
      reliability: "reliable_source",
      sources: [
        {
          id: "royal-kennel-club-ibizan-hound",
          role: "verified",
          locator: "Breed characteristics: grooming once a week and short coat",
        },
        {
          id: "american-kennel-club-ibizan-hound",
          role: "verified",
          locator: "Grooming and ear-care guidance",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "Practical advice accounts for both recognised coat types.",
    },
    "care.training": {
      reliability: "reliable_source",
      sources: [
        {
          id: "ibizan-hound-club-us-akc-standard",
          role: "verified",
          locator: "Temperament and hunting instinct",
        },
        {
          id: "united-kennel-club-ibizan-hound-standard",
          role: "verified",
          locator: "Hunting function and breed characteristics",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "Training advice addresses the documented hunting drive and is supplemented with general reward-based practice.",
    },
    "care.livingEnvironment": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General welfare guidance adapted for a fast, athletic dog; individual housing suitability depends on daily routine and secure exercise options.",
    },
    "care.livingEnvironment.apartmentSuitable": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable source establishes a universal apartment-suitability answer for all dogs of this breed.",
    },
    nutrition: {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General canine nutrition guidance; no universal breed-specific calorie prescription is asserted.",
    },
    "nutrition.feedingFrequency.puppy": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "A universal breed-specific puppy meal schedule was not established.",
    },
    "nutrition.feedingFrequency.adult": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "A universal breed-specific adult meal schedule was not established.",
    },
    "nutrition.feedingFrequency.senior": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "A universal breed-specific senior meal schedule was not established.",
    },
    "health.overview": {
      reliability: "reliable_source",
      sources: [
        {
          id: "ibizan-hound-club-us-health",
          role: "verified",
          locator: "Health concerns and recommended tests",
        },
        {
          id: "american-kennel-club-ibizan-hound",
          role: "verified",
          locator: "Health and recommended parent-club tests",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "Distinguishes reported concerns and screening recommendations from certainty about individual dogs.",
    },
    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "ibizan-hound-club-us-health",
          role: "verified",
          locator: "Concerns and health tests: deafness, vision, thyroid, hip dysplasia, seizures and bloat",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "These are concerns described by the parent club, not a ranked prevalence list; the list does not imply every condition is common.",
    },
    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General preventive veterinary guidance informed by the breed's published screening priorities.",
    },
    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "ibizan-hound-club-us-health",
          role: "verified",
          locator: "CHIC screening requirements: hips, eyes, BAER hearing, thyroid and cardiac evaluation",
        },
        {
          id: "american-kennel-club-ibizan-hound",
          role: "verified",
          locator: "Recommended health tests from the national breed club",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "Confirm current requirements with the parent club and relevant local screening programme.",
    },
    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "Routine dental care guidance for dogs.",
    },
    "health.earCare": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-ibizan-hound",
          role: "verified",
          locator: "Grooming: weekly ear checks for wax and debris",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "Advice reflects the breed profile's ear-care recommendation.",
    },
    "health.skinCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General skin and coat monitoring guidance.",
    },
    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "royal-kennel-club-ibizan-hound",
          role: "cited",
          locator: "Exercise, home and garden size guidance",
        },
        {
          id: "american-kennel-club-ibizan-hound",
          role: "cited",
          locator: "Breed overview: need for ample space and athletic activity",
        },
      ],
      verifiedOn: null,
      note: "Suitability guidance is editorial and based on activity and prey-drive needs, not a validated household assessment.",
    },
    "suitability.firstTimeOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable source establishes a universal first-time-owner suitability rating.",
    },
    "suitability.familiesWithChildren": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable source establishes a universal suitability rating for all families with children.",
    },
    "suitability.seniorOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable source establishes a universal senior-owner suitability rating.",
    },
    "suitability.apartmentLiving": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable source establishes a universal apartment-living suitability rating.",
    },
    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-podenco-ibicenco-standard-089",
          role: "verified",
          locator: "Origin and utilization",
        },
        {
          id: "ibizan-hound-club-us-akc-standard",
          role: "verified",
          locator: "General appearance, coat varieties and jumping ability",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "Facts are paraphrased from official breed and kennel-club material.",
    },
    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "united-kennel-club-ibizan-hound-standard",
          role: "verified",
          locator: "Height & Weight",
        },
        {
          id: "royal-kennel-club-ibizan-hound",
          role: "verified",
          locator: "Exercise, grooming and breed overview",
        },
        {
          id: "ibizan-hound-club-us-health",
          role: "verified",
          locator: "Health tests and concerns",
        },
      ],
      verifiedOn: "2026-10-26",
      note: "Answers are original summaries; measurement values follow the cited standard's own units.",
    },
  },
  updatedOn: "2026-10-26",
};
