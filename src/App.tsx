// i18n
import "./locales/i18n";

// scroll bar
import "simplebar-react/dist/simplebar.min.css";

// lazy image
import "react-lazy-load-image-component/src/effects/blur.css";

// lightbox
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

// slick-carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// @mui
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers";

import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

// Routes
import Router from "@/routes";
//Redux
import { Provider as ReduxProvider } from "react-redux";
import { persistor, store } from "@/redux/store";
// Locales
import ThemeLocalization from "@/locales/ThemeLocalization";
// Theme
import ThemeProvider from "@/theme";
// Auth
import { AuthProvider } from "./auth/FireBaseContext";
// components
import ScrollToTop from "@/components/scroll-to-top";
import { SettingsProvider, ThemeSettings } from "./components/settings";
import MotionLazyContainer from "@/components/animate/MotionLazyContainer";

import SnackbarProvider from "@/components/snackbar/SnackbarProvider";
import { PersistGate } from "redux-persist/lib/integration/react";

function App() {
  return (
    <AuthProvider>
      <HelmetProvider>
        <ReduxProvider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <SettingsProvider>
                <BrowserRouter>
                  <ScrollToTop />
                  <MotionLazyContainer>
                    <ThemeProvider>
                      <ThemeLocalization>
                        <SnackbarProvider>
                          <Router />
                        </SnackbarProvider>
                      </ThemeLocalization>
                    </ThemeProvider>
                  </MotionLazyContainer>
                </BrowserRouter>
              </SettingsProvider>
            </LocalizationProvider>
          </PersistGate>
        </ReduxProvider>
      </HelmetProvider>
    </AuthProvider>
  );
}

export default App;
