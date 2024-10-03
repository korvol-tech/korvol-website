import { FC } from "react";
import { HeroSection } from "./hero-section";
import { ProblemAndOpportunity } from "./problem-and-opportunity";
import { PowerOfEcommerce } from "./power-of-ecommerce";
import { E2ESolution } from "./e2e-solution";
import { Footer } from "./footer";
import { Audience } from "./audience";
import { BookConsultation } from "./book-consultation";
import { Header } from "./header";

const HomeLanding: FC = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <HeroSection />
      <ProblemAndOpportunity />
      <PowerOfEcommerce />
      <E2ESolution />
      <Audience />
      <BookConsultation />
      <Footer />
    </div>
  );
};

export default HomeLanding;
