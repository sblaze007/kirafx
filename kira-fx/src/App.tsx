// import { Header } from "./components/Header";
// import { HeroSection } from "./components/HeroSection";
// import { ServicesSection } from "./components/ServicesSection";
// import { PerformanceSection } from "./components/PerformanceSection";
// import { AboutSection } from "./components/AboutSection";
// import { ContactSection } from "./components/ContactSection";
// import { Footer } from "./components/Footer";

import { Header } from "./components/Header";

export default function App() {
  return (
    <div
      style={{
        background:
          "linear-gradient(105deg, #009ffd 0%,  #7b2ff7 40%, #ff0080 70%, #ff6a00 100%)",
      }}
    >
      <Header />
      <main>
        {/* <HeroSection />
        <ServicesSection />
        <PerformanceSection />
        <AboutSection />
        <ContactSection /> */}
      </main>
      {/* <Footer /> */}
    </div>
  );
}
