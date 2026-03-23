import { Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";
import { ScrollToTop } from "@/components/ui";
import { LandingPage, ContactPage, PortfolioPage, RenovationsPage, InstallationsPage, PoolTechPage, PricesPage, PortfolioDetailPage } from "@/pages";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Toaster position="top-center" richColors />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/terrace-pools" element={<InstallationsPage />} />
        <Route path="/pool-renovations" element={<RenovationsPage />} />
        <Route path="/pool-tech" element={<PoolTechPage />} />
        <Route path="/prices" element={<PricesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/portfolio/:slug" element={<PortfolioDetailPage />} />
      </Routes>
    </>
  );
}
