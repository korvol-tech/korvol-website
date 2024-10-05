import { FC, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  SectionHeading,
  SectionSubheading,
  SectionWrapper,
} from "../components/section";

const BookConsultation: FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.5, once: true });

  return (
    <SectionWrapper id="book-consultation">
      <div
        ref={sectionRef}
        className="flex flex-col justify-center gap-6 md:gap-12 lg:gap-20"
      >
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <SectionHeading className="!text-left">
            Ready to Take Your Business to the Next Level?
          </SectionHeading>
        </motion.div>
        <div className="grid grid-rows-1 md:grid-rows-1 grid-cols-1 gap-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <SectionSubheading className="!text-left">
              Book a Free Consultation Today and Let&apos;s Discuss Your
              E-Commerce Future
            </SectionSubheading>
          </motion.div>
          <div className="w-full flex justify-center">
            <motion.button
              className="h-fit bg-primary text-white rounded-md px-12 py-4 w-full md:w-fit font-bold text-xl"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={
                isInView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }
              }
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
            >
              <style>
                {`
                  #book {
                    text-decoration: none;
                    color: inherit;
                  }
                  #book:hover {
                    text-decoration: none;
                  }
                `}
              </style>
              <a
                id="book"
                href="https://calendly.com/nawaaz-korvol/30min"
                target="_blank"
              >
                Book a Consultation Now
              </a>
            </motion.button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default BookConsultation;
