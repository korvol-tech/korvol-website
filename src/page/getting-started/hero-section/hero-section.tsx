import React, { FC } from "react";

const HeroSection: FC = () => {
  return (
    <section className="bg-gray-900 text-white h-screen flex flex-col justify-center items-center text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Thinking About Starting Your E-commerce Business but Don’t Know Where to
        Begin?
      </h1>
      <p className="text-lg md:text-xl mb-8">
        Korvol provides everything you need—from online store creation to
        marketing—to grow your business online.
      </p>
      <a
        href="#contact"
        className="bg-blue-500 text-white py-3 px-6 rounded-lg text-lg"
      >
        Get Started Today
      </a>
    </section>
  );
};

export default HeroSection;
