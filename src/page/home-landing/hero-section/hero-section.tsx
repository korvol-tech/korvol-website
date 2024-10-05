import { FC } from "react";
import { ColoredText, CTAButton } from "../components";
import "./hero-section.css";

const HeroSection: FC = () => {
  return (
    <div id="hero-section" className="h-screen">
      <div className="container flex flex-col gap-12 items-center justify-center h-full">
        <h1 className="flex flex-col gap-4 text-4xl md:text-5xl lg:text-6xl font-bold text-center">
          Skyrocket Your Business with
          <div className="flex justify-center">
            <img
              src="/assets/img/logo/logo-dark.png"
              alt="logo"
              className="w-[240px] md:w-[360px]"
            />
          </div>
          {/* <ColoredText
          color="primary"
          className="text-5xl md:text-7xl font-extrabold"
        >
          Korvol
        </ColoredText> */}
        </h1>
        <h3 className="flex flex-col gap-2 text-xl md:text-2xl lg:text-3xl text-center">
          <span>Take your business from local to national or even global.</span>{" "}
          <span>Expand your reach with our complete e-commerce solution.</span>
        </h3>

        <div>
          <button className="h-fit bg-primary text-white rounded-md px-12 py-4 w-full md:w-fit font-bold text-xl">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
