import { getSystemInfo } from "zmp-sdk";

import {
  AnimationRoutes,
  App,
  Route,
  SnackbarProvider,
  ZMPRouter,
} from "zmp-ui";

import { AppProps } from "zmp-ui/app";

import BottomNavigation from "@/components/bottom-navigation";

import ConsultationPage from "@/pages/consultation";
import HomePage from "@/pages/index";
import ProductDetailPage from "@/pages/roduct-detail";
import ShowroomPage from "@/pages/showroom";

const Layout = () => {
  return (
    <App theme={getSystemInfo().zaloTheme as AppProps["theme"]}>
      <SnackbarProvider>
        <ZMPRouter>
          <div className="app-shell">
            <div className="app-content">
              <AnimationRoutes>
                <Route path="/" element={<HomePage />} />

                <Route path="/showroom" element={<ShowroomPage />} />

                <Route path="/consultation" element={<ConsultationPage />} />

                <Route path="/product/:id" element={<ProductDetailPage />} />
              </AnimationRoutes>
            </div>

            <BottomNavigation />
          </div>
        </ZMPRouter>
      </SnackbarProvider>
    </App>
  );
};

export default Layout;
