import type { Breed } from "../schema/breed.types";

export const scottish_deerhound: Breed = {
  slug: "scottish-deerhound",
  name: "Scottish Deerhound",
  scientificName: null,
  alternateNames: ["Deerhound", "Scottish Deer Hound"],
  group: "Sighthounds; Rough-Coated Sighthounds",

  origin: {
    country: "Great Britain",
    region: "Scotland",
  },

  images: [
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Scottish_Deerhound_grey_1.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Scottish_Deerhound_grey_1.jpg",
      title: "Scottish Deerhound grey 1.jpg",
      description: "Grey male Scottish Deerhound standing outdoors.",
      creator: "Canarian",
      uploader: "Canarian",
      capturedOn: "2020-08-23",
      uploadedOn: "2020-08-24",
      width: 1698,
      height: 1559,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by Canarian, via Wikimedia Commons, CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0/). Changes: none. If adapted, indicate changes and comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-11-03",
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Deerhound,_chiot.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Deerhound,_chiot.jpg",
      title: "Deerhound, chiot.jpg",
      description: "Scottish Deerhound puppy photographed at approximately three and a half months old.",
      creator: "Manializa",
      uploader: "Manializa",
      capturedOn: "2014-06-25",
      uploadedOn: "2019-04-08",
      width: 4928,
      height: 3264,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by Manializa, via Wikimedia Commons, CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0/). Changes: none. If adapted, indicate changes and comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-11-03",
    },
    {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Deerhound_portrait.jpg",
      sourcePage:
        "https://commons.wikimedia.org/wiki/File:Deerhound_portrait.jpg",
      title: "Deerhound portrait.jpg",
      description: "Portrait of a male Scottish Deerhound showing its head and ears.",
      creator: "Manializa",
      uploader: "Manializa",
      capturedOn: "2008-05-18",
      uploadedOn: "2019-04-08",
      width: 1334,
      height: 2000,
      licenseId: "cc-by-sa-4.0",
      attribution:
        "Photo by Manializa, via Wikimedia Commons, CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0/). Changes: none. If adapted, indicate changes and comply with the applicable share-alike terms.",
      restrictions: null,
      metadataCheckedOn: "2026-11-03",
    },
  ],

  overview: {
    summary:
      "A majestic and ancient rough-coated sighthound native to the Scottish Highlands, the Scottish Deerhound was bred to pursue and bring down red deer across rugged moors. Possessing an imposing, tall stature and a coarse, weather-resistant coat, this gentle giant pairs remarkable galloping speed with a dignified, quiet household demeanor. It flourishes in spacious homes that can offer daily structured exercise and securely enclosed running opportunities.",
    description:
      "Resembling a larger, heavier-boned Greyhound cloaked in a harsh, wiry jacket, the Scottish Deerhound exhibits a deep-chested, arched silhouette engineered for sustained galloping power and mountain stamina. Its rugged double coat—typically seen in dark blue-grey, heather brindle, or warm red fawn—provides crucial protection against freezing mist and abrasive Highland heather. In domestic settings, adult hounds are celebrated for their calm, polite presence, rarely barking or displaying territorial aggression. Their exceptional size, sensitive temperament, and pronounced instinct to chase moving objects require committed handling, soft bedding for lean joints, and high, escape-proof fencing.",
    history:
      "Tracing its origins back to ancient Celtic hunting hounds, the breed was selectively developed by Scottish Highland chieftains specifically to course wild red deer through peat bogs and rocky glens. Once regarded as the exclusive hunting companion of the nobility, strict ownership rules and the collapse of the Highland clan system following the Battle of Culloden in 1746 pushed the breed near extinction. Dedicated preservation by nineteenth-century fanciers, championed by prominent enthusiasts such as Sir Walter Scott, successfully restored the population while safeguarding its classic coursing morphology and gentle nature.",
    originalPurpose:
      "Coursing, pursuing, and holding wild red deer across the rugged, mountainous terrain of the Scottish Highlands.",
    currentRoles: [
      "Family companion",
      "Conformation show hound",
      "Lure coursing and open-field coursing competitor",
      "Amateur racing and sighthound sports participant",
      "Therapy and quiet visitation dog",
    ],
  },

  physical: {
    sizeCategory: "Giant",
    height: {
      unit: "in",
      male: {
        min: 30,
        max: 32,
      },
      female: {
        min: 28,
        max: null,
      },
    },
    weight: {
      unit: "lb",
      male: {
        min: 85,
        max: 110,
      },
      female: {
        min: 75,
        max: 95,
      },
    },
    lifespanYears: {
      min: 8,
      max: 11,
    },
    coatType: "Harsh, wiry, and ragged weather-resistant double coat that lies close to the body, offering thermal insulation and protection against abrasive vegetation.",
    coatLength:
      "Medium, measuring approximately 3 to 4 inches on the torso, with softer hair across the head and modest protective fringes along the belly and legs.",
    coatColors: [
      "Dark blue-grey",
      "Dark grey",
      "Light grey",
      "Brindle",
      "Yellow",
      "Sandy red",
      "Red fawn",
    ],
    sheddingLevel: "Moderate; regular seasonal shedding easily managed with routine combing.",
    droolingLevel: "Low; dry, tight lips prevent excessive salivation.",
    distinctiveFeatures: [
      "Imposing, tall, and athletic sighthound silhouette resembling a rough-coated Greyhound",
      "Long, cleanly chiseled head tapering to a dark muzzle with a distinct mustache and beard",
      "Deep, capacious chest providing expansive lung capacity for high-speed coursing",
      "Small, dark rose ears that fold back against the neck when relaxed and raise when alert",
      "Coarse, wiry weather-resistant coat with a natural, unclipped rustic appearance",
      "Long, tapering tail reaching almost to the hocks, carried low with a slight upward curve",
    ],
  },

  temperament: {
    traits: [
      "Gentle, noble, and dignified",
      "Deeply affectionate and devoted to family companions",
      "Quiet and unobtrusive in the home",
      "Athletic, swift, and driven when outdoors",
      "Sensitive to voice inflection and harsh corrections",
      "Pronounced visual chase drive toward moving animals",
      "Friendly and polite toward strangers without aloofness or guard instincts",
      "Requires respectful handling and patient, positive training",
    ],
    scores: {
      affection: 4,
      withChildren: null,
      withDogs: null,
      withStrangers: 4,
      protectiveness: 2,
      independence: 3,
      trainability: 4,
      barking: 2,
      energy: 4,
    },
  },

  care: {
    exercise: {
      level: "High. Requires daily structured leash walking alongside regular opportunities for full-stride galloping in securely fenced, expansive paddocks.",
      minutesPerDay: {
        min: 60,
        max: 90,
      },
      activities: [
        "Daily structured road walks to build cardiovascular health and muscle tone",
        "Free sprinting in securely enclosed fields with safe, level turf",
        "Lure coursing and straight-track racing drills",
        "Gentle scent games and outdoor exploration",
        "Low-impact interactive retrieval on soft ground",
      ],
    },
    grooming: {
      level: "Low to moderate. The harsh, natural coat repels mud and dirt, requiring only routine combing to maintain clean condition.",
      brushing:
        "Comb weekly with a wide-toothed metal comb and pin brush to detangle the wiry coat, clear loose hair, and tidy the facial furnishings.",
      bathing:
        "Bathe only when necessary using a mild, texturising canine shampoo to avoid softening the naturally coarse protective guard hair.",
      notes: [
        "Never clip or scissor the body coat, as shaving permanently alters the natural wiry texture and weather repellency.",
        "Provide thick orthopaedic bedding to protect bony points from pressure sores, calluses, and hygromas.",
        "Trim long toenails regularly to support proper sighthound foot posture and joint comfort.",
        "Check folded rose ears weekly for debris, wax accumulation, or irritation.",
        "Brush teeth several times per week with dog-safe enzymatic toothpaste.",
      ],
    },
    training: {
      difficulty:
        "Moderate. Highly responsive and eager to cooperate, but inherently sensitive and easily discouraged by repetitive drills or harsh handling.",
      tips: [
        "Apply gentle, reward-based methods using enthusiastic verbal praise and palatable treats.",
        "Condition reliable loose-leash walking early to manage their immense physical leverage.",
        "Practice recall in securely enclosed areas, remembering that sighthound prey drive can override obedience.",
        "Avoid excessive or strenuous galloping during growth stages to safeguard developing growth plates.",
        "Introduce new sights, sounds, and surfaces patiently to nurture natural self-confidence.",
      ],
      socialization:
        "Expose puppies thoughtfully to diverse people, friendly adult canines, livestock, and novel environments. Because predatory chasing instincts toward fleeing cats, small wildlife, and toy dogs are hardwired, careful supervision and management remain essential throughout life.",
    },
    livingEnvironment: {
      apartmentSuitable: false,
      houseWithYardSuitable: true,
      climates: [
        "Thrives in cool-temperate and chilly northern climates where its wiry coat provides ideal thermal insulation.",
        "Prone to heat exhaustion in warm, humid weather; outdoor exercise must be restricted to cool early mornings and late evenings.",
        "Ensure constant access to cool indoor resting quarters, fresh water, and shade during summer months.",
      ],
      aloneTimeTolerance:
        "Moderate. Adults settle quietly indoors, but prolonged daily isolation can foster separation distress or restlessness.",
    },
  },

  nutrition: {
    dietType:
      "A high-quality, complete and balanced commercial or veterinary-formulated diet tailored to large or giant breeds across their specific life stages.",
    feedingFrequency: {
      puppy: null,
      adult: null,
      senior: null,
    },
    guidelines:
      "Maintain a lean, muscular coursing build where ribs are easily felt beneath thin skin without looking emaciated. Calibrate food intake carefully against exercise, avoid rapid growth in youngsters, and strictly prohibit vigorous exercise for at least one hour before and after meals to mitigate gastric dilatation-volvulus (GDV). Always keep clean, fresh water accessible.",
    considerations: [
      "Strictly enforce resting periods before and after feeding to lower the risk of life-threatening gastric torsion.",
      "Monitor juvenile growth rates closely, avoiding excessive calcium or calories that trigger developmental orthopaedic disorders.",
      "Factor training treats into the total daily caloric budget.",
      "Introduce any dietary transitions gradually across 7 to 10 days to avert gastrointestinal upset.",
      "Consult a veterinarian before introducing any joint or systemic nutritional supplements.",
    ],
    note:
      "Giant sighthounds have specialized metabolic demands and sensitive digestive tracts requiring individualized feeding protocols.",
  },

  health: {
    overview:
      "A giant sighthound with an average life expectancy of 8 to 11 years. Like many giant deep-chested breeds, it is predisposed to serious cardiovascular, orthopaedic, and oncological conditions, alongside breed-specific hereditary bleeding and metabolic traits that warrant specialized veterinary oversight.",
    commonConditions: [
      "Dilated cardiomyopathy (DCM) and cardiac arrhythmias",
      "Osteosarcoma (bone cancer), predominantly affecting the long bones of the limbs",
      "Gastric dilatation-volvulus (GDV / bloat), an acute life-threatening torsion of the stomach",
      "Delayed post-operative hemorrhage (DEPOH), a hyperfibrinolytic bleeding syndrome occurring hours after surgery",
      "Factor VII deficiency, an inherited mild coagulopathy affecting secondary hemostasis",
      "Cystinuria, an inherited renal defect predisposing to recurrent cystine urinary calculi",
      "Portosystemic liver shunt (PSS), an abnormal vascular connection bypassing hepatic portal circulation",
    ],
    preventiveCare: [
      "Schedule annual veterinary cardiovascular examinations, including echocardiography and Holter monitoring.",
      "Confirm parentage genetic status or DNA test results for Factor VII deficiency and DEPOH prior to surgical interventions.",
      "Alert veterinary surgeons to potential sighthound anesthesia sensitivity and hyperfibrinolytic bleeding risks, discussing preventative aminocaproic acid or tranexamic acid protocols.",
      "Familiarize all household members with acute bloat emergency symptoms: unproductive retching, pacing, and sudden abdominal distension.",
      "Conduct bile-acid screening in puppies to detect congenital portosystemic shunts early.",
      "Screen urine for cystine crystals in mature males, adjusting diet and hydration if indicated.",
    ],
    recommendedScreenings: [
      "Comprehensive cardiac evaluation including echocardiogram and electrocardiogram",
      "DNA genetic test for Factor VII deficiency to establish carrier or affected status",
      "DNA genetic test for delayed post-operative hemorrhage (DEPOH) to guide surgical management",
      "Serum bile-acid testing (pre- and post-prandial) in puppies to screen for congenital liver shunts",
    ],
    dentalCare:
      "Brush teeth regularly with pet-safe enzymatic toothpaste and arrange routine professional cleanings. Regular oral hygiene protects cardiac health by minimizing oral bacterial dissemination.",
    earCare:
      "Inspect folded rose ears weekly for trapped dirt, wax buildup, or redness, wiping the outer ear leather gently with an approved cleanser.",
    skinCare:
      "Examine the skin during weekly combing for minor scratches sustained during gallops, pressure calluses on elbows, or localized irritation.",
  },

  suitability: {
    firstTimeOwners: null,
    familiesWithChildren: null,
    seniorOwners: null,
    activeOwners: true,
    apartmentLiving: false,
    idealFor: [
      "Households with spacious homes and direct access to large, safely fenced acreage or coursing grounds",
      "Experienced sighthound enthusiasts who value a quiet, noble, and deeply affectionate home companion",
      "Owners committed to providing daily exercise, soft bedding, and breed-specific preventive healthcare",
      "Handlers interested in lure coursing, sighthound sports, or conformation exhibition",
    ],
    notIdealFor: [
      "Apartment dwellers or homes with small, unfenced suburban yards lacking sprinting space",
      "Households unable to manage the substantial physical size and dietary requirements of a giant hound",
      "Owners expecting an off-leash park dog that will ignore wildlife and small fleeing animals",
      "Homes looking for an intimidating watchdog or territorial property protector",
    ],
  },

  funFacts: [
    "Bred specifically to course red deer across the Highlands, the breed is historically revered as the 'Royal Dog of Scotland'.",
    "During the Middle Ages, Scottish law restricted ownership of these hounds to noble ranks, with a lord's status often measured by the size of his hunting pack.",
    "Sir Walter Scott famously owned a celebrated Deerhound cross named Maida, describing the breed as 'the most perfect creature of heaven'.",
    "Despite their fierce coursing capability in the field, adult hounds are renowned for being placid 'couch potatoes' when indoors.",
  ],

  faq: [
    {
      question: "Where does the Scottish Deerhound originate?",
      answer:
        "The breed originated in the Scottish Highlands, where it was selectively developed over centuries as a large, rough-coated coursing hound to pursue wild red deer.",
    },
    {
      question: "How large does a Scottish Deerhound get?",
      answer:
        "Adult males stand 30 to 32 inches tall at the withers and weigh between 85 and 110 pounds, while adult females measure 28 inches and taller and weigh 75 to 95 pounds.",
    },
    {
      question: "How long does a Scottish Deerhound live?",
      answer:
        "The average life expectancy is 8 to 11 years when provided with appropriate giant-breed healthcare, balanced nutrition, and sensible exercise management.",
    },
    {
      question: "Does the Scottish Deerhound need a lot of exercise?",
      answer:
        "It requires substantial daily exercise, typically 60 to 90 minutes combining structured road walks with opportunities for high-speed free sprinting in a securely fenced area.",
    },
    {
      question: "Is the Scottish Deerhound easy to groom?",
      answer:
        "Yes. Its natural, harsh double coat is relatively low-maintenance, requiring only weekly thorough combing to remove loose undercoat and detangle facial whiskers.",
    },
    {
      question: "Is the Scottish Deerhound good with children and other dogs?",
      answer:
        "Many are gentle and tolerant with family members, but active adult supervision is essential due to their giant stature and potential for accidental bumps.",
    },
    {
      question: "Can a Scottish Deerhound live in an apartment?",
      answer:
        "No. Due to its giant physical size, broad turning radius, and essential need for expansive, secure galloping space, apartment living is not suitable.",
    },
    {
      question: "What health tests should I ask a breeder about?",
      answer:
        "Important health screenings include annual echocardiograms for cardiac health, genetic DNA tests for Factor VII deficiency and DEPOH bleeding disorders, and puppy bile-acid tests for liver shunts.",
    },
    {
      question: "Is a Scottish Deerhound a good guard dog?",
      answer:
        "No. The breed is naturally gentle, dignified, and friendly toward visitors, lacking the territorial suspicion and protective instincts required of a guard dog.",
    },
  ],

  references: [
    "fci-deerhound-standard",
    "fci-deerhound-nomenclature",
    "american-kennel-club-scottish-deerhound",
    "american-kennel-club-scottish-deerhound-standard",
    "american-kennel-club-scottish-deerhound-history",
    "scottish-deerhound-club-of-america-breed-info",
    "scottish-deerhound-club-of-america-health-testing",
    "the-dog-api",
    "wsava-global-nutrition-guidelines",
    "avma-pet-dental-care",
    "wikimedia-scottish-deerhound-grey-1",
    "wikimedia-scottish-deerhound-puppy",
    "wikimedia-scottish-deerhound-portrait",
  ],

  evidence: {
    alternateNames: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-deerhound-nomenclature",
          role: "verified",
          locator: "Breed name and FCI breed nomenclature",
        },
        {
          id: "american-kennel-club-scottish-deerhound",
          role: "verified",
          locator: "Breed profile title and About the Breed",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.alt_names",
        },
      ],
      verifiedOn: "2026-11-03",
      note:
        "Uses the recognised breed name and the shorter Deerhound designation used in official nomenclature.",
    },

    scientificName: {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No distinct breed-specific scientific name was established in the consulted references.",
    },

    group: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-deerhound-standard",
          role: "verified",
          locator: "FCI classification: Group 10 Sighthounds, Section 2 Rough-haired Sighthounds",
        },
        {
          id: "fci-deerhound-nomenclature",
          role: "verified",
          locator: "Group 10, Rough-haired Sighthounds",
        },
      ],
      verifiedOn: "2026-11-03",
      note:
        "Classified under sighthounds and rough-coated coursing hounds.",
    },

    origin: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-deerhound-standard",
          role: "verified",
          locator: "Origin and Brief Historical Summary",
        },
        {
          id: "fci-deerhound-nomenclature",
          role: "verified",
          locator: "Country of origin",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.origin",
        },
      ],
      verifiedOn: "2026-11-03",
      note:
        "Official standards identify Great Britain as the country of origin, with specific development in the Scottish Highlands.",
    },

    "origin.country": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-deerhound-standard",
          role: "verified",
          locator: "Origin: Great Britain",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.origin",
        },
      ],
      verifiedOn: "2026-11-03",
      note: "Official breed standard records Great Britain as the country of origin.",
    },

    "origin.region": {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-deerhound-standard",
          role: "verified",
          locator: "Brief Historical Summary: Scotland",
        },
      ],
      verifiedOn: "2026-11-03",
      note: "Historical development is specifically rooted in the Scottish Highlands.",
    },

    overview: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-deerhound-standard",
          role: "verified",
          locator: "Utilization, Brief Historical Summary, General Appearance, Behaviour/Temperament",
        },
        {
          id: "american-kennel-club-scottish-deerhound",
          role: "verified",
          locator: "About the Breed, History, Exercise, Training, and Grooming",
        },
        {
          id: "scottish-deerhound-club-of-america-breed-info",
          role: "verified",
          locator: "So, You Think You Want a Scottish Deerhound?",
        },
      ],
      verifiedOn: "2026-11-03",
      note:
        "Original summaries synthesising historical red deer coursing, distinctive rough sighthound conformation, and domestic temperament.",
    },

    physical: {
      reliability: "official_standard",
      sources: [
        {
          id: "fci-deerhound-standard",
          role: "verified",
          locator: "General Appearance, Coat, Colour, Height, and Weight",
        },
        {
          id: "american-kennel-club-scottish-deerhound-standard",
          role: "verified",
          locator: "Official Standard: General Appearance, Coat, Colour, Height and Weight",
        },
      ],
      verifiedOn: "2026-11-03",
      note:
        "Standard-based appearance, wiry coat texture, and sighthound athletic structure.",
    },

    "physical.sizeCategory": {
      reliability: "official_standard",
      sources: [
        {
          id: "american-kennel-club-scottish-deerhound-standard",
          role: "verified",
          locator: "General Appearance and Height/Weight: Giant coursing hound",
        },
      ],
      verifiedOn: "2026-11-03",
      note: "Classified as giant based on adult stature reaching 32 inches and mass reaching up to 110 pounds.",
    },

    "physical.height": {
      reliability: "official_standard",
      sources: [
        {
          id: "american-kennel-club-scottish-deerhound-standard",
          role: "verified",
          locator: "Height of Dogs: from 30 to 32 inches; Height of Bitches: from 28 inches upwards",
        },
        {
          id: "american-kennel-club-scottish-deerhound",
          role: "verified",
          locator: "Height: male 30–32 inches; female 28 inches and up",
        },
      ],
      verifiedOn: "2026-11-03",
      note:
        "Stored in published source inches: males 30 to 32 inches; females 28 inches upwards.",
    },
    "physical.height.female.max": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note: "No maximum female height is specified in the consulted standard.",
    },

    "physical.weight": {
      reliability: "official_standard",
      sources: [
        {
          id: "american-kennel-club-scottish-deerhound-standard",
          role: "verified",
          locator: "Weight: from 85 to 110 pounds in dogs; from 75 to 95 pounds in bitches",
        },
        {
          id: "american-kennel-club-scottish-deerhound",
          role: "verified",
          locator: "Weight: male 85–110 lb; female 75–95 lb",
        },
      ],
      verifiedOn: "2026-11-03",
      note:
        "Stored in published source pounds: males 85 to 110 pounds; females 75 to 95 pounds.",
    },

    "physical.lifespanYears": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-scottish-deerhound",
          role: "verified",
          locator: "Life Expectancy: 8–11 years",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.life_span: 8 - 11 years",
        },
      ],
      verifiedOn: "2026-11-03",
      note:
        "Published breed-profile life expectancy range of 8 to 11 years.",
    },

    "physical.coatType": {
      reliability: "official_standard",
      sources: [
        {
          id: "american-kennel-club-scottish-deerhound-standard",
          role: "verified",
          locator: "Coat: harsh, wiry body coat with softer beard and mustache",
        },
        {
          id: "fci-deerhound-standard",
          role: "verified",
          locator: "Coat: harsh, wiry, ragged double coat",
        },
      ],
      verifiedOn: "2026-11-03",
      note: "Standards document a harsh, wiry, weather-resistant double coat.",
    },

    "physical.coatLength": {
      reliability: "official_standard",
      sources: [
        {
          id: "american-kennel-club-scottish-deerhound-standard",
          role: "verified",
          locator: "Coat: about 3 or 4 inches long",
        },
        {
          id: "fci-deerhound-standard",
          role: "verified",
          locator: "Coat: about 7.5 cm (3 ins) to 10 cm (4 ins) long",
        },
      ],
      verifiedOn: "2026-11-03",
      note: "Standard specifies body coat measuring approximately 3 to 4 inches in length.",
    },

    "physical.coatColors": {
      reliability: "official_standard",
      sources: [
        {
          id: "american-kennel-club-scottish-deerhound-standard",
          role: "verified",
          locator: "Color: dark blue-gray, darker and lighter grays or brindles, yellow and sandy-red or red-fawn",
        },
        {
          id: "fci-deerhound-standard",
          role: "verified",
          locator: "Colour",
        },
      ],
      verifiedOn: "2026-11-03",
      note: "Standard varieties include dark blue-grey, lighter greys, brindles, yellow, sandy red, and red fawn.",
    },

    "physical.sheddingLevel": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-scottish-deerhound",
          role: "verified",
          locator: "Shedding: Moderate",
        },
      ],
      verifiedOn: "2026-11-03",
      note: "Moderate shedding level documented in breed profile resources.",
    },

    "physical.droolingLevel": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note:
        "Tight, clean lip conformation prevents noticeable drooling.",
    },

    "physical.distinctiveFeatures": {
      reliability: "official_standard",
      sources: [
        {
          id: "american-kennel-club-scottish-deerhound-standard",
          role: "verified",
          locator: "General Appearance, Head, Eyes, Ears, Body, and Tail",
        },
        {
          id: "fci-deerhound-standard",
          role: "verified",
          locator: "General Appearance",
        },
      ],
      verifiedOn: "2026-11-03",
      note: "Synthesises standard-described features: Greyhound-like silhouette, tapered head, folded rose ears, deep chest, and wiry texture.",
    },

    temperament: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-deerhound-standard",
          role: "verified",
          locator: "Behaviour/Temperament",
        },
        {
          id: "american-kennel-club-scottish-deerhound",
          role: "verified",
          locator: "Breed traits, training, and About the Breed",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.temperament",
        },
      ],
      verifiedOn: "2026-11-03",
      note:
        "Official standards describe a gentle, dignified, friendly, and non-aggressive demeanor.",
    },

    "temperament.scores": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-scottish-deerhound",
          role: "cited",
          locator: "Breed Traits & Characteristics",
        },
        {
          id: "fci-deerhound-standard",
          role: "cited",
          locator: "Behaviour/Temperament",
        },
      ],
      verifiedOn: null,
      note:
        "Comparative 1–5 scores reflecting calm domestic disposition, low watchdog barking, and high coursing energy.",
    },

    "temperament.scores.withChildren": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No standardized numeric rating recorded; interactions require adult supervision due to giant size.",
    },

    "temperament.scores.withDogs": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "Dog compatibility depends on individual sighthound socialisation and predatory chase instincts.",
    },

    care: {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note:
        "General care guidance tailored to a giant, athletic sighthound requiring soft bedding and secure running grounds.",
    },

    "care.exercise": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-scottish-deerhound",
          role: "verified",
          locator: "Exercise and care of young and adult Deerhounds",
        },
        {
          id: "scottish-deerhound-club-of-america-breed-info",
          role: "verified",
          locator: "Exercise needs and home requirements",
        },
      ],
      verifiedOn: "2026-11-03",
      note:
        "Confirms high exercise demands combining daily leash walks with secure galloping opportunities.",
    },

    "care.exercise.minutesPerDay": {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-scottish-deerhound",
          role: "cited",
          locator: "Exercise needs",
        },
      ],
      verifiedOn: null,
      note:
        "Estimated 60 to 90 minutes of daily exercise based on coursing hound conditioning recommendations.",
    },

    "care.exercise.activities": {
      reliability: "general_guidance",
      sources: [
        {
          id: "american-kennel-club-scottish-deerhound",
          role: "cited",
          locator: "Exercise",
        },
      ],
      verifiedOn: null,
      note: "Recommended activities including free sprinting in enclosed paddocks, lure coursing, and road walks.",
    },

    "care.grooming": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-scottish-deerhound",
          role: "verified",
          locator: "Grooming",
        },
        {
          id: "american-kennel-club-scottish-deerhound-standard",
          role: "verified",
          locator: "Coat",
        },
      ],
      verifiedOn: "2026-11-03",
      note:
        "Weekly combing maintains the harsh, wiry coat without requiring professional clipping.",
    },

    "care.training": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-scottish-deerhound",
          role: "verified",
          locator: "Training and Exercise",
        },
        {
          id: "fci-deerhound-standard",
          role: "verified",
          locator: "Behaviour/Temperament",
        },
      ],
      verifiedOn: "2026-11-03",
      note:
        "Gentle, reward-based training is essential for this sensitive sighthound.",
    },

    "care.livingEnvironment": {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-scottish-deerhound",
          role: "verified",
          locator: "Exercise and home-care recommendations",
        },
        {
          id: "scottish-deerhound-club-of-america-breed-info",
          role: "verified",
          locator: "Size, exercise, and household considerations",
        },
      ],
      verifiedOn: "2026-11-03",
      note:
        "Requires spacious domestic quarters, high fencing, and strict precautions against warm-weather overheating.",
    },

    "care.livingEnvironment.apartmentSuitable": {
      reliability: "reliable_source",
      sources: [
        {
          id: "scottish-deerhound-club-of-america-breed-info",
          role: "verified",
          locator: "Household considerations: Size and exercise space",
        },
      ],
      verifiedOn: "2026-11-03",
      note:
        "Unsuited to apartment living due to giant size and requirement for expansive sprinting grounds.",
    },

    "care.livingEnvironment.houseWithYardSuitable": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "A spacious, securely fenced yard is strongly recommended for safe daily exercise.",
    },

    "care.livingEnvironment.aloneTimeTolerance": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note:
        "Moderate tolerance; companion-oriented nature means long daily isolation can cause distress.",
    },

    "nutrition": {
      reliability: "general_guidance",
      sources: [
        {
          id: "american-kennel-club-scottish-deerhound",
          role: "cited",
          locator: "Nutrition and bloat-risk guidance",
        },
        {
          id: "wsava-global-nutrition-guidelines",
          role: "cited",
          locator: "Global Nutrition Guidelines",
        },
      ],
      verifiedOn: null,
      note:
        "Nutritional guidance emphasizes complete life-stage diets, divided meals, and rest around feeding to lower bloat risk.",
    },

    "nutrition.feedingFrequency.puppy": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No universal puppy meal frequency recorded; consult a veterinarian for giant-breed growth schedules.",
    },

    "nutrition.feedingFrequency.adult": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No universal adult meal frequency recorded; two divided meals recommended to mitigate bloat.",
    },

    "nutrition.feedingFrequency.senior": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No universal senior meal frequency recorded; feeding needs depend on individual health and mobility.",
    },

    health: {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-scottish-deerhound",
          role: "verified",
          locator: "Health and Recommended Health Tests",
        },
        {
          id: "scottish-deerhound-club-of-america-health-testing",
          role: "verified",
          locator: "Recommended Health Tests and Code of Ethics Guidelines",
        },
      ],
      verifiedOn: "2026-11-03",
      note:
        "Identifies recognized breed predispositions including DCM, osteosarcoma, GDV, cystinuria, Factor VII deficiency, and DEPOH.",
    },

    "health.commonConditions": {
      reliability: "reliable_source",
      sources: [
        {
          id: "scottish-deerhound-club-of-america-health-testing",
          role: "verified",
          locator: "Factor VII, DEPOH, Cardiac, and Liver Shunt Guidelines",
        },
        {
          id: "american-kennel-club-scottish-deerhound",
          role: "verified",
          locator: "Health Considerations",
        },
      ],
      verifiedOn: "2026-11-03",
      note: "Documented health vulnerabilities verified across parent-club and kennel-club veterinary resources.",
    },

    "health.recommendedScreenings": {
      reliability: "reliable_source",
      sources: [
        {
          id: "scottish-deerhound-club-of-america-health-testing",
          role: "verified",
          locator: "Recommended Health Tests; Code of Ethics Guidelines for Health Testing",
        },
        {
          id: "american-kennel-club-scottish-deerhound",
          role: "verified",
          locator: "Recommended Health Tests From the National Breed Club",
        },
      ],
      verifiedOn: "2026-11-03",
      note:
        "Parent-club screening protocol includes cardiac echocardiography, Factor VII DNA testing, DEPOH DNA testing, and bile-acid liver shunt tests.",
    },

    "health.preventiveCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note: "Routine preventive care including bloat symptom awareness, cardiac monitoring, and sighthound anesthesia precautions.",
    },

    "health.dentalCare": {
      reliability: "general_guidance",
      sources: [
        {
          id: "avma-pet-dental-care",
          role: "cited",
          locator: "Pet Dental Care",
        },
      ],
      verifiedOn: null,
      note:
        "Regular dental hygiene prevents bacteremia and protects systemic cardiovascular health.",
    },

    "health.earCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note:
        "Routine inspection of folded rose ears for debris or moisture accumulation.",
    },

    "health.skinCare": {
      reliability: "general_guidance",
      sources: [],
      verifiedOn: null,
      note:
        "Regular skin inspection during combing, monitoring elbow points for hygromas or pressure sores.",
    },

    suitability: {
      reliability: "estimate",
      sources: [
        {
          id: "american-kennel-club-scottish-deerhound",
          role: "cited",
          locator: "Exercise, Training, Nutrition, and breed traits",
        },
        {
          id: "scottish-deerhound-club-of-america-breed-info",
          role: "cited",
          locator: "Household, exercise, and ownership considerations",
        },
      ],
      verifiedOn: null,
      note:
        "Qualitative suitability guidance based on giant size, coursing exercise needs, and gentle temperament.",
    },

    "suitability.firstTimeOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "No standardized empirical basis established for a universal first-time-owner rating.",
    },

    "suitability.familiesWithChildren": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "Family compatibility varies with child age, dog experience, and active adult supervision.",
    },

    "suitability.seniorOwners": {
      reliability: "unavailable",
      sources: [],
      verifiedOn: null,
      note:
        "Suitability depends on individual handler mobility and ability to safely control a giant sighthound.",
    },

    "suitability.activeOwners": {
      reliability: "estimate",
      sources: [],
      verifiedOn: null,
      note: "Well-suited for active owners committed to providing regular daily exercise and secure running opportunities.",
    },

    "suitability.apartmentLiving": {
      reliability: "estimate",
      sources: [
        {
          id: "scottish-deerhound-club-of-america-breed-info",
          role: "cited",
          locator: "Size and space requirements",
        },
      ],
      verifiedOn: null,
      note:
        "Unsuited to apartment living due to immense size and essential need for sprinting space.",
    },

    "suitability.idealFor": {
      reliability: "estimate",
      sources: [],
      verifiedOn: null,
      note: "Editorial assessment reflecting giant size, coursing activity needs, and gentle companionship.",
    },

    "suitability.notIdealFor": {
      reliability: "estimate",
      sources: [],
      verifiedOn: null,
      note: "Identifies living situations conflicting with sighthound needs, including confined spaces and guard dog expectations.",
    },

    funFacts: {
      reliability: "reliable_source",
      sources: [
        {
          id: "american-kennel-club-scottish-deerhound-history",
          role: "verified",
          locator: "Breed history and development as a deer coursing hound",
        },
        {
          id: "fci-deerhound-standard",
          role: "verified",
          locator: "Brief Historical Summary and General Appearance",
        },
      ],
      verifiedOn: "2026-11-03",
      note:
        "Historical Highland coursing origins, nobility ownership restrictions, and Sir Walter Scott's patronage verified.",
    },

    faq: {
      reliability: "reliable_source",
      sources: [
        {
          id: "fci-deerhound-standard",
          role: "verified",
          locator: "Origin, history, coat, temperament, and measurements",
        },
        {
          id: "american-kennel-club-scottish-deerhound",
          role: "verified",
          locator: "Size, life expectancy, exercise, grooming, nutrition, and health",
        },
        {
          id: "scottish-deerhound-club-of-america-health-testing",
          role: "verified",
          locator: "Recommended Health Tests",
        },
      ],
      verifiedOn: "2026-11-03",
      note:
        "FAQ answers synthesize official standard dimensions, health testing recommendations, and coursing care.",
    },

    "physical.weight.male.max": {
      reliability: "official_standard",
      sources: [
        {
          id: "american-kennel-club-scottish-deerhound-standard",
          role: "verified",
          locator: "Weight: up to 110 pounds in dogs",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.weight.metric",
        },
      ],
      verifiedOn: "2026-11-03",
      note: "Maximum male weight recorded as 110 lb (50 kg in metric references).",
    },

    "physical.weight.female.max": {
      reliability: "official_standard",
      sources: [
        {
          id: "american-kennel-club-scottish-deerhound-standard",
          role: "verified",
          locator: "Weight: up to 95 pounds in bitches",
        },
        {
          id: "the-dog-api",
          role: "verified",
          locator: "breed.weight.metric",
        },
      ],
      verifiedOn: "2026-11-03",
      note: "Maximum female weight recorded as 95 lb (43 kg in metric references).",
    },
  },

  updatedOn: "2026-11-03",
};
