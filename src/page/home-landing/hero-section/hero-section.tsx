import { FC } from "react";
import { ColoredText, CTAButton } from "../components";

const HeroSection: FC = () => {
  return (
    <div className="container flex flex-col gap-12 items-center justify-center h-screen">
      <h1 className="flex flex-col gap-6 text-4xl md:text-5xl lg:text-6xl font-bold text-center">
        Skyrocket Your Business with
        <ColoredText
          color="primary"
          className="text-5xl md:text-7xl font-extrabold"
        >
          Korvol
        </ColoredText>
      </h1>
      <h3 className="flex flex-col gap-2 text-xl md:text-2xl lg:text-3xl text-center">
        <span>Take your business from local to national or even global.</span>{" "}
        <span>Expand your reach with our complete e-commerce solution.</span>
      </h3>

      <div>
        <CTAButton color="primary">Get Started</CTAButton>
      </div>
    </div>
  );
};

export default HeroSection;
