import { Suspense, lazy, ElementType } from "react";
// components
import LoadingScreen from "@/components/loading-screen";

// ----------------------------------------------------------------------

const Loadable = (Component: ElementType) => (props: any) =>
  (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );

// ----------------------------------------------------------------------

// AUTH
export const LoginPage = Loadable(lazy(() => import("@/pages/auth/LoginPage")));
export const RegisterPage = Loadable(
  lazy(() => import("@/pages/auth/RegisterPage"))
);

// DASHBOARD: GENERAL
export const BaccaratGamePage = Loadable(
  lazy(() => import("@/pages/dashboard/BaccaratGamePage"))
);
export const SprintRingGamePage = Loadable(
  lazy(() => import("@/pages/dashboard/SprintRingGame"))
);
export const BlackJackGamePage = Loadable(
  lazy(() => import("@/pages/dashboard/BlackJackGamePage"))
);
export const RouletteGamePage = Loadable(
  lazy(() => import("@/pages/dashboard/RouletteGamePage"))
);

// MAIN
export const Page404 = Loadable(lazy(() => import("../pages/Page404")));
export const ComingSoonPage = Loadable(
  lazy(() => import("../pages/ComingSoonPage"))
);
