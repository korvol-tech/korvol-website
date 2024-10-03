import { FC } from "react";
import {
  SectionHeading,
  SectionSubheading,
  SectionWrapper,
} from "../components/section";
// import { ImageBox } from "../components/image-box";
import { motion } from "framer-motion";

const ProblemAndOpportunity: FC = () => {
  return (
    <SectionWrapper id="problem-and-opportunity">
      <div className="h-full flex flex-col justify-center gap-6 md:gap-12 lg:gap-20">
        <SectionHeading className="!text-left">
          Is Your Business Limited by Local Customers?
        </SectionHeading>
        <div className="grid grid-rows-1 md:grid-rows-1 grid-cols-1 md:grid-cols-2 gap-4">
          <SectionSubheading className="!text-left md:flex md:justify-center">
            Many small businesses struggle with limited reach, relying only on
            local customers and missing out on the vast potential of online
            sales.
          </SectionSubheading>
          <div className="flex justify-center">
            <motion.img
              src="/assets/img/images/limit.svg"
              alt="Rocket"
              className="w-[80%]"
            />
          </div>
        </div>
        {/* <ImageBox src="/assets/img/icon/rocket.svg" alt="Rocket" /> */}
      </div>
    </SectionWrapper>
  );
};

export default ProblemAndOpportunity;
