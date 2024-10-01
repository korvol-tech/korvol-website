import React from "react";
import { Element } from "react-scroll";
import HeroSection from "./hero-section";
import TranscriptScrollSection from "./transcript-scroll-section";
import ParallaxImageSection from "./parallax-image-section";
import { ServicesSection } from "../getting-started-1/services-section";
import { Footer } from "../getting-started-1/footer";

function GettingStarted2() {
  return (
    <div>
      <HeroSection />
      <Element name="services">
        <TranscriptScrollSection />
      </Element>
      <ParallaxImageSection />
      <ServicesSection />
      <Footer />
    </div>
  );
}

export default GettingStarted2;
