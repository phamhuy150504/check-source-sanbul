//
import { Navigate, useRoutes } from "react-router-dom";
// components
import DashboardLayout from "@/layouts/dashboard/DashboardLayout";
// auth
import GuestGuard from "@/auth/GuestGuard";
import {
  BaccaratGamePage,
  LoginPage,
  RegisterPage,
  Page404,
  SprintRingGamePage,
  RouletteGamePage,
  BlackJackGamePage,
} from "./elements";
// layouts
import CompactLayout from "@/layouts/compact/CompactLayout";

// ---------------------------------------------------------------------------------------------------------------
export default function Router() {
  return useRoutes([
    // Auth
    {
      path: "auth",
      children: [
        {
          path: "login",
          element: (
            <GuestGuard>
              <LoginPage />
            </GuestGuard>
          ),
        },
        {
          path: "register",
          element: (
            <GuestGuard>
              <RegisterPage />
            </GuestGuard>
          ),
        },
      ],
    },

    // Dashboard
    {
      element: <DashboardLayout />,
      children: [
        { element: <BaccaratGamePage />, index: true },
        { element: <SprintRingGamePage />, path: "wheel-game" },
        { element: <BlackJackGamePage />, path: "black-jack-game" },
        { element: <RouletteGamePage />, path: "roulette-game" },
      ],
    },

    {
      element: <CompactLayout />,
      children: [
        {
          path: "404",
          element: <Page404 />,
        },
      ],
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}
