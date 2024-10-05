import { FC } from "react";
import {
  SectionHeading,
  SectionSubheading,
  SectionWrapper,
} from "../components/section";
import { motion } from "framer-motion";

const PowerOfEcommerce: FC = () => {
  return (
    <SectionWrapper id="power-of-ecommerce">
      <div className="h-auto flex flex-col justify-center gap-6 md:gap-6 lg:gap-20">
        <SectionHeading className="!text-left">
          Reach Thousands of New Customers with E-Commerce
        </SectionHeading>
        <div className="flex flex-col gap-16 md:gap-28">
          <div className="grid grid-rows-1 md:grid-rows-1 grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <SectionSubheading className="!text-left md:flex md:justify-center">
              By going online, you unlock access to a growing digital
              marketplace where 70% of consumers prefer to shop
            </SectionSubheading>
            <div className="flex justify-center">
              <motion.img
                src="/assets/img/images/mobile-shop.svg"
                alt="mobile-shop"
                className="w-[200px]"
              />
            </div>
          </div>
          <div className="grid grid-rows-1 md:grid-rows-1 grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <SectionSubheading className="!text-left md:flex md:justify-center lg:order-2">
              Small businesses that go online can see a 20% to 30% increase in
              sales within the first year.
            </SectionSubheading>
            <div className="flex justify-center lg:order-1">
              <motion.img
                src="/assets/img/images/growth.svg"
                alt="growth"
                className="w-[250px] lg:w-[360px]"
              />
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default PowerOfEcommerce;
