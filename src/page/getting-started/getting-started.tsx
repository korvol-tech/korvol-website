import { FC } from "react";
import { HeroSection } from "./hero-section";
import { ServicesSection } from "./services-section";
import { ProcessSection } from "./process-section";
import { ContactSection } from "./contact-section";
import { Footer } from "./footer";
import IndustriesSection from "./industry-section/industry-section";

const GettingStartedPage: FC = () => {
  return (
    <div className="font-sans">
      <HeroSection />
      <ServicesSection />
      <IndustriesSection />
      <ProcessSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default GettingStartedPage;
