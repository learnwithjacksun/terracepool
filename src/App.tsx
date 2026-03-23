import { Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";
import { ScrollToTop } from "@/components/ui";
import { LandingPage, ContactPage, PortfolioPage, RenovationsPage, InstallationsPage, PoolTechPage, PricesPage, PortfolioDetailPage } from "@/pages";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


export default function App() {

  useEffect(() => {
    AOS.init();
  }, []);
 
  
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
