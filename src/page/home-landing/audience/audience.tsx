import { FC, useRef } from "react";
import {
  SectionHeading,
  SectionSubheading,
  SectionWrapper,
} from "../components/section";
import { useInView } from "framer-motion";
import AudienceList from "./audience-list";
// import E2EServices from "./e2e-services";

const Audience: FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  console.log(isInView);

  return (
    <SectionWrapper id="e2e-solution">
      <div className="h-full flex flex-col justify-center gap-6 md:gap-12 lg:gap-20">
        <SectionHeading className="!text-left">
          Is Korvol Right for You?
        </SectionHeading>
        <div className="grid grid-rows-1 md:grid-rows-1 grid-cols-1  gap-4">
          <SectionSubheading className="!text-left md:flex md:justify-center">
            Whether you&apos;re a well-established business, a startup, or an
            individual with a vision, Korvol provides the tools to take your
            business online—no prior experience required.
          </SectionSubheading>
        </div>
        <AudienceList />
        {/* <E2EServices /> */}
      </div>
    </SectionWrapper>
  );
};

export default Audience;
