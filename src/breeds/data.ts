/**
 * Every authored breed. `npm run build` checks this list and writes
 * `data.json`. The local UI adds a breed here when you save a ChatGPT record.
 */

import type { Breed } from "../schema/breed.types";
import { berger_blanc_suisse } from "./berger_blanc_suisse";
import { braque_francais_gascogne } from "./braque_francais_gascogne";
import { eurasier } from "./eurasier";
import { glen_of_imaal_terrier } from "./glen_of_imaal_terrier";
import { great_pyrenees } from "./great_pyrenees";
import { hokkaido_ken } from "./hokkaido_ken";
import { italian_greyhound } from "./italian_greyhound";
import { pharaoh_hound } from "./pharaoh_hound";
import { russian_toy } from "./russian_toy";
import { schweizer_laufhund } from "./schweizer_laufhund";
import { slovak_cuvac } from "./slovak_cuvac";
import { staffordshire_bull_terrier } from "./staffordshire_bull_terrier";
import { wirehaired_vizsla } from "./wirehaired_vizsla";
import { kromfohrlander } from "./kromfohrlander";
import { coton_de_tulear } from "./coton_de_tulear";
import { cirneco_dell_etna } from "./cirneco_dell_etna";
import { nova_scotia_duck_tolling_retriever } from "./nova_scotia_duck_tolling_retriever";
import { bloodhound } from "./bloodhound";
import { grand_anglo_francais_tricolore } from "./grand_anglo_francais_tricolore";
import { grand_anglo_francais_blanc_et_orange } from "./grand_anglo_francais_blanc_et_orange";
import { tornjak } from "./tornjak";
import { bullmastiff } from "./bullmastiff";
import { bucovina_shepherd_dog } from "./bucovina_shepherd_dog";
import { boykin_spaniel } from "./boykin_spaniel";
import { artois_hound } from "./artois_hound";
import { old_danish_pointer } from "./old_danish_pointer";
import { maremma_sheepdog } from "./maremma_sheepdog";
import { hovawart } from "./hovawart";
import { american_english_coonhound } from "./american_english_coonhound";
import { english_setter } from "./english_setter";
import { pyrenean_mastiff } from "./pyrenean_mastiff";
import { tibetan_terrier } from "./tibetan_terrier";  
import { blackmouth_cur } from "./blackmouth_cur";
import { german_rough_haired_pointer } from "./german_rough_haired_pointer";
import { tyrolean_hound } from "./tyrolean_hound";
import { bernese_mountain_dog } from "./bernese_mountain_dog";
import { brittany } from "./brittany";
import { great_dane } from "./great_dane";
import { gascon_saintongeois } from "./gascon_saintongeois";
import { alpine_dachsbracke } from "./alpine_dachsbracke";
import { parson_russell_terrier } from "./parson_russell_terrier";
import { german_shepherd_dog } from "./german_shepherd_dog";
import { drentse_patrijshond } from "./drentse_patrijshond";
import { stabyhoun } from "./stabyhoun";
import { lowchen } from "./lowchen";
import { collie_rough } from "./collie_rough";
import { japanese_chin } from "./japanese_chin";
import { petit_brabancon } from "./petit_brabancon";
import { dutch_smoushond } from "./dutch_smoushond";
import { dalmatian } from "./dalmatian";
import { samoyed } from "./samoyed";
import { jack_russell_terrier } from "./jack_russell_terrier";
import { american_cocker_spaniel } from "./american_cocker_spaniel";
import { canadian_eskimo_dog } from "./canadian_eskimo_dog";
import { scottish_deerhound } from "./scottish_deerhound";
import { skye_terrier } from "./skye_terrier";
import { yorkshire_terrier } from "./yorkshire_terrier";
import { basset_griffon_vendeen_petit } from "./basset_griffon_vendeen_petit";
import { gordon_setter } from "./gordon_setter";
import { afghan_hound } from "./afghan_hound";
import { chow_chow } from "./chow_chow";
import { airedale_terrier } from "./airedale_terrier";
import { doberman_pinscher } from "./doberman_pinscher";
import { welsh_terrier } from "./welsh_terrier";
import { finnish_hound } from "./finnish_hound";
import { aidi } from "./aidi";
import { puli } from "./puli";
import { portuguese_water_dog } from "./portuguese_water_dog";
import { chinese_crested_dog } from "./chinese_crested_dog";
import { griffon_bleu_de_gascogne } from "./griffon_bleu_de_gascogne";
import { braque_saint_germain } from "./braque_saint_germain";
import { schipperke } from "./schipperke";
import { braque_d_auvergne } from "./braque_d_auvergne";
import { english_toy_terrier_black_tan } from "./english_toy_terrier_black_tan";
import { clumber_spaniel } from "./clumber_spaniel";
import { broholmer } from "./broholmer";
import { manchester_terrier } from "./manchester_terrier";
import { spinone_italiano } from "./spinone_italiano";
import { mudi } from "./mudi";
import { rafeiro_do_alentejo } from "./rafeiro_do_alentejo";
import { polish_hound } from "./polish_hound";
import { icelandic_sheepdog } from "./icelandic_sheepdog";
import { old_english_sheepdog } from "./old_english_sheepdog";
import { saluki } from "./saluki";
import { grey_norwegian_elkhound } from "./grey_norwegian_elkhound";
import { ariegeois } from "./ariegeois";
import { lancashire_heeler } from "./lancashire_heeler";
import { german_spitz } from "./german_spitz";
import { shiba_inu } from "./shiba_inu";
import { belgian_shepherd_dog_malinois } from "./belgian_shepherd_dog_malinois";
import { bulldog } from "./bulldog";
import { schapendoes } from "./schapendoes";
import { toy_fox_terrier } from "./toy_fox_terrier";
import { sabueso_espanol } from "./sabueso_espanol";
import { american_akita } from "./american_akita";
import { golden_retriever } from "./golden_retriever";
import { bull_terrier } from "./bull_terrier";
import { austrian_pinscher } from "./austrian_pinscher";
import { swedish_lapphund } from "./swedish_lapphund";
import { lhasa_apso } from "./lhasa_apso";
import { papillon_and_phalene } from "./papillon_and_phalene";
import { chien_francais_tricolore } from "./chien_francais_tricolore";
import { shar_pei } from "./shar_pei";
import { kai_ken } from "./kai_ken";
import { german_longhaired_pointer } from "./german_longhaired_pointer";
import { ibizan_hound } from "./ibizan_hound";
import { black_norwegian_elkhound } from "./black_norwegian_elkhound";
import { australian_silky_terrier } from "./australian_silky_terrier";
import { american_bulldog } from "./american_bulldog";
import { cairn_terrier } from "./cairn_terrier";
import { kooikerhondje } from "./kooikerhondje";
import { norfolk_terrier } from "./norfolk_terrier";
import { central_asian_shepherd_dog } from "./central_asian_shepherd_dog";
import { drever } from "./drever";
import { perro_de_presa_mallorquin } from "./perro_de_presa_mallorquin";
import { epagneul_bleu_de_picardie } from "./epagneul_bleu_de_picardie";
import { posavac_hound } from "./posavac_hound";
import { beauceron } from "./beauceron";
import { berger_picard } from "./berger_picard";
import { podenco_canario } from "./podenco_canario";
import { sussex_spaniel } from "./sussex_spaniel";
import { cesky_fousek } from "./cesky_fousek";
import { bull_terrier_miniature } from "./bull_terrier_miniature";
import { akita_inu } from "./akita_inu";
import { schweizerischer_niederlaufhund } from "./schweizerischer_niederlaufhund";
import { boxer } from "./boxer";
import { pug } from "./pug";
import { segugio_italiano_a_pelo_forte } from "./segugio_italiano_a_pelo_forte";
import { kuvasz } from "./kuvasz";
import { schillerstovare } from "./schillerstovare";
import { american_staffordshire_terrier } from "./american_staffordshire_terrier";
import { beagle_harrier } from "./beagle_harrier";
import { treeing_walker_coonhound } from "./treeing_walker_coonhound";
import { segugio_italiano_a_pelo_raso } from "./segugio_italiano_a_pelo_raso";
import { cao_de_castro_laboreiro } from "./cao_de_castro_laboreiro";
import { american_eskimo_dog } from "./american_eskimo_dog";
import { finnish_spitz } from "./finnish_spitz";
import { transylvanian_hound } from "./transylvanian_hound";
import { hamiltonstovare } from "./hamiltonstovare";
import { basset_hound } from "./basset_hound";
import { greenland_dog } from "./greenland_dog";
import { estrela_mountain_dog } from "./estrela_mountain_dog";
import { west_highland_white_terrier } from "./west_highland_white_terrier";
import { patterdale_terrier } from "./patterdale_terrier";
import { istrian_coarse_haired_hound } from "./istrian_coarse_haired_hound";
import { appenzeller_sennenhund } from "./appenzeller_sennenhund";
import { azawakh } from "./azawakh";
import { english_cocker_spaniel } from "./english_cocker_spaniel";
import { danish_swedish_farmdog } from "./danish_swedish_farmdog";
import { griffon_bruxellois_80 } from "./griffon_bruxellois_80";
import { barbet } from "./barbet";
import { scottish_terrier } from "./scottish_terrier";
import { briard } from "./briard";
import { weimaraner } from "./weimaraner";
import { curly_coated_retriever } from "./curly_coated_retriever";
import { spanish_mastiff } from "./spanish_mastiff";
import { norrbottenspets } from "./norrbottenspets";
import { rhodesian_ridgeback } from "./rhodesian_ridgeback";
import { whippet } from "./whippet";
import { fox_terrier_smooth } from "./fox_terrier_smooth";
import { bolognese } from "./bolognese";
import { belgian_shepherd_dog_groenendael } from "./belgian_shepherd_dog_groenendael";
import { basset_bleu_de_gascogne } from "./basset_bleu_de_gascogne";
import { croatian_sheepdog } from "./croatian_sheepdog";
import { harrier } from "./harrier";
import { peruvian_hairless_dog } from "./peruvian_hairless_dog";
import { montenegrin_mountain_hound } from "./montenegrin_mountain_hound";
import { halden_hound } from "./halden_hound";
import { caucasian_shepherd_dog } from "./caucasian_shepherd_dog";
import { english_springer_spaniel } from "./english_springer_spaniel";
import { alaskan_malamute } from "./alaskan_malamute";
import { landseer } from "./landseer";


export const breedData: readonly Breed[] = [
  berger_blanc_suisse,
  braque_francais_gascogne,
  eurasier,
  glen_of_imaal_terrier,
  great_pyrenees,
  hokkaido_ken,
  italian_greyhound,
  pharaoh_hound,
  russian_toy,
  schweizer_laufhund,
  slovak_cuvac,
  staffordshire_bull_terrier,
  wirehaired_vizsla,
  kromfohrlander,
  coton_de_tulear,
  cirneco_dell_etna,
  nova_scotia_duck_tolling_retriever,
  bloodhound,
  grand_anglo_francais_tricolore,
  grand_anglo_francais_blanc_et_orange,
  tornjak,
  bullmastiff,
  bucovina_shepherd_dog,
  boykin_spaniel,
  artois_hound,
  old_danish_pointer,
  maremma_sheepdog,
  hovawart,
  american_english_coonhound,
  english_setter,
  pyrenean_mastiff,
  tibetan_terrier,
  blackmouth_cur,
  german_rough_haired_pointer,
  tyrolean_hound,
  bernese_mountain_dog,
  brittany,
  great_dane,
  gascon_saintongeois,
  alpine_dachsbracke,
  parson_russell_terrier,
  german_shepherd_dog,
  drentse_patrijshond,
  stabyhoun,
  lowchen,
  collie_rough,
  japanese_chin,
  petit_brabancon,
  dutch_smoushond,
  dalmatian,
  samoyed,
  jack_russell_terrier,
  american_cocker_spaniel,
  canadian_eskimo_dog,
  scottish_deerhound,
  skye_terrier,
  yorkshire_terrier,
  basset_griffon_vendeen_petit,
  gordon_setter,
  afghan_hound,
  chow_chow,
  airedale_terrier,
  doberman_pinscher,
  welsh_terrier,
  finnish_hound,
  aidi,
  puli,
  portuguese_water_dog,
  chinese_crested_dog,
  griffon_bleu_de_gascogne,
  braque_saint_germain,
  schipperke,
  braque_d_auvergne,
  english_toy_terrier_black_tan,
  clumber_spaniel,
  broholmer,
  manchester_terrier,
  spinone_italiano,
  mudi,
  rafeiro_do_alentejo,
  polish_hound,
  icelandic_sheepdog,
  old_english_sheepdog,
  saluki,
  grey_norwegian_elkhound,
  ariegeois,
  lancashire_heeler,
  german_spitz,
  shiba_inu,
  belgian_shepherd_dog_malinois,
  bulldog,
  schapendoes,
  toy_fox_terrier,
  sabueso_espanol,
  american_akita,
  golden_retriever,
  bull_terrier,
  austrian_pinscher,
  swedish_lapphund,
  lhasa_apso,
  papillon_and_phalene,
  chien_francais_tricolore,
  shar_pei,
  kai_ken,
  german_longhaired_pointer,
  ibizan_hound,
  black_norwegian_elkhound,
  australian_silky_terrier,
  american_bulldog,
  cairn_terrier,
  kooikerhondje,
  norfolk_terrier,
  central_asian_shepherd_dog,
  drever,
  perro_de_presa_mallorquin,
  epagneul_bleu_de_picardie,
  posavac_hound,
  beauceron,
  berger_picard,
  podenco_canario,
  sussex_spaniel,
  cesky_fousek,
  bull_terrier_miniature,
  akita_inu,
  schweizerischer_niederlaufhund,
  boxer,
  pug,
  segugio_italiano_a_pelo_forte,
  kuvasz,
  schillerstovare,
  american_staffordshire_terrier,
  beagle_harrier,
  treeing_walker_coonhound,
  segugio_italiano_a_pelo_raso,
  cao_de_castro_laboreiro,
  american_eskimo_dog,
  finnish_spitz,
  transylvanian_hound,
  hamiltonstovare,
  basset_hound,
  greenland_dog,
  estrela_mountain_dog,
  west_highland_white_terrier,
  patterdale_terrier,
  istrian_coarse_haired_hound,
  appenzeller_sennenhund,
  azawakh,
  english_cocker_spaniel,
  danish_swedish_farmdog,
  griffon_bruxellois_80,
  barbet,
  scottish_terrier,
  briard,
  weimaraner,
  curly_coated_retriever,
  spanish_mastiff,
  norrbottenspets,
  rhodesian_ridgeback,
  whippet,
  fox_terrier_smooth,
  bolognese,
  belgian_shepherd_dog_groenendael,
  basset_bleu_de_gascogne,
  croatian_sheepdog,
  harrier,
  peruvian_hairless_dog,
  montenegrin_mountain_hound,
  halden_hound,
  caucasian_shepherd_dog,
  english_springer_spaniel,
  alaskan_malamute,
  landseer,
];
