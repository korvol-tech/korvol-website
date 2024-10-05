import { FC, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  SectionHeading,
  SectionSubheading,
  SectionWrapper,
} from "../components/section";
import AudienceList from "./audience-list";

const Audience: FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.5, once: true });

  return (
    <SectionWrapper id="audience">
      <div
        ref={sectionRef}
        className="h-full flex flex-col justify-center gap-6 md:gap-12 lg:gap-20"
      >
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <SectionHeading className="!text-left">
            Is Korvol Right for You?
          </SectionHeading>
        </motion.div>
        <div className="grid grid-rows-1 md:grid-rows-1 grid-cols-1 gap-12">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <SectionSubheading className="!text-left md:flex md:justify-center">
              Whether you&apos;re a well-established business, a startup, or an
              individual with a vision, Korvol provides the tools to take your
              business online—no prior experience required.
            </SectionSubheading>
          </motion.div>
          <AudienceList />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Audience;
