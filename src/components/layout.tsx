import { getSystemInfo } from "zmp-sdk";

import {
  AnimationRoutes,
  App,
  Route,
  SnackbarProvider,
  ZMPRouter,
} from "zmp-ui";

import { AppProps } from "zmp-ui/app";
import type { CSSProperties } from "react";

import BottomNavigation from "@/components/bottom-navigation";

import ConsultationPage from "@/pages/consultation";
import HomePage from "@/pages/index";
import NewsPage from "@/pages/news";
import ProductDetailPage from "@/pages/roduct-detail";
import PromotionPage from "@/pages/promotion";
import ShowroomPage from "@/pages/showroom";

const Layout = () => {
  const systemInfo = getSystemInfo();
  const statusBarHeight = systemInfo.statusBarHeight ?? 0;

  return (
    <App theme={systemInfo.zaloTheme as AppProps["theme"]}>
      <SnackbarProvider>
        <ZMPRouter>
          <div
            className="app-shell"
            style={{ "--app-safe-area-top": `${statusBarHeight}px` } as CSSProperties}
          >
            <div className="app-content">
              <AnimationRoutes>
                <Route path="/" element={<HomePage />} />

                <Route path="/showroom" element={<ShowroomPage />} />

                <Route path="/consultation" element={<ConsultationPage />} />

                <Route path="/news" element={<NewsPage />} />

                <Route path="/promotions" element={<PromotionPage />} />

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
