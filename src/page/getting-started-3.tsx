import React, { FC, ReactNode, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import clsx from "clsx";

function GettingStarted3() {
  const container = useRef(null);

  return (
    <div ref={container} style={{ height: 10000 }}>
      {/* <div className="container h-screen flex flex-col gap-8 justify-center items-center text-white">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0 }}
          className="text-3xl font-semibold text-center"
        >
          Welcome to
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.3 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <img
            src="/assets/img/logo/logo-dark.png"
            alt="logo"
            className="w-[280px]"
          />
        </motion.div>
        <motion.button
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="px-3 py-2 !bg-primary rounded-sm"
          onClick={() => {
            document.getElementById("two")?.scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          Get started
        </motion.button>
      </div> */}
      <ScrollFade
        id="two"
        text="Thinking to start your E-commerce business but don’t know where to
          begin?"
        img={{
          src: "/assets/img/icon/searching.svg",
          alt: "searching",
          className: "w-full",
        }}
      />
      <ScrollFade
        text="Want to sell online but unsure of the next steps?"
        img={{
          src: "/assets/img/icon/next-steps.svg",
          alt: "next-steps",
          className: "w-full",
        }}
        arrangment="img-text"
      />
      <ScrollFade
        text="Got an online business idea but need guidance and support to get started?"
        img={{
          src: "/assets/img/icon/directions.svg",
          alt: "directions",
          className: "w-full",
        }}
      />
      <Callout />
      <Services />
      <ScrollFade
        text={
          <span className="flex flex-col gap-4">
            Whether you’re already running a business
            <span className="text-5xl md:text-7xl">OR</span>
            Starting something brand new
          </span>
        }
      />
    </div>
  );
}

type ScrollFadeProps = JSX.IntrinsicElements["div"] & {
  text: ReactNode;
  img?: {
    src: string;
    alt: string;
    className?: string;
  };
  arrangment?: "text-img" | "img-text";
};

const ScrollFade: FC<ScrollFadeProps> = ({
  text,
  img,
  arrangment = "text-img",
  ...props
}: ScrollFadeProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref, // Track scroll within this component's boundaries
    offset: ["start end", "end start"], // When the component enters and exits the viewport
  });

  // Assume the height of the viewport (screen) is 1 unit (scrollYProgress is between 0 and 1)
  // We want the opacity to increase from 0 to 1 in the first half (0 to 0.5)
  // And decrease from 1 to 0 in the second half (0.5 to 1)

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1], // Input scroll progress (0 to 0.5: fade in, 0.5 to 1: fade out)
    [0, 1, 0] // Corresponding opacity values (fade in, fully visible, fade out)
  );

  return (
    <div
      ref={ref}
      className={clsx(
        "container h-screen grid grid-cols-1 items-center justify-center w-full",
        arrangment === "img-text" && "md:direction-col-reverse",
        img ? "md:grid-cols-2" : "md:grid-cols-1"
      )}
      {...props}
    >
      <motion.h1
        style={{ opacity }} // Bind the opacity to the scrolling value
        className={clsx(
          "text-4xl md:text-6xl font-bold",
          arrangment === "img-text" && "text-right md:order-2"
        )}
      >
        {text}
      </motion.h1>
      <motion.img
        {...img}
        className={clsx(
          img?.className,
          arrangment === "img-text" && "md:order-1"
        )}
      />
    </div>
  );
};

const Callout = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  console.log(isInView);

  return (
    <div
      ref={ref}
      className="h-screen flex flex-col justify-center items-center text-white relative"
    >
      <motion.img
        initial={{ opacity: 0, y: -50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        src="/assets/img/icon/blob-1.svg"
        alt="blob"
        className="w-full md:w-[80%] absolute transform -translate-x-1/2 -translate-y-1/2"
        // style={{
        //   // oval shape, slanted from top to bottom
        //   clipPath: "ellipse(50% 50% at 50% 50%)",
        //   // rotate on z-axis to slant the oval
        //   // transform: "rotateZ(45deg)",
        //   transform: "translateZ(50px)",
        // }}
      />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, delay: 0.13 }}
      >
        <h1 className="text-3xl font-semibold text-center flex flex-col gap-6">
          <span>Look no further 🤚</span>
          {/* <span className=""></span> */}
          <span className="text-5xl md:text-7xl font-bold">
            We have the complete{" "}
            <span className="!text-secondary">e-commerce solution</span>
          </span>
          <span>You’ve been searching for!</span>
        </h1>
      </motion.div>
    </div>
  );
};

const Services: FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "0px 0px -100px 0px",
  });

  const services = [
    {
      title: "Online Store",
      img: "/assets/img/icon/shop.svg",
      description: "Creating your online store",
    },
    {
      title: "Inventory",
      img: "/assets/img/icon/inventory.svg",
      description: "Setting up your inventory",
    },
    {
      title: "Payment Gateway",
      img: "/assets/img/icon/payment.svg",
      description: "Integrating payment gateway",
    },
    {
      title: "Logistics",
      img: "/assets/img/icon/delivery.svg",
      description: "Setting up your logistics",
    },
    {
      title: "Order Management",
      img: "/assets/img/icon/order.svg",
      description: "Order Management",
    },
    {
      title: "Customer Support",
      img: "/assets/img/icon/customer-support.svg",
      description: "Customer Support",
    },
    {
      title: "Digital Advertising",
      img: "/assets/img/icon/ads.svg",
      description: "Advertising your business digitally",
    },
    {
      title: "Social Media Management",
      img: [
        "/assets/img/icon/facebook.svg",
        "/assets/img/icon/instagram.svg",
        "/assets/img/icon/x.svg",
        "/assets/img/icon/linkedin.svg",
      ],
      description: "Managing your social media",
    },
  ];

  return (
    <div
      ref={ref}
      className="min-h-screen py-12 flex flex-col items-center text-white space-y-8"
    >
      <motion.div>
        <h3 className="text-2xl md:text-3xl font-bold text-center">From</h3>
      </motion.div>
      {isInView
        ? services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 + index * 0.5 }}
              className="flex flex-col items-center space-y-4"
            >
              {/* <motion.h4 className="text-xl md:text-2xl font-semibold text-center">
                {service.title}
              </motion.h4> */}
              {Array.isArray(service.img) ? (
                <motion.div className="grid grid-cols-2 grid-rows-2 gap-1">
                  {service.img.map((src, index) => (
                    <motion.img
                      key={index}
                      src={src}
                      alt={service.title}
                      className="w-10 h-10"
                    />
                  ))}
                </motion.div>
              ) : (
                <motion.img
                  src={service.img}
                  alt={service.title}
                  className="w-20 h-20"
                />
              )}
              <motion.p className="text-white">{service.description}</motion.p>
            </motion.div>
          ))
        : null}
    </div>
  );
};

export default GettingStarted3;
