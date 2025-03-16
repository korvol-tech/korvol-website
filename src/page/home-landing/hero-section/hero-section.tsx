import { FC, useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./hero-section.css";

const HeroSection: FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.5, once: true });

  return (
    <div
      id="hero-section"
      className="h-screen bg-gray-900 text-white flex items-center justify-center"
    >
      <div
        ref={sectionRef}
        className="container flex flex-col gap-8 items-center text-center px-6"
      >
        <motion.div
          className=""
          initial={{ y: -100, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="flex flex-col gap-4 text-3xl md:text-6xl font-extrabold leading-tight">
            AI-Powered Website & Software Solutions for Businesses
            {/* <div className="flex justify-center">
              <img
                src="/assets/img/logo/logo-dark.png"
                alt="logo"
                className="w-[240px] md:w-[360px]"
              />
            </div> */}
          </h1>
        </motion.div>

        <motion.div
          className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl"
          initial={{ y: 100, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          We build high-performance websites, AI-powered applications, and
          custom digital solutions to help businesses grow.
        </motion.div>

        <motion.div
          className="mt-6 flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-5"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={
            isInView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }
          }
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
        >
          <a
            href="#"
            className="bg-primary-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition h-fit"
          >
            Get a Free Quote
          </a>
          <a
            href="#"
            className="bg-secondary-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition"
          >
            See Our Services
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;

// import { FC, useRef } from "react";
// import { motion, useInView } from "framer-motion";
// import "./hero-section.css";

// const HeroSection: FC = () => {
//   const sectionRef = useRef(null);
//   const isInView = useInView(sectionRef, { amount: 0.5, once: true });

//   return (
//     <div id="hero-section" className="h-screen">
//       <div
//         ref={sectionRef}
//         className="container flex flex-col gap-12 items-center justify-center h-full"
//       >
//         <motion.div
//           className="flex flex-col gap-4 text-4xl md:text-5xl lg:text-6xl font-bold text-center"
//           initial={{ y: -100, opacity: 0 }}
//           animate={isInView ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//         >
//           <h1 className="flex flex-col gap-4">
//           AI-Powered Website & Software Solutions for Businesses
//             <div className="flex justify-center">
//               <img
//                 src="/assets/img/logo/logo-dark.png"
//                 alt="logo"
//                 className="w-[240px] md:w-[360px]"
//               />
//             </div>
//           </h1>
//         </motion.div>
//         <motion.div
//           className="flex flex-col gap-2 text-xl md:text-2xl lg:text-3xl text-center"
//           initial={{ y: 100, opacity: 0 }}
//           animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
//         >
//           <h3>
//             <span>
//             We build high-performance websites, AI-powered applications, and custom digital solutions to help businesses grow.
//             </span>{" "}
//             {/* <span>
//               Expand your reach with our complete e-commerce solution.
//             </span> */}
//           </h3>
//         </motion.div>

//         <motion.div
//           initial={{ scale: 0.5, opacity: 0 }}
//           animate={
//             isInView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }
//           }
//           transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
//         >
//           <a href="#problem-and-opportunity">
//             <button className="h-fit bg-primary text-white rounded-md px-12 py-4 w-full md:w-fit font-bold text-xl">
//               Get a Free Quote
//             </button>
//             <button className="h-fit bg-primary text-white rounded-md px-12 py-4 w-full md:w-fit font-bold text-xl">
//               See our Services
//             </button>
//           </a>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;
