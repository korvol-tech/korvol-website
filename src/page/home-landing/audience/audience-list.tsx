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
      title: "Established businesses looking to scale",
      img: "/assets/img/images/corporation.svg",
      description:
        "For companies with a solid foundation seeking to expand their reach and increase revenue",
    },
    {
      title: "Small businesses transitioning to online sales",
      img: "/assets/img/images/small-store.svg",
      description:
        "For local shops and traditional businesses ready to expand their customer base",
    },
    {
      title: "Individuals starting their first business online",
      img: "/assets/img/images/rocket-2.svg",
      description:
        "For aspiring entrepreneurs and innovators ready to launch their first online venture",
      className:
        "md:col-span-2 md:justify-self-center md:max-w-[calc(100%-2rem)]",
    },
  ];

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 md:grid-cols-2 items-center text-white gap-16 md:gap-20"
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
                <motion.div className="md:min-h-[150px] flex justify-center items-end">
                  <motion.img
                    src={service.img}
                    alt={service.title}
                    className="w-20 "
                  />
                </motion.div>
              )}
              <div className="flex flex-col text-left md:text-center">
                <motion.p className="text-white font-semibold text-xl md:text-2xl mb-2 ">
                  {service.title}
                </motion.p>
                <motion.p className="text-white text-lg">
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
