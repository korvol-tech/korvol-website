import { FC, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  SectionHeading,
  SectionSubheading,
  SectionWrapper,
} from "../components/section";

const PowerOfEcommerce: FC = () => {
  const headingRef = useRef(null);
  const block1Ref = useRef(null);
  const block2Ref = useRef(null);

  const isHeadingInView = useInView(headingRef, { amount: 0.5, once: true });
  const isBlock1InView = useInView(block1Ref, { amount: 0.5, once: true });
  const isBlock2InView = useInView(block2Ref, { amount: 0.5, once: true });

  return (
    <SectionWrapper id="power-of-ecommerce">
      <div className="h-auto flex flex-col justify-center gap-6 md:gap-6 lg:gap-20">
        <motion.div
          ref={headingRef}
          initial={{ y: -50, opacity: 0 }}
          animate={
            isHeadingInView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }
          }
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <SectionHeading className="!text-left">
            Reach Thousands of New Customers with E-Commerce
          </SectionHeading>
        </motion.div>
        <div className="flex flex-col gap-16 md:gap-20">
          <div
            ref={block1Ref}
            className="grid grid-rows-1 md:grid-rows-1 grid-cols-1 md:grid-cols-2 gap-8 items-center"
          >
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={
                isBlock1InView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }
              }
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <SectionSubheading className="!text-left md:flex md:justify-center">
                By going online, you unlock access to a growing digital
                marketplace where 70% of consumers prefer to shop
              </SectionSubheading>
            </motion.div>
            <div className="flex justify-center">
              <motion.img
                src="/assets/img/images/mobile-shop.svg"
                alt="mobile-shop"
                className="w-[200px]"
                initial={{ x: 50, scale: 0.8, opacity: 0 }}
                animate={
                  isBlock1InView
                    ? { x: 0, scale: 1, opacity: 1 }
                    : { x: 50, scale: 0.8, opacity: 0 }
                }
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </div>
          </div>
          <div
            ref={block2Ref}
            className="grid grid-rows-1 md:grid-rows-1 grid-cols-1 md:grid-cols-2 gap-8 items-center"
          >
            <motion.div
              className="lg:order-2"
              initial={{ x: -50, opacity: 0 }}
              animate={
                isBlock2InView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }
              }
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <SectionSubheading className="!text-left md:flex md:justify-center">
                Small businesses that go online can see a 20% to 30% increase in
                sales within the first year.
              </SectionSubheading>
            </motion.div>
            <div className="flex justify-center lg:order-1">
              <motion.img
                src="/assets/img/images/growth.svg"
                alt="growth"
                className="w-[250px] lg:w-[360px]"
                initial={{ x: 50, scale: 0.8, opacity: 0 }}
                animate={
                  isBlock2InView
                    ? { x: 0, scale: 1, opacity: 1 }
                    : { x: 50, scale: 0.8, opacity: 0 }
                }
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default PowerOfEcommerce;
