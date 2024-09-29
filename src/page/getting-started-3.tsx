import React, { FC, ReactNode, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

function GettingStarted3() {
  const container = useRef(null);

  return (
    <div ref={container} style={{ height: 10000 }}>
      <div className="container h-screen flex flex-col gap-8 justify-center items-center text-white">
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
        {/* <button className="px-3 py-2 !bg-primary text-white rounded-sm">
          Get started
        </button> */}
      </div>
      <ScrollFadeText
        id="two"
        text="Thinking to start your E-commerce business but don’t know where to
          begin?"
      />
      <ScrollFadeText text="Want to sell online but unsure of the next steps?" />
      <ScrollFadeText text="Got an online business idea but need guidance and support?" />
      <Callout />
      <Services />
      <ScrollFadeText
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

type ScrollFadeTextProps = JSX.IntrinsicElements["div"] & {
  text: ReactNode;
};

function ScrollFadeText({ text, ...props }: ScrollFadeTextProps) {
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
      className="container h-screen flex items-center justify-center"
      {...props}
    >
      <motion.h1
        style={{ opacity }} // Bind the opacity to the scrolling value
      >
        <h1 className="text-4xl md:text-6xl font-bold">{text}</h1>
      </motion.h1>
    </div>
  );
}

const Callout = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  console.log(isInView);

  return (
    <div
      ref={ref}
      className="h-screen flex flex-col justify-center items-center text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="w-60 h-32 !bg-primary rounded-[50%] !skew-x-[-50deg]"
        style={{
          // oval shape, slanted from top to bottom
          clipPath: "ellipse(50% 50% at 50% 50%)",
          // rotate on z-axis to slant the oval
          // transform: "rotateZ(45deg)",
          transform: "translateZ(50px)",
        }}
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: -100 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, delay: 0.13 }}
      >
        <h1 className="text-xl font-semibold text-center">
          Look no further—Korvol has the complete e-commerce solution you’ve
          been searching for!
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

  return (
    <div
      ref={ref}
      className="min-h-screen py-12 flex flex-col items-center text-white space-y-8"
    >
      <motion.div>
        <h3 className="text-2xl md:text-3xl font-bold text-center">From</h3>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="flex flex-col items-center space-y-4"
      >
        <motion.img
          src="/assets/img/icon/shop.svg"
          alt="shop"
          className="w-20 h-20"
        />
        <motion.p className="text-white">Creating your online store</motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="flex flex-col items-center space-y-4"
      >
        <motion.h4 className="text-xl md:text-2xl font-semibold text-center">
          To
        </motion.h4>
        <motion.img
          src="/assets/img/icon/inventory.svg"
          alt="inventory"
          className="w-20 h-20"
        />
        <motion.p className="text-white">Setting up your inventory</motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="flex flex-col items-center space-y-4"
      >
        <motion.h4 className="text-xl md:text-2xl font-semibold text-center">
          To
        </motion.h4>
        <motion.img
          src="/assets/img/icon/payment.svg"
          alt="payment"
          className="w-20 h-20"
        />
        <motion.p className="text-white">Integrating payment gateway</motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="flex flex-col items-center space-y-4"
      >
        <motion.h4 className="text-xl md:text-2xl font-semibold text-center">
          To
        </motion.h4>
        <motion.img
          src="/assets/img/icon/delivery.svg"
          alt="delivery"
          className="w-20 h-20"
        />
        <motion.p className="text-white">Setting up your logistics</motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="flex flex-col items-center space-y-4"
      >
        <motion.h4 className="text-xl md:text-2xl font-semibold text-center">
          To
        </motion.h4>
        <motion.img
          src="/assets/img/icon/order.svg"
          alt="order"
          className="w-20 h-20"
        />
        <motion.p className="text-white">Order Management</motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="flex flex-col items-center space-y-4"
      >
        <motion.h4 className="text-xl md:text-2xl font-semibold text-center">
          To
        </motion.h4>
        <motion.img
          src="/assets/img/icon/customer-support.svg"
          alt="customer-support"
          className="w-20 h-20"
        />
        <motion.p className="text-white">Customer Support</motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="flex flex-col items-center space-y-4"
      >
        <motion.h4 className="text-xl md:text-2xl font-semibold text-center">
          To
        </motion.h4>
        <motion.img
          src="/assets/img/icon/ads.svg"
          alt="ads"
          className="w-20 h-20"
        />
        <motion.p className="text-white">
          Advertising your business digitally
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="flex flex-col items-center space-y-4"
      >
        <motion.h4 className="text-xl md:text-2xl font-semibold text-center">
          To
        </motion.h4>
        <motion.div className="grid grid-cols-2 grid-rows-2 gap-1">
          <motion.img
            src="/assets/img/icon/facebook.svg"
            alt="facebook"
            className="w-10 h-10"
          />
          <motion.img
            src="/assets/img/icon/instagram.svg"
            alt="instagram"
            className="w-10 h-10"
          />
          <motion.img
            src="/assets/img/icon/x.svg"
            alt="x"
            className="w-10 h-10"
          />
          <motion.img
            src="/assets/img/icon/linkedin.svg"
            alt="linkedin"
            className="w-10 h-10"
          />
        </motion.div>
        <motion.p className="text-white">Managing your social media</motion.p>
      </motion.div>
    </div>
  );
};

export default GettingStarted3;
