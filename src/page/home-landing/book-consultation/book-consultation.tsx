import { FC, MouseEventHandler, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  SectionHeading,
  SectionSubheading,
  SectionWrapper,
} from "../components/section";
import ContactUsForm from "./contact-us-form";
import Image from "next/image";

const BookConsultation: FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.2, once: true });

  const triggerAnchorOnClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.currentTarget.querySelector("a")?.click();
  };

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
          <div className="w-full flex flex-col">
            <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-8">
              <motion.button
                className="h-fit bg-primary text-white rounded-md px-4 py-4 w-full font-bold text-lg lg:text-xl"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={
                  isInView
                    ? { scale: 1, opacity: 1 }
                    : { scale: 0.5, opacity: 0 }
                }
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
                onClick={triggerAnchorOnClick}
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
                <div className="inline-flex justify-center items-center gap-4">
                  <Image
                    src="/assets/img/icon/schedule.svg"
                    alt="schedule"
                    height={20}
                    width={20}
                    className="!h-[20px] !w-[20px]"
                  />

                  <a
                    id="book"
                    href="https://calendly.com/nawaaz-korvol/30min"
                    target="_blank"
                  >
                    Book a Consultation
                  </a>
                </div>
              </motion.button>
              <motion.button
                className="h-fit bg-secondary text-white rounded-md px-4 py-4 w-full font-bold text-lg lg:text-xl"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={
                  isInView
                    ? { scale: 1, opacity: 1 }
                    : { scale: 0.5, opacity: 0 }
                }
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
                onClick={triggerAnchorOnClick}
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
                <div className="inline-flex justify-center items-center gap-4">
                  <Image
                    src="/assets/img/icon/call.svg"
                    alt="schedule"
                    height={20}
                    width={20}
                    className="!h-[20px] !w-[20px]"
                  />
                  <a id="call" href="tel:+9316896458">
                    Call Us Now
                  </a>
                </div>
              </motion.button>
              <motion.button
                className="h-fit border border-solid border-primary text-white rounded-md px-4 py-4 w-full font-bold text-lg lg:text-xl"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={
                  isInView
                    ? { scale: 1, opacity: 1 }
                    : { scale: 0.5, opacity: 0 }
                }
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
                onClick={triggerAnchorOnClick}
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
                <div className="inline-flex justify-center items-center gap-4">
                  <Image
                    src="/assets/img/icon/whatsapp.svg"
                    alt="schedule"
                    height={20}
                    width={20}
                    className="!h-[20px] !w-[20px]"
                  />
                  <a
                    id="call"
                    href="https://wa.me/message/YQ45OANXCSWSB1"
                    target="_blank"
                  >
                    Message us
                  </a>
                </div>
              </motion.button>
            </div>
            <div className="flex flex-col relative items-center my-12">
              <p className="text-center px-2 bg-black z-10 font-bold">Or</p>
              <div
                id="line"
                className="h-[1px] w-full bg-gray-300 transform -translate-y-[14px]"
              ></div>
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-semibold">
                Fill out the form below and we&apos;ll get back to you as soon
                as possible.
              </p>
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={
                  isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }
                }
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              >
                <ContactUsForm />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default BookConsultation;
