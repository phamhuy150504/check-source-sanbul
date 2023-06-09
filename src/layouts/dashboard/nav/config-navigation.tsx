// routes
import { PATH_DASHBOARD } from "@/routes/path";
// components
import Label from "@/components/label";
import Iconify from "@/components/iconify";
import SvgColor from "@/components/svg-color";
import LabelNotification from "./LabelNotification";


// ----------------------------------------------------------------------

const icon = (name: string) => (
  <SvgColor
    src={`/assets/icons/navbar/${name}.svg`}
    sx={{ width: 1, height: 1 }}
  />
);

const ICONS = {
  blog: icon("ic_blog"),
  cart: icon("ic_cart"),
  chat: icon("ic_chat"),
  mail: icon("ic_mail"),
  user: icon("ic_user"),
  file: icon("ic_file"),
  lock: icon("ic_lock"),
  label: icon("ic_label"),
  blank: icon("ic_blank"),
  kanban: icon("ic_kanban"),
  folder: icon("ic_folder"),
  banking: icon("ic_banking"),
  booking: icon("ic_booking"),
  invoice: icon("ic_invoice"),
  calendar: icon("ic_calendar"),
  disabled: icon("ic_disabled"),
  external: icon("ic_external"),
  menuItem: icon("ic_menu_item"),
  ecommerce: icon("ic_ecommerce"),
  analytics: icon("ic_analytics"),
  dashboard: icon("ic_dashboard"),
  theair: icon("ic_tv-bold"),
  tvPopular: icon("ic_tv-one"),
  rate: icon("ic_star-rate"),
  popular: icon("ic_popular"),
  rateView: icon("ic_tv-top-rate"),
  watch: icon("ic_watch"),
  favorite: icon("ic_favorite"),
};

const navConfig = [
  // GENERAL
  // ----------------------------------------------------------------------
  {
    subheader: "menu",
    items: [{ title: "baccarat", path: "/", icon: ICONS.dashboard }],
  },

  // MOVIE
  // ----------------------------------------------------------------------
  {
    subheader: "Game",
    items: [
      {
        title: "wheel",
        path: PATH_DASHBOARD.game.wheel,
        icon: ICONS.analytics,
      },
      {
        title: "blackjack",
        path: PATH_DASHBOARD.game.blackjack,
        icon: ICONS.rate,
      },
      {
        title: "roulette",
        path: PATH_DASHBOARD.game.roulette,
        icon: ICONS.lock,
      },
    ],
  },
];

export default navConfig;
