import { FC, useRef } from "react";
import { HeroSection } from "./hero-section";
import { ProblemAndOpportunity } from "./problem-and-opportunity";
import { PowerOfEcommerce } from "./power-of-ecommerce";
import { E2ESolution } from "./e2e-solution";
import { Footer } from "./footer";
import { Audience } from "./audience";
import { BookConsultation } from "./book-consultation";
import { Header } from "./header";
import "./home-landing.css";
import GoogleAnalytics from "./scripts/google-analytics";

const HomeLanding: FC = () => {
  const sectionsRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex flex-col">
      <Header />
      <div ref={sectionsRef} className="smooth-scroll">
        <HeroSection />
        <ProblemAndOpportunity />
        <PowerOfEcommerce />
        <E2ESolution />
        <Audience />
        <BookConsultation />
        <Footer />
      </div>
      <GoogleAnalytics />
    </div>
  );
};

export default HomeLanding;
