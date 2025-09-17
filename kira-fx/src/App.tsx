import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { ServicesSection } from "./components/ServicesSection";
import { PerformanceSection } from "./components/PerformanceSection";
import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import StocksTable from "./components/Table";

export default function App() {
  return (
    <div>
      <Header />
      <div className="min-h-screen gradient-bg">
        <StocksTable />
        <HeroSection />
        <ServicesSection />
        <PerformanceSection />
        <AboutSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
}
