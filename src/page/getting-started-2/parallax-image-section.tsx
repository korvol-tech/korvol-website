import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function ParallaxImageSection() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <motion.section
      style={{
        pathLength: y,
        backgroundImage: "url('/assets/img/images/hero-img-1.jpg')",
      }}
      className="h-screen bg-fixed bg-cover bg-center"
    >
      <div className="flex items-center justify-center h-full">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-white text-4xl md:text-6xl font-bold"
        >
          Grow Your Business with Korvol
        </motion.h1>
      </div>
    </motion.section>
  );
}

export default ParallaxImageSection;
