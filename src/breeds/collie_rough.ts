import type { Breed } from "../schema/breed.types";

export const collie_rough: Breed = {
  slug: "collie-rough",
  name: "Rough Collie",
  scientificName: null,
  alternateNames: [
    "Rough-coated Collie",
    "Long-haired Collie",
    "Collie (Rough)",
    "Collie Rough",
  ],
  group:
    "FCI Group 1 — Sheepdogs and Cattledogs (except Swiss Cattledogs); Section 1 — Sheepdogs; without working trial",
  origin: {
    country: "Great Britain",
    region: null,
  },
  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Rough_Collie.jpg",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Rough_Collie.jpg",
      title: "Rough Collie.jpg",
      description: "Rough Collie photographed outdoors.",
      creator: "B@rberousse (Alain BOUCHERY)",
      uploader: "Ltshears, via Flickr upload bot",
      capturedOn: "2011-06-25",
      uploadedOn: "2017-10-20",
      width: 5184,
      height: 3456,
      licenseId: "cc-by-sa-2.0",
      attribution:
        "Photo by B@rberousse (Alain BOUCHERY), via Wikimedia Commons, CC BY-SA 2.0 (https://creativecommons.org/licenses/by-sa/2.0/). Changes, if any, must be indicated.",
      restrictions: null,
      metadataCheckedOn: "2026-10-21",
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Rough_collie_Panaca.JPG",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Rough_collie_Panaca.JPG",
      title: "Rough collie Panaca.JPG",
      description: "White Rough Collie.",
      creator: "Petruss",
      uploader: "Petruss",
      capturedOn: "2012-06-23",
      uploadedOn: "2012-07-08",
      width: 3131,
      height: 2195,
      licenseId: "cc-by-sa-3.0",
      attribution:
        "Photo by Petruss, Wikimedia Commons, CC BY-SA 3.0 (https://creativecommons.org/licenses/by-sa/3.0/). Changes, if any, must be indicated.",
      restrictions: null,
      metadataCheckedOn: "2026-10-21",
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Rough_Collie_Canberra_2016.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Rough_Collie_Canberra_2016.jpg",
      title: "Rough Collie Canberra 2016.jpg",
      description: "Rough Collie photographed in Canberra.",
      creator: "Thennicke",
      uploader: null,
      capturedOn: "2016-04-23",
      uploadedOn: null,
      width: null,
      height: null,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by Thennicke, Wikimedia Commons, CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0/). Changes, if any, must be indicated.",
      restrictions: null,
      metadataCheckedOn: "2026-10-21",
    },
  ],
  overview: {
    summary:
      "A graceful, long-coated herding dog known for its intelligence, sensitivity, loyalty, and close bond with its family.",
    description:
      "The Rough Collie is a medium-to-large, athletic herding dog distinguished by a long outer coat, dense undercoat, refined wedge-shaped head, expressive almond-shaped eyes, and an alert, balanced outline. Beneath its elegant appearance is a working dog developed to help manage livestock. Many Rough Collies are responsive to gentle instruction and enjoy participating in family activities, training, and dog sports. Their long coat needs regular attention, and they generally do best with daily companionship, exercise, and opportunities to use their minds. Individual temperament, activity needs, and grooming demands vary.",
    history:
      "The Rough Collie developed in Great Britain from the herding dogs associated particularly with Scotland. It was selected as a more refined version of the traditional working Collie, while retaining its herding heritage. The Rough and Smooth Collie share a common background and are distinguished primarily by coat length. The breed later became widely known as a companion and show dog as well as a working dog.",
    originalPurpose: "Herding and managing sheep and other livestock",
    currentRoles: [
      "Family companion",
      "Herding and farm work where suitable opportunities exist",
      "Obedience and rally",
      "Agility and other dog sports",
      "Conformation showing",
    ],
  },
  physical: {
    sizeCategory: "Medium to large",
    height: {
      unit: "cm",
      male: {
        min: 61,
        max: 66,
      },
      female: {
        min: 56,
        max: 61,
      },
    },
    weight: {
      unit: "lb",
      male: {
        min: 60,
        max: 75,
      },
      female: {
        min: 50,
        max: 65,
      },
    },
    lifespanYears: {
      min: 12,
      max: 14,
    },
    coatType:
      "Long double coat with a dense undercoat and a longer, straight outer coat",
    coatLength:
      "Long and abundant on the body, with a prominent mane and frill around the neck, feathering on the legs, and a well-coated tail; the face and lower parts of the legs carry shorter, smoother hair.",
    coatColors: [
      "Sable and white",
      "Tricolour",
      "Blue merle",
      "White",
    ],
    sheddingLevel: "Moderate to high, with loose undercoat requiring regular removal",
    droolingLevel: "Low",
    distinctiveFeatures: [
      "Long, abundant coat with a dense undercoat and a pronounced neck mane and frill",
      "Refined wedge-shaped head with a smooth outline",
      "Almond-shaped eyes that contribute to a gentle, alert expression",
      "Ears that are typically carried partly erect with the tips folding forward",
      "Long, tapering muzzle and a balanced, athletic outline",
      "Deep chest and a body built for sustained movement rather than heaviness",
      "Long, well-coated tail",
      "The Rough and Smooth Collie share a breed background and differ principally in coat length",
    ],
  },
  temperament: {
    traits: [
      "Intelligent and observant",
      "Loyal and strongly attached to family",
      "Generally responsive to gentle, consistent training",
      "Sensitive to tone and handling",
      "Alert to activity around the home",
      "Often friendly and affectionate with familiar people",
      "Active and capable of sustained outdoor activity",
      "May bark when alerting or when under-stimulated",
    ],
    scores: {
      affection: 5,
      withChildren: 4,
      withDogs: 4,
      withStrangers: 3,
      protectiveness: 3,
      independence: 2,
      trainability: 5,
      barking: 3,
      energy: 4,
    },
  },
  care: {
    exercise: {
      level:
        "Moderate to high. Most need daily walks, active play, and mental engagement, with the amount adjusted to age, health, and the individual dog's fitness.",
      minutesPerDay: null,
      activities: [
        "Daily walks with time for sniffing and exploration",
        "Fetch and interactive play in a safe area",
        "Reward-based obedience and trick training",
        "Agility, rally, or other suitable dog sports",
        "Herding activities with qualified instruction where available",
        "Food puzzles and scent games for mental enrichment",
      ],
    },
    grooming: {
      level:
        "Moderate to high. The coat needs regular brushing, with extra attention during shedding periods and wherever tangles form.",
      brushing:
        "Brush thoroughly about once a week as a starting routine, reaching through the outer coat to the undercoat. Increase frequency when shedding heavily and check behind the ears, around the elbows, feathering, and other friction areas for tangles or mats.",
      bathing:
        "Bathe when needed using a dog-appropriate shampoo, then dry the dense coat thoroughly. Frequency depends on coat condition, activity, and skin health.",
      notes: [
        "Part the coat in sections and brush down to the undercoat rather than only smoothing the surface.",
        "Pay particular attention behind the ears, under the legs, around the collar area, and to the feathering.",
        "During heavier shedding, remove loose undercoat more frequently to reduce tangles and loose hair.",
        "Check nails, paws, ears, and skin during routine grooming.",
        "Do not shave the double coat simply to reduce routine grooming; ask a veterinarian or qualified groomer about medical or coat-specific reasons before clipping extensively.",
      ],
    },
    training: {
      difficulty:
        "Generally moderate. The breed is often quick to learn, but sensitivity makes calm, consistent, reward-based teaching especially important.",
      tips: [
        "Use rewards, clear cues, and short, engaging training sessions.",
        "Avoid harsh corrections; a sensitive dog may become worried or disengaged.",
        "Begin socialisation early and introduce new people, places, sounds, and animals gradually and positively.",
        "Teach a reliable recall and calm greetings from puppyhood.",
        "Provide mental tasks as well as physical activity to reduce boredom-related behaviours.",
        "Train barking and herding-related behaviours constructively rather than assuming they will disappear on their own.",
      ],
      socialization:
        "Start early with positive, age-appropriate experiences. Continue throughout adulthood and let the dog approach unfamiliar people, dogs, and environments at a comfortable pace.",
    },
    livingEnvironment: {
      apartmentSuitable: null,
      houseWithYardSuitable: null,
      climates: [],
      aloneTimeTolerance: null,
    },
  },
  nutrition: {
    dietType: "Complete and balanced dog food appropriate to life stage and health",
    feedingFrequency: {
      puppy: null,
      adult: null,
      senior: null,
    },
    guidelines:
      "Choose a complete and balanced diet suitable for the dog's life stage, body condition, activity, and health. Measure meals, monitor weight and body condition, keep fresh water available, and adjust portions with veterinary guidance. Feeding amounts should follow the chosen food's instructions as a starting point, not be treated as a universal prescription.",
    considerations: [
      "Adjust food intake to growth, activity, neuter status, body condition, and health.",
      "Avoid allowing excess weight to accumulate; assess body condition regularly.",
      "Ask a veterinarian about an appropriate feeding plan for puppies, older dogs, or dogs with medical conditions.",
      "Discuss the risk and signs of gastric dilatation-volvulus (bloat) with a veterinarian, particularly if the dog has a deep chest or a relevant family history.",
      "Do not give medication or supplements based only on breed information.",
    ],
    note:
      "No universal meal count or calorie target is specified here because requirements depend on age, food energy density, activity, body condition, and medical status.",
  },
  health: {
    overview:
      "Rough Collies are often described as hardy, but breed-related inherited conditions and medication sensitivity deserve attention. Health risks vary among individual dogs and bloodlines. Ask for the actual screening results of the puppy's parents and discuss the dog's own screening and medication history with a veterinarian.",
    commonConditions: [
      "Collie Eye Anomaly (CEA), an inherited eye condition",
      "MDR1/ABCB1 drug sensitivity, which can alter responses to certain medicines",
      "Progressive Retinal Atrophy, rod-cone dysplasia 2 (PRA-rcd2)",
      "Dermatomyositis (DMS)",
      "Hip dysplasia",
      "Degenerative myelopathy (DM)",
    ],
    preventiveCare: [
      "Arrange routine veterinary examinations and maintain appropriate vaccination and parasite-prevention plans.",
      "Keep a record of genetic test results, eye examinations, and other health screening.",
      "Discuss medication choices with the veterinarian and disclose any known MDR1/ABCB1 result before treatment.",
      "Seek veterinary advice promptly for changes in vision, gait, skin, appetite, energy, or behaviour.",
      "Maintain a healthy body condition and provide regular exercise suited to age and health.",
    ],
    recommendedScreenings: [
      "Veterinary eye examination for Collie Eye Anomaly, including the recommended examination of puppies before placement",
      "MDR1/ABCB1 genetic testing and discussion of medication implications",
      "PRA-rcd2 genetic testing",
      "Dermatomyositis (DMS) genetic testing where recommended",
      "Hip evaluation through an accepted veterinary screening programme",
      "Discuss degenerative myelopathy testing and family history with the breeder and veterinarian",
    ],
    dentalCare:
      "Brush the teeth regularly with dog-specific toothpaste and arrange veterinary dental checks. Seek advice if there is persistent bad breath, gum bleeding, pain, or difficulty eating.",
    earCare:
      "Check the ears routinely for redness, odour, discharge, or discomfort. Clean only as advised by a veterinarian and avoid inserting cotton swabs deep into the ear canal.",
    skinCare:
      "Part the long coat periodically to check the skin for redness, parasites, sores, and mats. Ask a veterinarian about persistent itching, hair loss, lesions, or recurring skin problems.",
  },
  suitability: {
    firstTimeOwners: null,
    familiesWithChildren: null,
    seniorOwners: null,
    activeOwners: true,
    apartmentLiving: null,
    idealFor: [
      "Households that want a close, involved companion and can provide daily company",
      "Owners who enjoy reward-based training and mental enrichment",
      "People prepared to maintain a long double coat",
      "Active households interested in walks, play, obedience, or suitable dog sports",
    ],
    notIdealFor: [
      "People unable to provide regular coat care",
      "Households expecting a dog to be content with little interaction or stimulation",
      "Owners seeking a guaranteed quiet dog without training for alert barking",
      "Anyone unwilling to discuss inherited health screening and medication sensitivity with the breeder and veterinarian",
    ],
  },
  funFacts: [
    "The Rough Collie is the long-coated variety of the Collie; the Smooth Collie has a short coat.",
    "The breed was developed for herding work, and many individuals still enjoy learning structured tasks.",
    "Its long coat can look very heavy, but the breed's outline is intended to remain balanced and athletic rather than coarse.",
    "Collies became widely recognised in popular culture, helping make the breed familiar to audiences far beyond the herding world.",
  ],
  faq: [
    {
      question: "How long does a Rough Collie usually live?",
      answer:
        "The American Kennel Club lists a typical life expectancy of 12–14 years. An individual dog's lifespan depends on genetics, health, care, and other factors; this is a reference range, not a guarantee.",
    },
    {
      question: "Does a Rough Collie shed?",
      answer:
        "Yes. Its double coat sheds, and loose undercoat can become trapped in the longer outer coat. Regular brushing and more frequent coat care during heavier shedding help manage loose hair and prevent tangles.",
    },
    {
      question: "How much exercise does a Rough Collie need?",
      answer:
        "Most benefit from daily walks, play, and mental activity. The right amount varies with age, health, fitness, and temperament, so a fixed daily-minute target is not provided.",
    },
    {
      question: "What health tests should I ask a breeder about?",
      answer:
        "Ask for documented results relevant to Collie Eye Anomaly, MDR1/ABCB1, PRA-rcd2, dermatomyositis, and hip health. The appropriate tests can depend on the programme and bloodline; review the results with a veterinarian rather than relying on verbal assurances.",
    },
    {
      question: "Can a Rough Collie be sensitive to medication?",
      answer:
        "Some Collies carry an MDR1/ABCB1 variant that can affect their response to certain medicines. Ask your veterinarian about genetic testing and medication precautions, and do not start or stop a medicine based solely on general breed information.",
    },
    {
      question: "Is a Rough Collie suitable for an apartment?",
      answer:
        "There is no universal yes-or-no answer. Exercise, barking, time spent with the household, training, and the individual dog's behaviour all matter. Evaluate the dog's needs and the building's rules before deciding.",
    },
  ],
  references: [
    "fci-collie-rough-nomenclature",
    "fci-collie-rough-standard-2012",
    "american-kennel-club-collie",
    "collie-club-of-america-health",
    "collie-club-of-america-breeder-health",
    "wikimedia-rough-collie-barberousse",
    "wikimedia-rough-collie-panaca",
    "wikimedia-rough-collie-canberra",
    "wsava-global-nutrition-guidelines",
    "avma-pet-dental-care",
  ],
  evidence: {
    alternateNames: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-collie-rough-nomenclature",
          role: "verified",
          locator: "Breed name and language variants",
        },
        {
          id: "american-kennel-club-collie",
          role: "verified",
          locator: "Breed profile: Rough and Smooth Collie varieties",
        },
      ],
      verifiedOn: "2026-10-21",
      note: "Names describe the long-coated Collie variety; naming conventions can differ by registry.",
    },
    scientificName: {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No breed-specific scientific name is recorded.",
    },
    group: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-collie-rough-nomenclature",
          role: "verified",
          locator: "Group, section, country of origin, and working-trial classification",
        },
      ],
      verifiedOn: "2026-10-21",
      note: "The group follows the FCI classification; other kennel clubs may use different group names.",
    },
    "origin.country": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-collie-rough-nomenclature",
          role: "verified",
          locator: "Country of origin",
        },
      ],
      verifiedOn: "2026-10-21",
      note: null,
    },
    "origin.region": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "A more specific region of origin is not recorded as a definitive value.",
    },
    overview: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-collie-rough-standard-2012",
          role: "cited",
          locator: "Historical summary and utilisation",
        },
        {
          id: "american-kennel-club-collie",
          role: "verified",
          locator: "Breed overview, temperament, exercise, and grooming",
        },
      ],
      verifiedOn: "2026-10-21",
      note: "The descriptions are paraphrased. The older FCI standard is used for historical context, not as the source for current measurements.",
    },
    "physical.sizeCategory": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-collie",
          role: "cited",
          locator: "Breed profile: height and weight",
        },
      ],
      verifiedOn: null,
      note: "Size category is a broad display label, not an official measurement category.",
    },
    "physical.height": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-collie",
          role: "verified",
          locator: "Breed profile: male and female height",
        },
      ],
      verifiedOn: "2026-10-21",
      note: "The listed centimetre ranges are rounded conversions from the source's inch ranges. Breed standards vary by registry.",
    },
    "physical.weight": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-collie",
          role: "verified",
          locator: "Breed profile: male and female weight",
        },
      ],
      verifiedOn: "2026-10-21",
      note: "Weights are recorded in pounds as published in the source profile. These are typical profile ranges, not a veterinary target for every dog.",
    },
    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-collie",
          role: "verified",
          locator: "Life expectancy",
        },
      ],
      verifiedOn: "2026-10-21",
      note: "Life expectancy is a population-level reference range, not a guarantee for an individual dog.",
    },
    "physical.coatType": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-collie",
          role: "verified",
          locator: "Coat type and Rough Collie description",
        },
      ],
      verifiedOn: "2026-10-21",
      note: null,
    },
    "physical.coatLength": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-collie",
          role: "verified",
          locator: "Rough Collie coat description",
        },
      ],
      verifiedOn: "2026-10-21",
      note: "The description is a practical summary, not a full show-standard specification.",
    },
    "physical.coatColors": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-collie",
          role: "verified",
          locator: "Breed colours and markings",
        },
      ],
      verifiedOn: "2026-10-21",
      note: "Colour terminology follows the source's profile; permitted colours can differ among registries.",
    },
    "physical.sheddingLevel": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-collie",
          role: "cited",
          locator: "Grooming and double-coat description",
        },
      ],
      verifiedOn: null,
      note: "Shedding is described qualitatively; the level is an editorial estimate, not a measured breed statistic.",
    },
    "physical.droolingLevel": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-collie",
          role: "cited",
          locator: "Breed traits: drooling level",
        },
      ],
      verifiedOn: null,
      note: "The low level is an approximate breed-profile judgement, not a quantified measurement.",
    },
    "physical.distinctiveFeatures": {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-collie-rough-standard-2012",
          role: "cited",
          locator: "General appearance and coat",
        },
        {
          id: "american-kennel-club-collie",
          role: "verified",
          locator: "Breed appearance and coat description",
        },
      ],
      verifiedOn: "2026-10-21",
      note: "Descriptions are paraphrased; the older FCI standard is not treated as the current measurement authority.",
    },
    "temperament.traits": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-collie",
          role: "verified",
          locator: "Breed traits, temperament, and training",
        },
      ],
      verifiedOn: "2026-10-21",
      note: "Traits describe common breed tendencies, not guaranteed behaviour in every individual dog.",
    },
    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-collie",
          role: "cited",
          locator: "Breed traits and activity description",
        },
      ],
      verifiedOn: null,
      note: "All 1–5 scores are editorial estimates, not standardised behavioural test results.",
    },
    "care.exercise.level": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-collie",
          role: "verified",
          locator: "Exercise and breed-care guidance",
        },
      ],
      verifiedOn: "2026-10-21",
      note: "Exercise needs vary by individual, age, and health.",
    },
    "care.exercise.minutesPerDay": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No universal daily exercise-minute target is recorded for this breed.",
    },
    "care.exercise.activities": {
      reliability: "general_guidance",
      sources: [
        {
          id: "american-kennel-club-collie",
          role: "cited",
          locator: "Exercise and dog-sport guidance",
        },
      ],
      verifiedOn: null,
      note: "Activities are suggestions, not a prescribed exercise programme.",
    },
    "care.grooming": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-collie",
          role: "verified",
          locator: "Grooming and coat maintenance",
        },
      ],
      verifiedOn: "2026-10-21",
      note: "Grooming frequency should be adapted to coat condition and shedding.",
    },
    "care.training": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-collie",
          role: "verified",
          locator: "Training and socialisation",
        },
      ],
      verifiedOn: "2026-10-21",
      note: "Training difficulty is a qualitative assessment, not an official rating.",
    },
    "care.livingEnvironment.apartmentSuitable": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "A universal yes-or-no apartment suitability label is not established.",
    },
    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "A yard can provide exercise space, but does not by itself determine suitability.",
    },
    "care.livingEnvironment.climates": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No breed-specific climate list is recorded; weather tolerance depends on conditions and the individual dog.",
    },
    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No reliable universal alone-time tolerance value is established.",
    },
    nutrition: {
      reliability: "general_guidance",
      sources: [
        {
          id: "wsava-global-nutrition-guidelines",
          role: "cited",
          locator: "Nutritional assessment and individualised feeding",
        },
      ],
      verifiedOn: null,
      note: "Nutrition advice is general canine guidance and should be adapted to the individual dog.",
    },
    "nutrition.feedingFrequency.puppy": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Feeding frequency depends on age, growth, food, and veterinary advice; no single breed-specific frequency is recorded.",
    },
    "nutrition.feedingFrequency.adult": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No universal adult feeding frequency is recorded.",
    },
    "nutrition.feedingFrequency.senior": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No universal senior feeding frequency is recorded.",
    },
    "health.overview": {
      reliability: "reliable_source",
      sources: [
        {
          id: "collie-club-of-america-health",
          role: "verified",
          locator: "Breed health guidance: CEA and MDR1",
        },
      ],
      verifiedOn: "2026-10-21",
      note: "This summary highlights known screening concerns without asserting that an individual dog is affected.",
    },
    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "collie-club-of-america-health",
          role: "verified",
          locator: "CEA and MDR1 health information",
        },
        {
          id: "collie-club-of-america-breeder-health",
          role: "verified",
          locator: "Recommended breeder health tests",
        },
        {
          id: "american-kennel-club-collie",
          role: "cited",
          locator: "Health and recommended tests",
        },
      ],
      verifiedOn: "2026-10-21",
      note: "These are breed-related conditions or screening concerns; the list does not establish prevalence or mean every Collie will develop them.",
    },
    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "collie-club-of-america-health",
          role: "verified",
          locator: "Eye examination for CEA and MDR1 medication sensitivity",
        },
        {
          id: "collie-club-of-america-breeder-health",
          role: "verified",
          locator: "CEA, MDR1, PRA-rcd2, DMS, hip evaluation, and DM",
        },
      ],
      verifiedOn: "2026-10-21",
      note: "Confirm current testing recommendations, actual results, and their interpretation with the breeder and veterinarian.",
    },
    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "collie-club-of-america-health",
          role: "cited",
          locator: "Owner guidance on health checks and medication sensitivity",
        },
      ],
      verifiedOn: null,
      note: "General prevention advice; individual care should be planned with a veterinarian.",
    },
    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "avma-pet-dental-care",
          role: "cited",
          locator: "Routine preventive dental care",
        },
      ],
      verifiedOn: null,
      note: "General veterinary dental guidance.",
    },
    "health.earCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General ear-care advice, not a breed-specific medical claim.",
    },
    "health.skinCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "General skin and coat care advice.",
    },
    "suitability.firstTimeOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "A universal first-time-owner suitability label is not established.",
    },
    "suitability.familiesWithChildren": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "Suitability depends on the individual dog, children, supervision, and household circumstances.",
    },
    "suitability.seniorOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "A universal senior-owner suitability label is not established.",
    },
    "suitability.activeOwners": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-collie",
          role: "cited",
          locator: "Exercise and dog-sport information",
        },
      ],
      verifiedOn: null,
      note: "This owner-fit suggestion is based on activity needs, not a guarantee about an individual dog.",
    },
    "suitability.apartmentLiving": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "A categorical apartment-living label is not established.",
    },
    "suitability.idealFor": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-collie",
          role: "cited",
          locator: "Companionship, grooming, training, and exercise",
        },
      ],
      verifiedOn: null,
      note: "These are practical owner-fit suggestions, not guarantees of temperament.",
    },
    "suitability.notIdealFor": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-collie",
          role: "cited",
          locator: "Grooming, exercise, and companionship needs",
        },
      ],
      verifiedOn: null,
      note: "These are practical ownership considerations, not a formal assessment of an individual dog.",
    },
    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-collie-rough-nomenclature",
          role: "verified",
          locator: "Breed name and classification",
        },
        {
          id: "fci-collie-rough-standard-2012",
          role: "cited",
          locator: "Historical summary and utilisation",
        },
        {
          id: "american-kennel-club-collie",
          role: "verified",
          locator: "Rough and Smooth varieties; breed overview",
        },
      ],
      verifiedOn: "2026-10-21",
      note: "Facts are paraphrased and distinguish the long-coated variety from the Smooth Collie.",
    },
    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-collie",
          role: "verified",
          locator: "Life expectancy, grooming, exercise, and health tests",
        },
        {
          id: "collie-club-of-america-health",
          role: "verified",
          locator: "CEA and MDR1 health guidance",
        },
        {
          id: "collie-club-of-america-breeder-health",
          role: "verified",
          locator: "Breeder health testing recommendations",
        },
      ],
      verifiedOn: "2026-10-21",
      note: "Answers are paraphrased; health and behaviour statements are not guarantees.",
    },
  },
  updatedOn: "2026-10-21",
};