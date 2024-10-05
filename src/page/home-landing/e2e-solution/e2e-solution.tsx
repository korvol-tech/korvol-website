import { FC, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  SectionHeading,
  SectionSubheading,
  SectionWrapper,
} from "../components/section";
import E2EServices from "./e2e-services";

const E2ESolution: FC = () => {
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);

  const isHeadingInView = useInView(headingRef, { amount: 0.5, once: true });
  const isSubheadingInView = useInView(subheadingRef, {
    amount: 0.5,
    once: true,
  });

  return (
    <SectionWrapper id="e2e-solution">
      <div className="h-full flex flex-col justify-center gap-6 md:gap-12 lg:gap-20">
        <motion.div
          ref={headingRef}
          initial={{ y: -50, opacity: 0 }}
          animate={
            isHeadingInView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }
          }
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <SectionHeading className="!text-left">
            Korvol: Your All-In-One E-Commerce Partner
          </SectionHeading>
        </motion.div>
        <div className="grid grid-rows-1 md:grid-rows-1 grid-cols-1 gap-4">
          <motion.div
            ref={subheadingRef}
            initial={{ x: -50, opacity: 0 }}
            animate={
              isSubheadingInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }
            }
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <SectionSubheading className="!text-left md:flex md:justify-center">
              At Korvol, we handle everything from store setup to payment
              gateways, logistics, marketing, and more. You focus on your
              vision, and we take care of the rest.
            </SectionSubheading>
          </motion.div>
        </div>
        <E2EServices />
      </div>
    </SectionWrapper>
  );
};

export default E2ESolution;
