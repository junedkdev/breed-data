import type { Breed } from "../schema/breed.types";

export const american_akita: Breed = {
  slug: "american-akita",
  name: "American Akita",
  scientificName: null,

  alternateNames: [
    "Akita Americain",
    "Akita Americano",
    "Great Japanese Dog",
  ],

  group:
    "FCI Group 5 — Spitz and primitive types; Section 5 — Asian Spitz and related breeds",

  origin: {
    country: "Japan",
    region: null,
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/American-akita.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:American-akita.jpg",
      title: "American-akita.jpg",
      description: "An American Akita.",
      creator: "Jonnydrh",
      uploader: "Jonnydrh",
      capturedOn: "2012-01-31",
      uploadedOn: "2012-01-31",
      width: 1025,
      height: 794,
      licenseId: "cc0-1.0",
      attribution:
        "Photo by Jonnydrh, Wikimedia Commons, CC0 1.0 (https://creativecommons.org/publicdomain/zero/1.0/).",
      restrictions: null,
      metadataCheckedOn: "2026-10-26",
    },
  ],

  overview: {
    summary:
      "The American Akita is a large, powerful spitz-type dog with a substantial frame, broad head, erect ears and a thick double coat. Developed in the United States from Akita lines originating in Japan, it is known for a dignified, courageous and alert manner. It benefits from thoughtful socialisation, consistent training and responsible management around other dogs.",

    description:
      "The American Akita has a strong, balanced build with heavy bone, a broad head, relatively small dark eyes and small triangular ears that angle forward. Its thick undercoat lies beneath a straight, harsh outer coat. The tail is heavily furnished and curls over the back or against the flank. Coat colours include red, fawn, white, brindle and pinto patterns. The breed can be devoted to its household while remaining independent and selective in its interactions, so early positive socialisation and careful handling are important.",

    history:
      "The breed's history begins with Akitas from Japan. Akita-type dogs were used in the Akita region for hunting and later crossed with other large breeds, increasing their size and changing some of their original spitz characteristics. After the Second World War, dogs from lines brought to the United States became the foundation of a distinct American type. Over time, this type developed separately from the Japanese Akita and was recognised as a distinct breed by the FCI.",

    originalPurpose:
      "The breed descends from Japanese Akitas with a history of hunting and other working roles. The current FCI standard classifies the American Akita as a companion dog.",

    currentRoles: [
      "Companion dog",
      "Family companion in a suitable, well-managed household",
      "Participant in structured training and enrichment activities",
    ],
  },

  physical: {
    sizeCategory: "Large",

    height: {
      unit: "cm",
      male: {
        min: 66,
        max: 71,
      },
      female: {
        min: 61,
        max: 66,
      },
    },

    weight: {
      unit: null,
      male: null,
      female: null,
    },

    lifespanYears: null,

    coatType: "Double coat with a dense, soft undercoat and a straight, harsh outer coat",

    coatLength: "Short to medium; longer and more profuse on the tail",

    coatColors: [
      "Red",
      "Fawn",
      "White",
      "Pinto",
      "Brindle",
    ],

    sheddingLevel: null,
    droolingLevel: null,

    distinctiveFeatures: [
      "Large, sturdy build with heavy bone",
      "Broad head with a blunt-triangle outline",
      "Relatively small, dark-brown eyes",
      "Small, erect, triangular ears angled forward",
      "Thick double coat",
      "Large, well-furnished curled tail",
      "Body longer than height at the withers",
    ],
  },

  temperament: {
    traits: [
      "Alert",
      "Responsive",
      "Dignified",
      "Courageous",
      "Independent-minded",
      "May be intolerant of other dogs, particularly dogs of the same sex",
    ],

    scores: {
      affection: null,
      withChildren: null,
      withDogs: null,
      withStrangers: null,
      protectiveness: null,
      independence: null,
      trainability: null,
      barking: null,
      energy: null,
    },
  },

  care: {
    exercise: {
      level: "Regular daily exercise and mental enrichment are important",
      minutesPerDay: null,
      activities: [
        "Leashed walks",
        "Reward-based obedience practice",
        "Structured scent and problem-solving games",
        "Supervised outdoor activity in a secure area",
      ],
    },

    grooming: {
      level: "Moderate; increased brushing may be needed during shedding periods",
      brushing:
        "Brush regularly to remove loose undercoat and prevent loose hair from accumulating. Increase brushing when the coat sheds more heavily.",
      bathing:
        "Bathe when needed with a dog-appropriate shampoo and dry the dense coat thoroughly.",
      notes: [
        "Check the skin and coat during grooming.",
        "Inspect the ears regularly and keep them clean and dry.",
        "Trim nails as needed and maintain routine dental care.",
        "Expect loose undercoat to require additional attention during seasonal shedding.",
      ],
    },

    training: {
      difficulty:
        "Requires consistent, patient training and responsible management",
      tips: [
        "Use reward-based methods and clear, consistent boundaries.",
        "Start socialisation early and continue it throughout adulthood.",
        "Practise leash manners and recall in controlled, secure settings.",
        "Manage introductions to unfamiliar dogs carefully rather than assuming every interaction will be welcome.",
        "Keep training sessions engaging and avoid relying on force or intimidation.",
      ],
      socialization:
        "Introduce people, environments and other animals gradually and positively. Monitor body language and manage interactions carefully, especially around unfamiliar dogs.",
    },

    livingEnvironment: {
      apartmentSuitable: null,
      houseWithYardSuitable: null,
      climates: [],
      aloneTimeTolerance: null,
    },
  },

  nutrition: {
    dietType: null,

    feedingFrequency: {
      puppy: null,
      adult: null,
      senior: null,
    },

    guidelines:
      "Provide a complete and balanced diet appropriate to the dog's life stage, body condition and activity. Keep fresh water available and adjust portions with veterinary advice as the dog grows or its activity changes.",

    considerations: [
      "Monitor body condition and avoid excessive weight gain.",
      "Discuss an appropriate growth diet and feeding plan with a veterinarian for puppies of large breeds.",
      "Ask a veterinarian about the dog's individual risk factors for gastric dilatation-volvulus (bloat) and how to recognise an emergency.",
      "Account for treats when calculating the overall daily food intake.",
    ],

    note:
      "These are general canine nutrition considerations, not an American Akita-specific prescription. Feeding quantities and schedules should be individualised with veterinary guidance.",
  },

  health: {
    overview:
      "Akita breed-club health resources identify several conditions that warrant awareness and responsible screening. The available information does not establish that every American Akita will develop these conditions, and individual risk varies. Breeder health records and regular veterinary care are important.",

    commonConditions: [
      "Hip dysplasia",
      "Hypothyroidism",
      "Ocular diseases",
      "Sebaceous adenitis",
      "Gastric dilatation-volvulus (bloat)",
      "Elbow dysplasia",
      "Patellar luxation",
      "Amelogenesis imperfecta",
    ],

    preventiveCare: [
      "Schedule routine veterinary examinations and discuss age-appropriate preventive care.",
      "Ask breeders for documented health-screening results for the parents.",
      "Discuss hip, eye and thyroid screening with a veterinarian when evaluating breeding lines.",
      "Learn the signs of gastric dilatation-volvulus and seek emergency veterinary care immediately if it is suspected.",
      "Maintain dental hygiene, healthy body condition and routine parasite prevention.",
    ],

    recommendedScreenings: [
      "Hip evaluation using an accepted programme such as OFA or PennHIP",
      "Ophthalmologist evaluation through an accepted canine eye registry",
      "Thyroid panel including thyroglobulin autoantibodies (TgAA)",
    ],

    dentalCare:
      "Brush regularly with dog-specific toothpaste and arrange dental checks as recommended by a veterinarian. Ask about further assessment if there is unusual tooth wear, missing teeth or difficulty eating.",

    earCare:
      "Inspect the erect ears routinely for redness, discharge, odour or discomfort. Seek veterinary advice if abnormalities appear, and avoid inserting objects deeply into the ear canal.",

    skinCare:
      "Check the skin and dense coat during routine grooming. Seek veterinary advice for persistent hair loss, scaling, unusual coat texture, itching or skin thickening, as these signs can have several causes.",
  },

  suitability: {
    firstTimeOwners: null,
    familiesWithChildren: null,
    seniorOwners: null,
    activeOwners: null,
    apartmentLiving: null,

    idealFor: [
      "Owners prepared to invest in consistent training and socialisation",
      "Households able to manage a large, powerful dog responsibly",
      "People who understand that dog-to-dog compatibility must be assessed individually",
    ],

    notIdealFor: [
      "Owners unwilling or unable to provide ongoing training and management",
      "Households that expect every dog interaction to be effortless",
      "Situations where a large dog cannot be safely supervised and physically managed",
    ],
  },

  funFacts: [
    "The FCI lists Japan as the breed's country of origin and the United States as the country where the American type was developed.",
    "The breed's thick double coat has a dense undercoat beneath a straight, harsh outer coat.",
    "The tail may be carried in a three-quarter, full or double curl.",
    "The breed standard describes the body as longer than it is high.",
  ],

  faq: [
    {
      question: "Where did the American Akita originate?",
      answer:
        "The breed originated from Akitas in Japan and developed into a distinct type in the United States.",
    },
    {
      question: "How tall is an American Akita?",
      answer:
        "The FCI standard gives males a height of 66–71 cm and females a height of 61–66 cm at the withers.",
    },
    {
      question: "What colours can an American Akita have?",
      answer:
        "The standard permits colours such as red, fawn and white, as well as brindle and pinto patterns. White dogs do not have a mask.",
    },
    {
      question: "Are American Akitas always comfortable around other dogs?",
      answer:
        "No. The breed standard notes that some American Akitas may be intolerant of other dogs, particularly dogs of the same sex. Introductions should be managed carefully and compatibility assessed individually.",
    },
    {
      question: "What health checks should prospective owners ask about?",
      answer:
        "Ask about hip evaluation, eye examination and thyroid screening. A veterinarian can explain which checks are appropriate for an individual dog and its family history.",
    },
  ],

  references: [
    "fci-american-akita-standard-344",
    "akita-club-america-health-concerns",
    "akita-club-america-health-clearances",
    "wikimedia-american-akita-jonnydrh",
  ],

  evidence: {
    alternateNames: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-american-akita-standard-344",
          role: "verified",
          locator: "Standard title and official multilingual breed names",
        },
      ],
      verifiedOn: "2026-10-26",
      note:
        "The FCI nomenclature lists American Akita and the official French and Spanish breed names. Great Japanese Dog is a historical name associated with the American type.",
    },

    scientificName: {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No breed-specific scientific name is supplied in the sources used for this record.",
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-american-akita-standard-344",
          role: "verified",
          locator: "FCI classification",
        },
      ],
      verifiedOn: "2026-10-26",
      note: null,
    },

    origin: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-american-akita-standard-344",
          role: "verified",
          locator: "Origin and development",
        },
      ],
      verifiedOn: "2026-10-26",
      note:
        "The standard distinguishes Japan as origin from the United States as the country of development.",
    },

    "origin.region": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "The source identifies Japan as the country of origin but does not establish a narrower region for this record.",
    },

    overview: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-american-akita-standard-344",
          role: "verified",
          locator:
            "Origin; Development; Brief Historical Summary; Utilization; General Appearance; Behaviour / Temperament",
        },
      ],
      verifiedOn: "2026-10-26",
      note:
        "The prose is an original paraphrase of the breed-standard material.",
    },

    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-american-akita-standard-344",
          role: "verified",
          locator:
            "General Appearance; Important Proportions; Head; Eyes; Ears; Body; Tail; Coat; Size",
        },
      ],
      verifiedOn: "2026-10-26",
      note:
        "Physical descriptions and standard ranges are based on the current FCI standard unless a more specific evidence claim overrides this section.",
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-american-akita-standard-344",
          role: "verified",
          locator: "Size — height at withers",
        },
      ],
      verifiedOn: "2026-10-26",
      note:
        "The source publishes centimetres: males 66–71 cm; females 61–66 cm. No unit conversion was performed.",
    },

    "physical.weight": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "The FCI standard does not specify a weight range, and a sufficiently reliable American Akita-specific range was not established.",
    },

    "physical.lifespanYears": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "A reliable lifespan range specific to the American Akita was not established from the sources used for this record.",
    },

    "physical.sheddingLevel": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "The standard describes a dense double coat but does not provide a standardised shedding-level rating.",
    },

    "physical.droolingLevel": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No reliable breed-specific drooling-level rating was established.",
    },

    temperament: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-american-akita-standard-344",
          role: "verified",
          locator: "Behaviour / Temperament",
        },
      ],
      verifiedOn: "2026-10-26",
      note:
        "Traits reflect the standard's description and should not be treated as guarantees about every individual dog.",
    },

    "temperament.scores": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "The source does not provide standardised 1–5 temperament scores, so all scores remain null.",
    },

    care: {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note:
        "Care advice is general dog-care guidance tailored cautiously to a large, double-coated breed. It is not a set of official breed-standard requirements.",
    },

    "care.exercise.level": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note:
        "General guidance; a breed-specific prescribed exercise level was not established.",
    },

    "care.exercise.minutesPerDay": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No authoritative daily exercise duration was established for this breed.",
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No authoritative breed-specific apartment-suitability rating was established.",
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "A yard alone does not establish suitability, and no authoritative breed-specific rating was found.",
    },

    "care.livingEnvironment.climates": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No verified breed-specific climate-suitability list was established.",
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No reliable breed-specific alone-time tolerance rating was established.",
    },

    nutrition: {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note:
        "General canine nutrition guidance only; this record does not prescribe a breed-specific diet or feeding schedule.",
    },

    "nutrition.dietType": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No breed-specific diet type was established.",
    },

    "nutrition.feedingFrequency.puppy": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No breed-specific puppy feeding frequency was established.",
    },

    "nutrition.feedingFrequency.adult": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No breed-specific adult feeding frequency was established.",
    },

    "nutrition.feedingFrequency.senior": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No breed-specific senior feeding frequency was established.",
    },

    health: {
      reliability: "reliable_source",
      sources: [
        {
          id: "akita-club-america-health-concerns",
          role: "verified",
          locator: "Primary and other health concerns",
        },
        {
          id: "akita-club-america-health-clearances",
          role: "verified",
          locator: "Minimal testing recommended for breeders; optional testing",
        },
      ],
      verifiedOn: "2026-10-26",
      note:
        "Health concerns and screening recommendations are drawn from Akita breed-club material. They indicate issues worth discussing and screening for, not guaranteed diagnoses or proven prevalence in every American Akita.",
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note:
        "General preventive-care guidance, with breed-club screening recommendations also represented in the dedicated screening field.",
    },

    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General canine dental-care guidance.",
    },

    "health.earCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General canine ear-care guidance.",
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "akita-club-america-health-concerns",
          role: "cited",
          locator: "Sebaceous adenitis overview",
        },
      ],
      verifiedOn: null,
      note:
        "General skin-monitoring advice; sebaceous adenitis is included as a concern, not a claim that every dog is affected.",
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "fci-american-akita-standard-344",
          role: "cited",
          locator: "General Appearance; Behaviour / Temperament",
        },
      ],
      verifiedOn: null,
      note:
        "Ideal-owner and not-ideal-owner descriptions are editorial guidance based on size and temperament information, not formal suitability testing.",
    },

    "suitability.firstTimeOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No standardised first-time-owner suitability rating was established.",
    },

    "suitability.familiesWithChildren": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No reliable standardised family-with-children rating was established.",
    },

    "suitability.seniorOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No reliable standardised senior-owner suitability rating was established.",
    },

    "suitability.activeOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No standardised active-owner suitability rating was established.",
    },

    "suitability.apartmentLiving": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No reliable standardised apartment-living rating was established.",
    },

    funFacts: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-american-akita-standard-344",
          role: "verified",
          locator:
            "Origin; Development; Important Proportions; Tail; Coat",
        },
      ],
      verifiedOn: "2026-10-26",
      note: null,
    },

    faq: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-american-akita-standard-344",
          role: "verified",
          locator: "Origin; Development; Size; Colour; Behaviour / Temperament",
        },
        {
          id: "akita-club-america-health-clearances",
          role: "cited",
          locator: "Minimal testing recommended for breeders",
        },
      ],
      verifiedOn: "2026-10-26",
      note:
        "FAQ responses restate the standard and screening guidance in original wording.",
    },
  },

  updatedOn: "2026-10-26",
};
