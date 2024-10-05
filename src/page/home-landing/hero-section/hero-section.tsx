import { FC, useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./hero-section.css";

const HeroSection: FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.5, once: true });

  return (
    <div id="hero-section" className="h-screen">
      <div
        ref={sectionRef}
        className="container flex flex-col gap-12 items-center justify-center h-full"
      >
        <motion.div
          className="flex flex-col gap-4 text-4xl md:text-5xl lg:text-6xl font-bold text-center"
          initial={{ y: -100, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1>
            Skyrocket Your Business with
            <div className="flex justify-center">
              <img
                src="/assets/img/logo/logo-dark.png"
                alt="logo"
                className="w-[240px] md:w-[360px]"
              />
            </div>
          </h1>
        </motion.div>
        <motion.div
          className="flex flex-col gap-2 text-xl md:text-2xl lg:text-3xl text-center"
          initial={{ y: 100, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <h3>
            <span>
              Take your business from local to national or even global.
            </span>{" "}
            <span>
              Expand your reach with our complete e-commerce solution.
            </span>
          </h3>
        </motion.div>

        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={
            isInView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }
          }
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
        >
          <button className="h-fit bg-primary text-white rounded-md px-12 py-4 w-full md:w-fit font-bold text-xl">
            Get Started
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
