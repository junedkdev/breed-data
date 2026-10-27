import type { Breed } from "../schema/breed.types";

export const dutch_smoushond: Breed = {
  slug: "dutch-smoushond",
  name: "Dutch Smoushond",
  scientificName: null,
  alternateNames: [
    "Hollandse Smoushond",
    "Smous",
    "Dutch Ratter",
  ],
  group: "Pinscher and Schnauzer Type — Section 1.3: Smoushond (without working trial)",
  origin: {
    country: "The Netherlands",
    region: "Amsterdam and surrounding provinces",
  },
  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Hollandse_Smoushond_Amsterdam.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Hollandse_Smoushond_Amsterdam.jpg",
      title: "Hollandse Smoushond Amsterdam.jpg",
      description: "A Dutch Smoushond beside a canal in Amsterdam.",
      creator: "ZeppWeb",
      uploader: "Abujoy",
      capturedOn: null,
      uploadedOn: "2014-03-03",
      width: 612,
      height: 612,
      licenseId: "cc-by-2.0",
      attribution:
        "Photo by ZeppWeb, via Wikimedia Commons, CC BY 2.0 (https://creativecommons.org/licenses/by/2.0/). Changes made: none; no endorsement is implied.",
      restrictions: null,
      metadataCheckedOn: "2026-10-27",
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Hollandse_Smoushond_01.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Hollandse_Smoushond_01.jpg",
      title: "Hollandse Smoushond 01.jpg",
      description: "A Dutch Smoushond photographed in Amsterdam.",
      creator: "Zepp Web",
      uploader: "Abujoy",
      capturedOn: null,
      uploadedOn: "2014-03-03",
      width: 612,
      height: 612,
      licenseId: "cc-by-2.0",
      attribution:
        "Photo by Zepp Web, via Wikimedia Commons, CC BY 2.0 (https://creativecommons.org/licenses/by/2.0/). Changes made: none; no endorsement is implied.",
      restrictions: null,
      metadataCheckedOn: "2026-10-27",
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Hollandse_Smoushond_02.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Hollandse_Smoushond_02.jpg",
      title: "Hollandse Smoushond 02.jpg",
      description: "A Dutch Smoushond photographed in Amsterdam.",
      creator: "Zepp Web",
      uploader: "Abujoy",
      capturedOn: null,
      uploadedOn: "2014-03-03",
      width: 453,
      height: 612,
      licenseId: "cc-by-2.0",
      attribution:
        "Photo by Zepp Web, via Wikimedia Commons, CC BY 2.0 (https://creativecommons.org/licenses/by/2.0/). Changes made: none; no endorsement is implied.",
      restrictions: null,
      metadataCheckedOn: "2026-10-27",
    },
  ],
  overview: {
    summary:
      "The Dutch Smoushond is a compact, robust companion dog native to the Netherlands, distinguished by its harsh yellow wiry coat, characteristic beard and eyebrows, and cheerful, affectionate personality. Developed during the nineteenth century around horse stables and carriage houses, it excelled at eradicating rats and vermin while providing spirited companionship.",
    description:
      "Squarely built and sturdy without coarseness, the Dutch Smoushond is immediately identified by its rough, unkempt yellow coat and expressive facial furnishings. It displays an engaging, friendly, and lively demeanor rather than high-strung nervousness or hyperactivity. Thriving on consistent human interaction, daily outdoor exercise, and gentle reward-based training, it makes an attentive household partner. Individual energy, prey drive, and sociability can vary, so early socialization and appropriate supervision around small pets remain beneficial.",
    history:
      "The Dutch Smoushond flourished throughout the Netherlands during the mid-to-late nineteenth century, notably in Amsterdam where it frequented livery stables and accompanied horse-drawn carriages to keep premises clear of vermin. Although its ancestral lineage is undocumented, historical tradition links its ancestry to rough-coated yellow schnauzer and terrier-type farm dogs. The population diminished sharply in the mid-twentieth century until registrations ceased following the Second World War. A concerted restoration project launched in 1973 systematically assembled surviving dogs fitting the traditional phenotype, successfully establishing today's cherished companion population.",
    originalPurpose:
      "Stable companion and carriage dog tasked with controlling rats, mice, and other vermin in horse stables and urban yards.",
    currentRoles: [
      "Family companion",
      "Watchful household pet",
      "Reward-based obedience and trick training",
      "Supervised scent work and interactive canine games",
    ],
  },
  physical: {
    sizeCategory: "Small to medium",
    height: {
      unit: "cm",
      male: { min: 37, max: 42 },
      female: { min: 35, max: 40 },
    },
    weight: {
      unit: "kg",
      male: { min: 7, max: 11 },
      female: { min: 7, max: 11 },
    },
    lifespanYears: { min: 12, max: 15 },
    coatType:
      "Coarse, hard, straight, wiry outer coat accompanied by a dense undercoat; woolly or curly textures and any tendency to mat are considered atypical",
    coatLength:
      "Approximately 4–7 cm over the torso, with longer furnishings creating a moustache, beard, and eyebrows, slightly shorter hair on the legs, and a well-coated tail",
    coatColors: [
      "Yellow (all shades)",
      "Dark straw yellow (frequently with richer, darker yellow shading on ears, moustache, beard, and eyebrows)",
    ],
    sheddingLevel: null,
    droolingLevel: null,
    distinctiveFeatures: [
      "Rough, wiry yellow coat with a natural, unkempt finish",
      "Pronounced facial furnishings forming an expressive beard, moustache, and bushy eyebrows",
      "Large, round, dark-brown eyes with a friendly, inquisitive gaze",
      "Compact, sturdy, nearly square body proportions",
      "Small, drop ears set relatively high on a broad skull",
    ],
  },
  temperament: {
    traits: [
      "Affectionate and devoted to household members",
      "Lively, cheerful, and playfully spirited",
      "Generally friendly and free from nervous timidity",
      "Sensitive to harsh tones and punitive handling",
      "Intelligent, observant, and eager to participate in daily activities",
      "Retains an instinct to pursue rodents and small scurrying critters",
      "Thrives in close human company and dislikes protracted isolation",
    ],
    scores: {
      affection: 5,
      withChildren: 4,
      withDogs: 4,
      withStrangers: 4,
      protectiveness: 2,
      independence: 2,
      trainability: 4,
      barking: 3,
      energy: 4,
    },
  },
  care: {
    exercise: {
      level: "Moderate; energetic and playful, needing consistent daily walks and mental engagement",
      minutesPerDay: null,
      activities: [
        "Daily brisk neighborhood walks tailored to individual age and fitness",
        "Interactive fetch and scent-tracking games in secure areas",
        "Short, engaging positive reinforcement training drills",
        "Exploratory sniffing walks and canine puzzle toys",
        "Leash-walking practice and polite greeting drills around distractions",
      ],
    },
    grooming: {
      level: "Moderate, requiring manual hand-stripping twice yearly to maintain harsh coat texture",
      brushing:
        "The harsh, wiry outer jacket is traditionally hand-stripped approximately twice a year as the mature dead coat loosens. Regular combing of the beard, moustache, and furnishings prevents tangles and removes mealtime debris without softening the wire texture.",
      bathing:
        "Bathing should be done only when visibly soiled or smelly using a mild canine shampoo, as excessive washing can strip protective natural oils from the wire jacket.",
      notes: [
        "Novice owners should have an experienced groomer demonstrate proper hand-stripping technique before attempting coat maintenance",
        "Regularly inspect the beard, armpits, and underside of the tail for trapped burrs, mats, or food particles",
        "Examine ears weekly for dirt, moisture, or odor, cleaning only the visible outer ear with a veterinarian-recommended solution",
        "Trim nails periodically to prevent overgrowth, splitting, or foot discomfort",
        "Introduce toothbrushing gradually from puppyhood using pet-safe enzymatic toothpaste",
      ],
    },
    training: {
      difficulty: "Generally responsive and quick to learn when handled with patience, praise, and gentle consistency",
      tips: [
        "Utilize positive reinforcement methods, high-value rewards, and short training games rather than punitive corrections",
        "Establish reliable recall and polite loose-leash walking early to manage instinctive chase responses safely",
        "Gradually desensitize the dog to grooming tools, paw handling, varied noises, and unfamiliar visitors",
        "Practice brief, positive separations during puppyhood to build confidence when left alone",
        "Channel historical chasing instincts into structured games such as flirt pole play or scent searching",
      ],
      socialization:
        "Systematic early socialization should introduce varied environments, friendly humans, polite dogs, vehicular sights, and household sounds in a calm, controlled manner. Supervised introductions to smaller household pets are recommended.",
    },
    livingEnvironment: {
      apartmentSuitable: null,
      houseWithYardSuitable: null,
      climates: [
        "No extreme climatic adaptation is documented; provide appropriate indoor shelter, hydration, and weather protection across seasonal extremes",
      ],
      aloneTimeTolerance:
        "Tends to be strongly attached to family members; while capable of resting comfortably alone for moderate intervals when trained gradually, extended isolation without company can lead to boredom or stress",
    },
  },
  nutrition: {
    dietType: "High-quality complete and balanced dog food formulated for the dog's life stage, activity level, and body condition",
    feedingFrequency: {
      puppy: null,
      adult: null,
      senior: null,
    },
    guidelines:
      "Feed a nutritionally balanced commercial or properly formulated veterinary diet matched to life stage, monitoring body condition and weight regularly. Adjust portions according to daily activity, ensure constant access to fresh potable water, and consult a veterinarian for specific caloric targets.",
    considerations: [
      "Measure meal portions carefully and account for training treats to maintain a lean, athletic body condition",
      "Transition between foods gradually over seven to ten days to prevent gastrointestinal upset",
      "Consult a veterinarian if unexpected weight fluctuations, reduced appetite, or digestive issues arise",
    ],
    note: "No rigid breed-wide meal schedule applies; nutritional requirements vary based on age, metabolism, exercise levels, and reproductive status",
  },
  health: {
    overview:
      "The breed benefits from health-conscious breeding practices, and no widespread hereditary defects are currently recognized as endemic to the population. Like all canines, individuals may occasionally encounter common injuries, dental concerns, or age-associated degenerative changes. Consistent preventive veterinary care, age-appropriate vaccinations, parasite control, and reviewing parental health records provide the best foundation for lifelong wellness.",
    commonConditions: [],
    preventiveCare: [
      "Schedule annual or bi-annual routine veterinary examinations alongside core vaccinations and parasite prophylaxis",
      "Maintain a lean, muscular body condition through measured feeding and regular exercise",
      "Routinely examine teeth, eyes, ears, skin, and mobility, seeking prompt veterinary guidance for any abnormalities",
      "Request parental health clearances and multi-generation veterinary histories from prospective breeders",
    ],
    recommendedScreenings: [
      "General veterinary wellness examination (no specific mandatory hereditary screening protocol is universally required for the breed, but prospective owners should request comprehensive parental health histories and discuss routine evaluations with a veterinarian)",
    ],
    dentalCare:
      "Brush teeth several times weekly using an approved pet toothbrush and dog-safe toothpaste, scheduling professional veterinary cleanings when tartar accumulation or gingivitis occurs.",
    earCare:
      "Inspect the drop ears regularly for redness, dark discharge, or unpleasant odor, drying them thoroughly after swimming or bathing.",
    skinCare:
      "Check the skin beneath the wire jacket during routine grooming sessions for dryness, hot spots, or parasites; seek veterinary attention for persistent scratching or skin lesions.",
  },
  suitability: {
    firstTimeOwners: null,
    familiesWithChildren: null,
    seniorOwners: null,
    activeOwners: true,
    apartmentLiving: null,
    idealFor: [
      "Households seeking an affectionate, playful, and interactive medium-small companion dog",
      "Owners able to offer daily walks, mental enrichment, and gentle reward-based training",
      "Families committed to learning proper wire-coat maintenance and periodic hand-stripping",
    ],
    notIdealFor: [
      "Individuals away from home for extended hours daily without canine companionship or care arrangements",
      "Prospective owners wanting a wash-and-wear coat without hand-stripping obligations",
      "Homes unwilling or unable to manage instinctive chasing behavior around small prey animals safely",
    ],
  },
  funFacts: [
    "The name 'Smoushond' traces back to its scruffy, bearded facial furnishings, historically linking it to traditional European stable and terrier-type ratcatchers.",
    "Formal breed descriptions were established in 1905, and dedicated fanciers systematically reconstructed the lineage during the 1970s after postwar registrations had lapsed.",
    "Originally nicknamed the 'gentleman's stable dog' in nineteenth-century Amsterdam, it accompanied carriages through bustling streets and kept horse stalls free of rodents.",
  ],
  faq: [
    {
      question: "Where did the Dutch Smoushond originate?",
      answer:
        "The Dutch Smoushond originated in the Netherlands during the nineteenth century, particularly around Amsterdam, where it was kept in horse stables and alongside carriages to eradicate vermin and provide cheerful companionship.",
    },
    {
      question: "How big is a typical Dutch Smoushond?",
      answer:
        "Adult males generally measure between 37 and 42 cm at the withers, while females stand between 35 and 40 cm. Healthy adult weight across the breed typically ranges from 7 to 11 kg for both sexes, reflecting a compact, balanced build.",
    },
    {
      question: "What coat colors are recognized in the breed?",
      answer:
        "The coat is self-coloured yellow in various shades, with dark straw yellow particularly favoured. A deeper yellow hue often adorns the ears, beard, moustache, and eyebrows, while non-yellow coats are considered atypical.",
    },
    {
      question: "What are the grooming requirements for a Dutch Smoushond?",
      answer:
        "Its coarse, wiry jacket typically requires hand-stripping twice a year when the dead coat loosens, which preserves natural texture and colour. Regular combing of facial furnishings and periodic hygiene trims keep the coat tidy and tangle-free.",
    },
    {
      question: "Is the Dutch Smoushond easily trained?",
      answer:
        "The breed is intelligent, alert, and generally cooperative when trained with positive reinforcement, play, and tasty rewards. Harsh corrections should be avoided, and recall training should begin early to manage historical vermin-hunting instincts.",
    },
    {
      question: "Can a Dutch Smoushond thrive in an apartment setting?",
      answer:
        "An apartment can be suitable provided the dog receives several brisk daily walks, mental stimulation, and plenty of human company. Because individuals can be vigilant and bark at unusual hallway noises, consistent early training is helpful.",
    },
    {
      question: "Does the Dutch Smoushond suffer from specific hereditary diseases?",
      answer:
        "The breed is widely recognized for robust vitality with no specific inherited disorders considered prevalent across the population. Nonetheless, prospective owners should verify parental health histories and maintain proactive veterinary wellness care.",
    },
    {
      question: "What is the expected lifespan of a Dutch Smoushond?",
      answer:
        "A Dutch Smoushond typically enjoys a lifespan of approximately 12 to 15 years when provided with appropriate nutrition, regular physical activity, and attentive veterinary care.",
    },
  ],
  references: [
    "fci-dutch-smoushond-standard",
    "fci-dutch-smoushond-nomenclature",
    "hollandse-smoushonden-club-standard",
    "hollandse-smoushonden-club-health-character",
    "licg-hollandse-smoushond",
    "nhic-hollandse-smoushond",
    "wikimedia-dutch-smoushond-zepp-amsterdam",
    "wikimedia-dutch-smoushond-zepp-01",
    "wikimedia-dutch-smoushond-zepp-02",
    "wsava-global-nutrition-guidelines",
    "avma-pet-dental-care",
    "the-dog-api",
  ],
  evidence: {
    alternateNames: {
      reliability: "reliable_source",
      sources: [
        { id: "fci-dutch-smoushond-standard", role: "verified", locator: "Breed name and historical summary" },
        { id: "licg-hollandse-smoushond", role: "verified", locator: "Breed name and commonly used short form" },
        { id: "the-dog-api", role: "verified", locator: "breed.alt_names: ['Hollandse Smoushond', 'Smoushond']" },
      ],
      verifiedOn: "2026-10-27",
      note: "The Dutch name and short form are documented; 'Dutch Ratter' describes historical stable function.",
    },
    scientificName: {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No breed-specific scientific name exists.",
    },
    group: {
      reliability: "official_standard",
      sources: [
        { id: "fci-dutch-smoushond-standard", role: "verified", locator: "FCI classification: Group 2, Section 1.3 Pinscher and Schnauzer type, without working trial" },
        { id: "fci-dutch-smoushond-nomenclature", role: "verified", locator: "Group 2, Section 1.3: Smoushond" },
        {
          id: "the-dog-api",
          role: "conflicting",
          locator: "breed.breed_group: 'Non-Sporting' (conflicts with official FCI classification in Group 2, Section 1.3)",
        },
      ],
      verifiedOn: "2026-10-27",
      note: "FCI classifies the breed in Group 2, Section 1.3.",
    },
    origin: {
      reliability: "reliable_source",
      sources: [
        { id: "fci-dutch-smoushond-standard", role: "verified", locator: "Origin and historical summary" },
        { id: "licg-hollandse-smoushond", role: "verified", locator: "Origin and history" },
        { id: "the-dog-api", role: "verified", locator: "breed.origin: 'Netherlands'" },
      ],
      verifiedOn: "2026-10-27",
      note: "The breed's country of origin is the Netherlands, historically concentrated around Amsterdam.",
    },
    "origin.country": {
      reliability: "official_standard",
      sources: [
        { id: "fci-dutch-smoushond-standard", role: "verified", locator: "Origin: The Netherlands" },
        { id: "the-dog-api", role: "verified", locator: "breed.origin: 'Netherlands'" },
      ],
      verifiedOn: "2026-10-27",
      note: null,
    },
    "origin.region": {
      reliability: "reliable_source",
      sources: [
        { id: "fci-dutch-smoushond-standard", role: "verified", locator: "Historical summary: Amsterdam stable and carriage context" },
      ],
      verifiedOn: "2026-10-27",
      note: "Amsterdam and surrounding regions represent the historical cradle where the breed accompanied carriages.",
    },
    overview: {
      reliability: "reliable_source",
      sources: [
        { id: "fci-dutch-smoushond-standard", role: "verified", locator: "Historical summary, utilisation, general appearance and temperament" },
        { id: "licg-hollandse-smoushond", role: "verified", locator: "History and breed profile" },
        { id: "the-dog-api", role: "verified", locator: "breed.description and breed.history (factual basis checked and rewritten)" },
      ],
      verifiedOn: "2026-10-27",
      note: "User-facing overview completely rewritten into original prose.",
    },
    "overview.originalPurpose": {
      reliability: "official_standard",
      sources: [
        { id: "fci-dutch-smoushond-standard", role: "verified", locator: "Historical summary and utilisation: stable companion and ratcatcher" },
      ],
      verifiedOn: "2026-10-27",
      note: null,
    },
    "overview.currentRoles": {
      reliability: "estimate",
      sources: [
        { id: "licg-hollandse-smoushond", role: "cited", locator: "Modern companion and activity guidance" },
      ],
      verifiedOn: null,
      note: "Modern roles are plausible suggestions based on companion traits.",
    },
    "physical.sizeCategory": {
      reliability: "estimate",
      sources: [
        { id: "fci-dutch-smoushond-standard", role: "cited", locator: "Height and weight specifications" },
      ],
      verifiedOn: null,
      note: "Small-to-medium is an editorial category derived from standard measurements.",
    },
    "physical.height": {
      reliability: "official_standard",
      sources: [
        { id: "fci-dutch-smoushond-standard", role: "verified", locator: "Size and weight: height at withers (males 37–42 cm, females 35–40 cm)" },
        {
          id: "the-dog-api",
          role: "conflicting",
          locator: "breed.height: male 35.5–42 cm, female 33–42 cm (conflicts with FCI standard parameters)",
        },
      ],
      verifiedOn: "2026-10-27",
      note: "Follows official FCI Standard No. 308 measurements without unit conversion.",
    },
    "physical.weight": {
      reliability: "official_standard",
      sources: [
        { id: "fci-dutch-smoushond-standard", role: "verified", locator: "Size and weight: weight 7–11 kg breed-wide" },
        {
          id: "the-dog-api",
          role: "conflicting",
          locator: "breed.weight: male 9–11 kg, female 8–10 kg (conflicts with FCI single unified weight range of 7–11 kg)",
        },
      ],
      verifiedOn: "2026-10-27",
      note: "The standard specifies a single unified 7–11 kg range across both sexes.",
    },
    "physical.lifespanYears": {
      reliability: "estimate",
      sources: [
        { id: "licg-hollandse-smoushond", role: "cited", locator: "General breed information: average age 12–15 years" },
        { id: "nhic-hollandse-smoushond", role: "cited", locator: "Breed data: life expectancy 12–15 years" },
        { id: "the-dog-api", role: "cited", locator: "breed.life_span: 12–15 years" },
      ],
      verifiedOn: null,
      note: "Secondary source consensus estimate of 12–15 years.",
    },
    "physical.coatType": {
      reliability: "official_standard",
      sources: [
        { id: "fci-dutch-smoushond-standard", role: "verified", locator: "Coat: hair and undercoat" },
      ],
      verifiedOn: "2026-10-27",
      note: null,
    },
    "physical.coatLength": {
      reliability: "official_standard",
      sources: [
        { id: "fci-dutch-smoushond-standard", role: "verified", locator: "Coat: length 4–7 cm and facial furnishings" },
      ],
      verifiedOn: "2026-10-27",
      note: null,
    },
    "physical.coatColors": {
      reliability: "official_standard",
      sources: [
        { id: "fci-dutch-smoushond-standard", role: "verified", locator: "Coat: colour: self-coloured yellow in all shades, dark straw yellow preferred" },
        {
          id: "the-dog-api",
          role: "conflicting",
          locator: "GET /breeds/{id}/colours lists 17 generic colours, whereas FCI Standard No. 308 restricts the breed strictly to yellow shades",
        },
      ],
      verifiedOn: "2026-10-27",
      note: "Only solid yellow in various shades is permitted; other colours are disqualifications.",
    },
    "physical.sheddingLevel": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No standardized measurement of shedding volume is documented.",
    },
    "physical.droolingLevel": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No verified breed-specific drooling data exists.",
    },
    "physical.distinctiveFeatures": {
      reliability: "official_standard",
      sources: [
        { id: "fci-dutch-smoushond-standard", role: "verified", locator: "General appearance, head, eyes, ears, and coat" },
      ],
      verifiedOn: "2026-10-27",
      note: null,
    },
    "temperament.traits": {
      reliability: "reliable_source",
      sources: [
        { id: "fci-dutch-smoushond-standard", role: "verified", locator: "Behaviour and temperament" },
        { id: "licg-hollandse-smoushond", role: "verified", locator: "Character and household behaviour" },
        { id: "the-dog-api", role: "verified", locator: "breed.temperament: 'Friendly, alert, affectionate, playful, lively, intelligent'" },
      ],
      verifiedOn: "2026-10-27",
      note: "Traits reflect documented behavioral tendencies.",
    },
    "temperament.scores": {
      reliability: "estimate",
      sources: [
        { id: "fci-dutch-smoushond-standard", role: "cited", locator: "Temperament description" },
        { id: "licg-hollandse-smoushond", role: "cited", locator: "Character and behaviour" },
      ],
      verifiedOn: null,
      note: "Editorial ratings on a 1–5 scale.",
    },
    "care.exercise.level": {
      reliability: "reliable_source",
      sources: [
        { id: "licg-hollandse-smoushond", role: "verified", locator: "Activity, play and exercise needs" },
      ],
      verifiedOn: "2026-10-27",
      note: "Moderate qualitative exercise requirement.",
    },
    "care.exercise.minutesPerDay": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No empirical daily duration target is established by reliable sources.",
    },
    "care.exercise.activities": {
      reliability: "general_guidance",
      sources: [
        { id: "licg-hollandse-smoushond", role: "cited", locator: "Activity and training guidance" },
      ],
      verifiedOn: null,
      note: "Practical suggestions for physical and mental engagement.",
    },
    "care.grooming": {
      reliability: "reliable_source",
      sources: [
        { id: "licg-hollandse-smoushond", role: "verified", locator: "Coat care and hand-stripping" },
        { id: "hollandse-smoushonden-club-standard", role: "verified", locator: "Coat texture and length" },
      ],
      verifiedOn: "2026-10-27",
      note: "Hand-stripping twice yearly is the recognized grooming technique for wire coats.",
    },
    "care.training": {
      reliability: "reliable_source",
      sources: [
        { id: "licg-hollandse-smoushond", role: "verified", locator: "Training and upbringing" },
      ],
      verifiedOn: "2026-10-27",
      note: "Qualitative training assessment.",
    },
    "care.training.tips": {
      reliability: "general_guidance",
      sources: [
        { id: "licg-hollandse-smoushond", role: "cited", locator: "Positive training, socialisation and alone-time advice" },
      ],
      verifiedOn: null,
      note: "Best-practice reward-based handling recommendations.",
    },
    "care.training.socialization": {
      reliability: "general_guidance",
      sources: [
        { id: "licg-hollandse-smoushond", role: "cited", locator: "Socialisation and supervision guidance" },
      ],
      verifiedOn: null,
      note: "Early environmental exposure guidance.",
    },
    "care.livingEnvironment.apartmentSuitable": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Categorical suitability depends on owner commitment, exercise, and individual bark training.",
    },
    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Yard access does not substitute for daily human interaction and exercise.",
    },
    "care.livingEnvironment.climates": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General canine weather protection guidance.",
    },
    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "reliable_source",
      sources: [
        { id: "licg-hollandse-smoushond", role: "verified", locator: "Staying home alone" },
      ],
      verifiedOn: "2026-10-27",
      note: "Prefers companionship; can manage short periods when conditioned gradually.",
    },
    nutrition: {
      reliability: "general_guidance",
      sources: [
        { id: "wsava-global-nutrition-guidelines", role: "cited", locator: "Nutritional assessment and individualised feeding guidance" },
      ],
      verifiedOn: null,
      note: "Standard veterinary nutritional assessment guidelines.",
    },
    "nutrition.feedingFrequency.puppy": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Consult a veterinarian for individualized puppy feeding schedules.",
    },
    "nutrition.feedingFrequency.adult": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Consult a veterinarian for individualized adult feeding schedules.",
    },
    "nutrition.feedingFrequency.senior": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Consult a veterinarian for individualized senior feeding schedules.",
    },
    "health.overview": {
      reliability: "reliable_source",
      sources: [
        { id: "hollandse-smoushonden-club-health-character", role: "verified", locator: "Health and breeding policy" },
      ],
      verifiedOn: "2026-10-27",
      note: "Population health monitoring indicates no prevalent breed-specific inherited disorders.",
    },
    "health.commonConditions": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No breed-specific conditions with significant prevalence are documented.",
    },
    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "Standard veterinary preventive protocol recommendations.",
    },
    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        { id: "licg-hollandse-smoushond", role: "verified", locator: "Inherited disease research and breeding tests" },
      ],
      verifiedOn: "2026-10-27",
      note: "No mandatory hereditary testing scheme is enforced, but parental screening remains good practice.",
    },
    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [
        { id: "avma-pet-dental-care", role: "cited", locator: "Preventive dental care" },
      ],
      verifiedOn: null,
      note: "Standard veterinary home dental care guidance.",
    },
    "health.earCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "Standard drop-ear hygiene practices.",
    },
    "health.skinCare": {
      reliability: "general_guidance",
      sources: [
        { id: "licg-hollandse-smoushond", role: "cited", locator: "Coat care and skin checks" },
      ],
      verifiedOn: null,
      note: "Regular skin inspection during stripping and brushing.",
    },
    "suitability.firstTimeOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Suitability depends on commitment to grooming and training rather than dog ownership history.",
    },
    "suitability.familiesWithChildren": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Household fit depends on child age, training, and adult supervision.",
    },
    "suitability.seniorOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Categorical senior suitability is not verified.",
    },
    "suitability.activeOwners": {
      reliability: "estimate",
      sources: [
        { id: "licg-hollandse-smoushond", role: "cited", locator: "Activity and play needs" },
      ],
      verifiedOn: null,
      note: "Active owners able to provide daily exercise and companionship are well suited.",
    },
    "suitability.apartmentLiving": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Varies with exercise, bark management, and human company.",
    },
    "suitability.idealFor": {
      reliability: "estimate",
      sources: [
        { id: "licg-hollandse-smoushond", role: "cited", locator: "Companionship, activity and grooming needs" },
      ],
      verifiedOn: null,
      note: "Suggested ownership scenarios.",
    },
    "suitability.notIdealFor": {
      reliability: "estimate",
      sources: [
        { id: "licg-hollandse-smoushond", role: "cited", locator: "Alone-time, coat-care and prey-interest guidance" },
      ],
      verifiedOn: null,
      note: "Practical ownership challenges to consider.",
    },
    funFacts: {
      reliability: "reliable_source",
      sources: [
        { id: "fci-dutch-smoushond-standard", role: "verified", locator: "Historical summary and 1905 breed standard" },
      ],
      verifiedOn: "2026-10-27",
      note: "Historical details paraphrased from official breed documentation.",
    },
    faq: {
      reliability: "reliable_source",
      sources: [
        { id: "fci-dutch-smoushond-standard", role: "verified", locator: "Origin, classification, measurements, coat and colour" },
        { id: "licg-hollandse-smoushond", role: "verified", locator: "History, grooming, training, health and lifespan" },
        { id: "nhic-hollandse-smoushond", role: "cited", locator: "Secondary lifespan estimate" },
      ],
      verifiedOn: "2026-10-27",
      note: "Answers rewritten in original words avoiding unverified promises.",
    },
  },
  updatedOn: "2026-10-27",
};
