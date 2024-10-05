import { FC, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  SectionHeading,
  SectionSubheading,
  SectionWrapper,
} from "../components/section";
// import { ImageBox } from "../components/image-box";

const ProblemAndOpportunity: FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.5, once: true });

  const animationVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <SectionWrapper id="problem-and-opportunity">
      <div
        ref={sectionRef}
        className="flex flex-col justify-center gap-6 md:gap-6 lg:gap-20"
      >
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={animationVariants}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <SectionHeading className="!text-left">
            Is Your Business Limited by Local Customers?
          </SectionHeading>
        </motion.div>
        <div className="grid grid-rows-1 md:grid-rows-1 grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={animationVariants}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <SectionSubheading className="!text-left md:flex md:justify-center">
              Many small businesses struggle with limited reach, relying only on
              local customers and missing out on the vast potential of online
              sales.
            </SectionSubheading>
          </motion.div>
          <div className="flex justify-center">
            <motion.img
              src="/assets/img/images/limit.svg"
              alt="Rocket"
              className="w-[200px] lg:w-[300px]"
              initial={{ x: 50, scale: 0.8, opacity: 0 }}
              animate={
                isInView
                  ? { x: 0, scale: 1, opacity: 1 }
                  : { x: 50, scale: 0.8, opacity: 0 }
              }
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            />
          </div>
        </div>
        {/* <ImageBox src="/assets/img/icon/rocket.svg" alt="Rocket" /> */}
      </div>
    </SectionWrapper>
  );
};

export default ProblemAndOpportunity;
