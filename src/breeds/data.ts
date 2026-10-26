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
];
