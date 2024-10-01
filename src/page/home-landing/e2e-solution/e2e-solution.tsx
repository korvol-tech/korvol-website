import { FC, useRef } from "react";
import {
  SectionHeading,
  SectionSubheading,
  SectionWrapper,
} from "../components/section";
import { useInView } from "framer-motion";
import E2EServices from "./e2e-services";

const E2ESolution: FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  console.log(isInView);

  return (
    <SectionWrapper id="e2e-solution">
      <div className="h-full flex flex-col justify-center gap-6 md:gap-12 lg:gap-20">
        <SectionHeading className="!text-left">
          Korvol: Your All-In-One E-Commerce Partner
        </SectionHeading>
        <div className="grid grid-rows-1 md:grid-rows-1 grid-cols-1  gap-4">
          <SectionSubheading className="!text-left md:flex md:justify-center">
            At Korvol, we handle everything from store setup to payment
            gateways, logistics, marketing, and more. You focus on your vision,
            and we take care of the rest.
          </SectionSubheading>
        </div>
        <E2EServices />
      </div>
    </SectionWrapper>
  );
};

export default E2ESolution;
