import { FC } from "react";
import {
  SectionHeading,
  SectionSubheading,
  SectionWrapper,
} from "../components/section";
// import { ImageBox } from "../components/image-box";

const BookConsultation: FC = () => {
  return (
    <SectionWrapper id="book-consultation">
      <div className="flex flex-col justify-center gap-6 md:gap-12 lg:gap-20">
        <SectionHeading className="!text-left">
          Ready to Take Your Business to the Next Level?
        </SectionHeading>
        <div className="grid grid-rows-1 md:grid-rows-1 grid-cols-1  gap-8">
          <SectionSubheading className="!text-left">
            Book a Free Consultation Today and Let&apos;s Discuss Your
            E-Commerce Future
          </SectionSubheading>
          <div className="w-full flex justify-center">
            <button className="h-fit bg-primary text-white rounded-md px-12 py-4 w-full md:w-fit font-bold text-xl">
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
            </button>
          </div>
        </div>
        {/* <ImageBox src="/assets/img/icon/rocket.svg" alt="Rocket" /> */}
      </div>
    </SectionWrapper>
  );
};

export default BookConsultation;
