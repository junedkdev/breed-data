import type { Breed } from "../schema/breed.types";

export const boykin_spaniel: Breed = {
  slug: "boykin-spaniel",
  name: "Boykin Spaniel",
  scientificName: null,
  alternateNames: ["Boykin", "Little Brown Dog", "Swamp Poodle"],
  group: "AKC Sporting Group; UKC Gun Dog Group. Developed as a flushing and retrieving spaniel.",
  origin: { country: "United States", region: "South Carolina, especially the Camden and Wateree River area" },
  images: [],
  overview: {
    summary: "A compact, athletic brown sporting spaniel from South Carolina, bred to flush and retrieve game on land and in water.",
    description: "The Boykin Spaniel is a medium-sized, energetic sporting dog developed in South Carolina for practical hunting work. Its manageable size, webbed feet, water confidence and enthusiasm for retrieving made it useful to hunters working from small boats and through marshes and wooded cover. Boykins are typically sociable, eager to work and responsive to reward-based training, but they need regular exercise, companionship and activities that engage their nose and retrieving instincts. Their wavy or curly brown coat is usually straightforward to maintain with routine brushing, while their pendant ears deserve regular checks, especially after swimming.",
    history: "The breed took shape in the early twentieth century around the Boykin community near Camden, South Carolina. A small stray dog found in Spartanburg was given to hunter Whitaker Boykin, whose work with the dog and later breeding helped establish a compact flushing and retrieving spaniel suited to local hunting and small boats. The Boykin Spaniel became South Carolina's official state dog in 1985. The breed was recognised by the United Kennel Club in 1985 and by the American Kennel Club in 2009.",
    originalPurpose: "Flushing upland game and retrieving waterfowl and other game in marshes, rivers, wooded cover and from small hunting boats.",
    currentRoles: ["Flushing and retrieving game", "Waterfowl and field hunting companion", "Hunt-test and other dog-sport participant", "Active family companion for households that provide exercise and training", "Scent games, retrieving games and outdoor activities"]
  },
  physical: {
    sizeCategory: "Medium",
    height: { unit: "cm", male: { min: 39.4, max: 45.7 }, female: { min: 35.6, max: 41.9 } },
    weight: { unit: "kg", male: { min: 13.6, max: 18.1 }, female: { min: 11.3, max: 15.9 } },
    lifespanYears: null,
    coatType: "A medium-length coat that may be flat, slightly wavy or moderately curly, with light feathering on the legs, chest, ears, belly and hindquarters. Coat texture and amount of wave vary between individuals.",
    coatLength: "Medium; feathering is usually light rather than excessively long.",
    coatColors: ["Solid rich liver", "Brown", "Dark chocolate"],
    sheddingLevel: null,
    droolingLevel: null,
    distinctiveFeatures: ["Medium-sized, sturdy, athletic spaniel built for sustained field work", "Solid brown coat, usually liver or dark chocolate", "Pendulous ears with feathering", "Expressive eyes that can range from yellow or amber to brown", "Webbed feet that support swimming", "A compact, balanced body that is slightly longer than it is tall", "The breed is often seen with a docked tail in the United States, but natural tails occur and docking rules vary by location"]
  },
  temperament: {
    traits: ["Friendly", "Eager to please", "Intelligent", "Energetic", "Playful", "People-oriented", "Work-motivated", "Typically sociable when well socialised", "Can become restless without enough exercise and engagement"],
    scores: { affection: 4, withChildren: 4, withDogs: 4, withStrangers: 4, protectiveness: 2, independence: 3, trainability: 4, barking: 3, energy: 5 }
  },
  care: {
    exercise: {
      level: "High. This active sporting breed generally needs daily aerobic activity plus opportunities to retrieve, sniff, learn and work with its person.",
      minutesPerDay: null,
      activities: ["Brisk walks and hikes suited to age and fitness", "Retrieving games on safe ground", "Supervised swimming in safe water", "Scent work and search games", "Positive obedience training", "Field work, hunt tests, agility or other suitable dog sports", "Food puzzles and short training games"]
    },
    grooming: {
      level: "Low to moderate",
      brushing: "Brush at least weekly to remove loose hair and debris and prevent tangles in the feathering. Check the ears, chest, belly, legs and tail area after outdoor activity.",
      bathing: "Bathe when dirty or after muddy or smelly outings, using a dog-safe shampoo and rinsing well. Dry the coat and ears thoroughly after swimming.",
      notes: ["Check pendant ears frequently for redness, odour, discharge or moisture, particularly after swimming or wet field work.", "Brush out burrs and plant material after walks in long grass or woodland.", "Trim nails as needed and check paws after running on rough ground.", "Brush teeth regularly with dog-specific toothpaste.", "Introduce grooming and ear handling positively from puppyhood.", "Avoid removing protective coat unnecessarily."]
    },
    training: {
      difficulty: "Usually responsive and keen to work, but its energy and enthusiasm mean training should be consistent and paired with daily outlets for activity.",
      tips: ["Use reward-based training, short sessions and clear cues.", "Begin recall, loose-leash walking and settle skills early.", "Use retrieving and scent games as structured rewards.", "Teach calm behaviour around wildlife, other dogs and visitors.", "Practise impulse control before throwing toys or allowing access to water.", "Build swimming confidence gradually and supervise all water activity.", "Include scent work and problem-solving, not only physical exercise.", "Vary training to keep an intelligent, active dog engaged."],
      socialization: "Introduce the puppy gradually and positively to people, dogs, household sounds, transport, grooming, water and different environments. Pair new experiences with rewards and allow the puppy to observe at a comfortable distance. Continue practising calm greetings and reliable recall as the dog matures."
    },
    livingEnvironment: {
      apartmentSuitable: null,
      houseWithYardSuitable: true,
      climates: ["Adaptable to many climates when given shade, water and appropriate shelter; use extra care during hot, humid weather.", "Well suited to outdoor activities when conditions are safe, but should live as a companion rather than being isolated outdoors."],
      aloneTimeTolerance: null
    }
  },
  nutrition: {
    dietType: "A complete and balanced diet appropriate to the dog's life stage, body condition, activity and veterinary needs.",
    feedingFrequency: {
      puppy: "Puppies generally need several measured meals spread through the day. Select a complete puppy food appropriate for expected adult size and ask a veterinarian about the schedule.",
      adult: "Two measured meals daily is a common routine; adjust portions to body condition, workload and the food's energy density.",
      senior: "Adjust diet and portions to activity, body condition, dental health and medical needs with veterinary guidance."
    },
    guidelines: "Measure meals and adjust them to maintain a lean, fit body condition. Working or highly active dogs may need more energy than less active pets, but the amount depends on the individual and the food. Keep fresh water available, count training treats in the daily allowance and change diets gradually unless a veterinarian advises otherwise.",
    considerations: ["Match food intake to activity level and monitor body condition.", "Use a complete growth diet for puppies and avoid supplements unless advised by a veterinarian.", "Provide fresh water, especially after exercise and swimming.", "Count training treats and chews as part of the overall diet.", "Discuss weight changes or persistent digestive signs with a veterinarian.", "For field work, plan hydration, rest and gradual conditioning."],
    note: "No breed-specific daily calorie or gram-per-day target was established from the sources reviewed. Individual requirements vary with age, workload, body condition and food energy density."
  },
  health: {
    overview: "Breed-club and kennel-club guidance identifies several inherited conditions for which responsible Boykin Spaniel breeders commonly pursue screening, including hip and patellar problems, eye conditions and certain inherited diseases. A screening recommendation indicates a risk worth managing; it does not mean every Boykin will develop the condition or establish its prevalence.",
    commonConditions: ["Hip dysplasia is a recognised screening concern; an individual dog's risk depends on inherited and environmental factors.", "Patellar luxation is included in breed-club health screening recommendations.", "Eye conditions, including juvenile cataracts and Collie Eye Anomaly, are cited in breed health guidance.", "Exercise-induced collapse (EIC) is an inherited condition for which DNA testing is recommended by the national breed club.", "Degenerative myelopathy (DM) is included in some breed-club DNA-screening guidance; test results should be interpreted with a veterinarian."],
    preventiveCare: ["Choose a responsible breeder who can provide verifiable health-testing results for the parents.", "Ask about hip and patella evaluations, eye examinations and relevant DNA test results, including EIC and CEA.", "Keep up with veterinary examinations, vaccinations and parasite prevention based on local risk.", "Maintain a lean body condition and build exercise gradually, especially in young dogs.", "Inspect and dry ears after swimming and seek veterinary care for persistent irritation or discharge.", "Supervise swimming and avoid unsafe currents, cold water and over-fatigue.", "Seek veterinary advice promptly for exercise-associated weakness, collapse, unusual gait, eye changes or persistent pain."],
    recommendedScreenings: ["Hip evaluation", "Patella evaluation", "Ophthalmologist eye examination", "Exercise-induced collapse (EIC) DNA test", "Collie Eye Anomaly (CEA/CH) DNA test", "Ask the breeder and veterinarian whether cardiac evaluation and degenerative myelopathy (DM) testing are appropriate for the line and breeding plan"],
    dentalCare: "Brush teeth regularly with dog-specific toothpaste and have the mouth checked during veterinary visits. Ask for an examination for persistent bad breath, bleeding, broken teeth, pain or a change in eating.",
    earCare: "Pendant ears can retain moisture after swimming and field work. Check them regularly and dry the outer ear gently. Use only a veterinarian-recommended cleaner; seek advice for redness, odour, discharge, head shaking or discomfort.",
    skinCare: "Check the coat and skin after field activity for burrs, ticks, scratches, hot spots and damp areas. Contact a veterinarian for persistent itching, recurrent irritation, hair loss or sores."
  },
  suitability: {
    firstTimeOwners: null,
    familiesWithChildren: true,
    seniorOwners: null,
    activeOwners: true,
    apartmentLiving: null,
    idealFor: ["Active people who enjoy outdoor exercise and training", "Hunters looking for a flushing and retrieving spaniel", "Households interested in scent games, retrieving and dog sports", "Families able to supervise children and dogs and provide consistent training", "Owners who can include the dog in daily life rather than leaving it isolated"],
    notIdealFor: ["People who want a low-energy dog with minimal exercise needs", "Households unable to provide companionship, training and daily activity", "Owners who expect reliable off-leash behaviour without recall training", "People who cannot supervise the dog around water, wildlife or unfamiliar dogs", "Homes where a lively working-bred dog would routinely be left alone for long periods"]
  },
  funFacts: ["The Boykin Spaniel was developed in South Carolina, United States.", "It became South Carolina's official state dog in 1985.", "The breed was selected to flush and retrieve game while remaining compact enough for hunters using small boats.", "The coat is usually solid liver, brown or dark chocolate; the UKC standard permits a small white chest spot.", "Boykins are capable swimmers, and many enjoy retrieving from water when introduced safely.", "Breed health guidance includes DNA screening for exercise-induced collapse and Collie Eye Anomaly."],
  faq: [
    { question: "Where does the Boykin Spaniel come from?", answer: "The breed was developed in South Carolina in the United States, especially around the Camden and Wateree River area." },
    { question: "What was the Boykin Spaniel bred to do?", answer: "It was developed as a flushing and retrieving hunting spaniel, working in fields, woodland and wetlands and retrieving game from water." },
    { question: "How big does a Boykin Spaniel get?", answer: "Breed standards give males a height of about 39–46 cm and females about 36–42 cm at the withers. Typical standard weights are roughly 13.6–18.1 kg for males and 11.3–15.9 kg for females; individual dogs vary." },
    { question: "What colours are Boykin Spaniels?", answer: "The expected coat is solid rich liver, brown or dark chocolate. The UKC standard permits a small white spot on the chest." },
    { question: "Is a Boykin Spaniel a good family dog?", answer: "Many are friendly, people-oriented companions, but behaviour depends on the individual dog's temperament, socialisation and training. Supervise interactions with children and provide exercise and rest." },
    { question: "How much exercise does a Boykin Spaniel need?", answer: "It is an active sporting breed that generally needs substantial daily activity and mental engagement. A reliable breed-specific minutes-per-day figure was not established, so tailor exercise to age, fitness, health and workload." },
    { question: "Does a Boykin Spaniel shed a lot?", answer: "A reliable breed-specific shedding rate was not found. Weekly brushing is a useful starting point, with extra attention to feathering after outdoor activity." },
    { question: "What health tests should a Boykin Spaniel breeder provide?", answer: "Ask for verifiable hip and patella evaluations, an eye examination and relevant DNA test results such as EIC and CEA. Breed health guidance also discusses DM and cardiac checks; confirm appropriate tests for the line with the breeder and veterinarian." },
    { question: "Is the Boykin Spaniel easy to train?", answer: "Many Boykins are eager to please and motivated by retrieving, food and play. Consistent reward-based training is important, particularly for recall, impulse control and calm behaviour around wildlife and water." },
    { question: "Can a Boykin Spaniel live in an apartment?", answer: "It depends on the individual dog and owner's routine. Apartment living is only realistic when the dog receives ample exercise, training, enrichment and outdoor access; a yard alone does not meet its needs." },
    { question: "How long does a Boykin Spaniel live?", answer: "A dependable lifespan range could not be verified from the official standard and reliable sources used for this record, so this profile does not publish a numerical estimate." },
    { question: "What should I know about caring for its ears?", answer: "Check pendant ears regularly and dry them gently after swimming. Seek veterinary advice for odour, redness, discharge, repeated head shaking or discomfort rather than treating persistent signs at home." }
  ],
  references: [
    "american-kennel-club-boykin-spaniel-official-standard",
    "united-kennel-club-boykin-spaniel-standard",
    "american-kennel-club-boykin-spaniel",
    "boykin-spaniel-club-breed-history",
    "american-kennel-club-sporting-group-health-testing",
    "boykin-spaniel-society-puppy-health-testing"
  ],
  evidence: {
    scientificName: { reliability: "unavailable", sources: [], verifiedOn: null, note: "The breed standards reviewed do not provide a breed-specific scientific name; no taxonomic label is guessed." },
    alternateNames: { reliability: "reliable_source", sources: [{ id: "boykin-spaniel-club-breed-history", role: "verified", locator: "History and Origin: common nickname and breed history" }], verifiedOn: "2026-10-19", note: "Informal nicknames can vary by region." },
    group: { reliability: "reliable_source", sources: [{ id: "american-kennel-club-boykin-spaniel", role: "verified", locator: "Breed overview and Sporting Group classification" }, { id: "united-kennel-club-boykin-spaniel-standard", role: "verified", locator: "Official UKC standard and Gun Dog grouping" }], verifiedOn: "2026-10-19", note: "Registry groupings differ; both are identified." },
    origin: { reliability: "official_standard", sources: [{ id: "american-kennel-club-boykin-spaniel-official-standard", role: "verified", locator: "General Appearance: developed in South Carolina, USA" }, { id: "boykin-spaniel-club-breed-history", role: "verified", locator: "History and Origin" }], verifiedOn: "2026-10-19", note: null },
    overview: { reliability: "official_standard", sources: [{ id: "american-kennel-club-boykin-spaniel-official-standard", role: "verified", locator: "General Appearance, size, coat and working purpose" }, { id: "boykin-spaniel-club-breed-history", role: "verified", locator: "History and Origin; development and state-dog recognition" }], verifiedOn: "2026-10-19", note: "Descriptions are original paraphrases of standard and history information." },
    physical: { reliability: "official_standard", sources: [{ id: "american-kennel-club-boykin-spaniel-official-standard", role: "verified", locator: "Size, Proportion, Substance; coat and colour" }, { id: "united-kennel-club-boykin-spaniel-standard", role: "verified", locator: "Coat, Color, Height and Weight" }], verifiedOn: "2026-10-19", note: "Imperial standard measurements converted to centimetres and kilograms and rounded to one decimal place. Registry standards can differ slightly." },
    "physical.lifespanYears": { reliability: "unavailable", sources: [], verifiedOn: null, note: "A dependable breed-specific lifespan range was not established from reliable sources reviewed." },
    "physical.sheddingLevel": { reliability: "unavailable", sources: [], verifiedOn: null, note: "Standards describe coat type but do not quantify shedding; no reliable breed-specific estimate was found." },
    "physical.droolingLevel": { reliability: "unavailable", sources: [], verifiedOn: null, note: "No reliable breed-specific drooling information was found." },
    "temperament.traits": { reliability: "official_standard", sources: [{ id: "american-kennel-club-boykin-spaniel-official-standard", role: "verified", locator: "Temperament and general breed description" }, { id: "united-kennel-club-boykin-spaniel-standard", role: "verified", locator: "Temperament and working character" }], verifiedOn: "2026-10-19", note: "Breed-level tendencies do not guarantee individual behaviour." },
    "temperament.scores": { reliability: "estimate", sources: [{ id: "american-kennel-club-boykin-spaniel", role: "cited", locator: "General breed overview and activity/temperament summary" }], verifiedOn: null, note: "Editorial 1–5 scores are estimates, not scientific measurements; individual temperament varies." },
    care: { reliability: "general_guidance", sources: [{ id: "american-kennel-club-boykin-spaniel", role: "cited", locator: "Grooming and activity information" }, { id: "boykin-spaniel-club-breed-history", role: "cited", locator: "Flushing and retrieving purpose" }], verifiedOn: null, note: "Practical general advice adapted to an active sporting spaniel, not measured breed-specific requirements." },
    "care.exercise.minutesPerDay": { reliability: "unavailable", sources: [], verifiedOn: null, note: "No reliable source reviewed sets an evidence-based number of exercise minutes per day." },
    "care.livingEnvironment.apartmentSuitable": { reliability: "unavailable", sources: [], verifiedOn: null, note: "No reliable source establishes a universal breed-specific apartment-suitability rating; suitability depends on the individual dog and household." },
    "care.livingEnvironment.aloneTimeTolerance": { reliability: "unavailable", sources: [], verifiedOn: null, note: "No reliable breed-specific alone-time tolerance threshold was established." },
    nutrition: { reliability: "general_guidance", sources: [{ id: "american-kennel-club-boykin-spaniel", role: "cited", locator: "General care guidance" }], verifiedOn: null, note: "General feeding guidance; amount depends on body condition, workload and food energy density." },
    health: { reliability: "reliable_source", sources: [{ id: "american-kennel-club-sporting-group-health-testing", role: "verified", locator: "Boykin Spaniel health testing recommendations" }, { id: "boykin-spaniel-society-puppy-health-testing", role: "verified", locator: "Breed health concerns and recommended clearances" }], verifiedOn: "2026-10-19", note: "Screening concerns do not establish population prevalence or mean every dog will be affected." },
    "health.commonConditions": { reliability: "reliable_source", sources: [{ id: "american-kennel-club-sporting-group-health-testing", role: "verified", locator: "Recommended hip, patella, eye, EIC and CEA screening" }, { id: "boykin-spaniel-society-puppy-health-testing", role: "verified", locator: "Health clearance checklist, including hip, heart, patella, eye, EIC, DM and CEA" }], verifiedOn: "2026-10-19", note: "These are conditions named in screening guidance, not prevalence estimates." },
    "health.recommendedScreenings": { reliability: "reliable_source", sources: [{ id: "american-kennel-club-sporting-group-health-testing", role: "verified", locator: "Boykin Spaniel recommended health tests" }, { id: "boykin-spaniel-society-puppy-health-testing", role: "verified", locator: "Breeder health-clearance checklist" }], verifiedOn: "2026-10-19", note: "Recommendations differ between organisations and breeding lines; confirm the appropriate panel with a veterinarian." },
    suitability: { reliability: "estimate", sources: [{ id: "american-kennel-club-boykin-spaniel", role: "cited", locator: "Activity, grooming and temperament description" }, { id: "american-kennel-club-boykin-spaniel-official-standard", role: "cited", locator: "Sporting-dog purpose and temperament" }], verifiedOn: null, note: "Suitability is editorial guidance, not a guarantee of individual behaviour." },
    "suitability.firstTimeOwners": { reliability: "unavailable", sources: [], verifiedOn: null, note: "No reliable source establishes whether the breed suits first-time owners." },
"suitability.seniorOwners": { reliability: "unavailable", sources: [], verifiedOn: null, note: "No reliable source establishes breed-specific suitability for senior owners." },
"suitability.apartmentLiving": { reliability: "unavailable", sources: [], verifiedOn: null, note: "No reliable source establishes a breed-specific apartment-living rating." },
    funFacts: { reliability: "reliable_source", sources: [{ id: "boykin-spaniel-club-breed-history", role: "verified", locator: "History and Origin: South Carolina state dog and development" }, { id: "united-kennel-club-boykin-spaniel-standard", role: "verified", locator: "Coat and colour standard" }, { id: "american-kennel-club-sporting-group-health-testing", role: "verified", locator: "Boykin Spaniel screening recommendations" }], verifiedOn: "2026-10-19", note: null },
    faq: { reliability: "reliable_source", sources: [{ id: "american-kennel-club-boykin-spaniel-official-standard", role: "verified", locator: "Origin, size, coat, colour and working purpose" }, { id: "united-kennel-club-boykin-spaniel-standard", role: "verified", locator: "Height, weight, coat and colour" }, { id: "american-kennel-club-sporting-group-health-testing", role: "verified", locator: "Recommended health tests" }], verifiedOn: "2026-10-19", note: "Answers state uncertainty for lifespan and exercise duration rather than inventing estimates." }
  },
  updatedOn: "2026-10-19"
};
