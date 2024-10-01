import { useInView } from "framer-motion";
import { FC, useRef } from "react";
import { motion } from "framer-motion";

const E2EServices: FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "0px 0px -100px 0px",
    once: true,
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
      description: "Managing your orders",
    },
    {
      title: "Customer Support",
      img: "/assets/img/icon/customer-support.svg",
      description: "Providing customer support",
    },
    {
      title: "Digital Advertising",
      img: "/assets/img/icon/seo.svg",
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
      className="min-h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center text-white space-y-8"
    >
      {isInView
        ? services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
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
                  className="w-20 "
                />
              )}
              <motion.p className="text-white">{service.description}</motion.p>
            </motion.div>
          ))
        : null}
    </div>
  );
};

export default E2EServices;
