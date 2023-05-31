function path(root: string, sublink: string) {
  return `${root}${sublink}`;
}

const ROOTS_AUTH = "/auth";
const ROOTS_DASHBOARD = "/";

// ----------------------------------------------------------------------

export const PATH_AUTH = {
  root: ROOTS_AUTH,
  login: path(ROOTS_AUTH, "/login"),
  register: path(ROOTS_AUTH, "/register"),
};

export const PATH_ROUTER = {
  notfound: "/not-found",
  faqs: '/faqs',
  about:'about',
  contact:"contact",
  page403: "/403",
  page404: "/404",
  page500: "/500",
  root: "/",
  all: "*",
};

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,

  game: {
    baccarat: path(ROOTS_DASHBOARD, "baccarat-game"),
    wheel: path(ROOTS_DASHBOARD, "wheel-game"),
    blackjack: path(ROOTS_DASHBOARD, "black-jack-game"),
    roulette : path(ROOTS_DASHBOARD, "roulette-game"),
  },
};
