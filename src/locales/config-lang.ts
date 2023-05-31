// @mui

import {enUS, viVN, koKR} from "@mui/material/locale";
// ----------------------------------------------------------------------------------------

export const allLangs = [
  {
    label: 'English',
    value: 'en',
    systemValue: enUS,
    icon: '/assets/icons/flags/ic_flag_en.svg',
  },
  {
    label: 'French',
    value: 'fr',
    systemValue: koKR,
    icon: '/assets/icons/flags/ic_flag_kr.jpg',
  },
  {
    label: 'Vietnamese',
    value: 'vi',
    systemValue: viVN,
    icon: '/assets/icons/flags/ic_flag_vn.svg',
  },
];

export const defaultLang = allLangs[2]; // Vietnamese