import { FC } from "react";
import { HeroSection } from "./hero-section";
import { ProblemAndOpportunity } from "./problem-and-opportunity";
import { PowerOfEcommerce } from "./power-of-ecommerce";
import { E2ESolution } from "./e2e-solution";
import { Footer } from "./footer";

const HomeLanding: FC = () => {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ProblemAndOpportunity />
      <PowerOfEcommerce />
      <E2ESolution />
      <Footer />
    </div>
  );
};

export default HomeLanding;
