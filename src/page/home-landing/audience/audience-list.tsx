import { useInView } from "framer-motion";
import { FC, useRef } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

const AudienceList: FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "0px 0px -100px 0px",
    once: true,
  });

  const services = [
    {
      title: "Established businesses looking to scale.",
      img: "/assets/img/images/corporation.svg",
      description: "Creating your online store",
    },
    {
      title: "Small businesses transitioning to online sales.",
      img: "/assets/img/images/small-store.svg",
      description: "Setting up your inventory",
    },
    {
      title: "Individuals starting their first business online.",
      img: "/assets/img/images/rocket-2.svg",
      description: "Integrating payment gateway",
      className: "md:col-span-2",
    },
  ];

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 lg:grid-cols-2 items-center text-white lg:gap-y-40"
    >
      {isInView
        ? services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
              className={clsx(
                "flex flex-col items-center gap-4",
                service.className
              )}
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
                  className="w-20 "
                />
              )}
              <div className="flex flex-col items-center">
                <motion.p className="text-white font-semibold">
                  {service.title}
                </motion.p>
                <motion.p className="text-white">
                  {service.description}
                </motion.p>
              </div>
            </motion.div>
          ))
        : null}
    </div>
  );
};

export default AudienceList;
