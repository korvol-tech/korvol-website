import React from "react";
import { motion } from "framer-motion";

function HeroSection() {
  return (
    <section className="bg-gray-900 text-white h-screen flex flex-col justify-center items-center text-center">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold mb-4"
      >
        Thinking About Starting Your E-commerce Business but Don’t Know Where to
        Begin?
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="text-lg md:text-xl mb-8"
      >
        Korvol has the complete e-commerce solution you&apos;ve been searching
        for!
      </motion.p>
      <motion.a
        href="#services"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="bg-blue-500 text-white py-3 px-6 rounded-lg text-lg"
      >
        Learn More
      </motion.a>
    </section>
  );
}

export default HeroSection;
