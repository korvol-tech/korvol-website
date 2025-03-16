import Image from "next/image";
import { FC, useState, useEffect } from "react";
import headerConfig from "./header.config";
import { motion } from "framer-motion";
import { routeConfig } from "@/router/route-config";
import clsx from "clsx";
import { isRouteActive } from "@/router/router-utils";

const Header: FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`w-full flex items-center px-4 lg:px-8 h-12 lg:h-16 fixed top-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-black" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center w-full">
        <a href="#hero-section">
          <img
            src="/assets/img/logo/logo-dark.png"
            alt="logo"
            className="w-40 lg:w-48"
          />
        </a>
        <NavDesktop />
        <NavMobile />
      </div>
    </header>
  );
};

const NavMobile: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile */}
      <div className="lg:hidden">
        <button onClick={() => setIsMenuOpen(true)}>
          <Image
            src="/assets/img/icon/ham.svg"
            alt="menu"
            height="32"
            width="32"
          />
        </button>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed top-0 left-0 w-full h-full bg-neutral-900 bg-opacity-90 flex flex-col z-10">
          <div className="relative flex justify-between items-center h-12 px-4 z-10">
            <div className="">
              <img
                src="/assets/img/logo/logo-dark.png"
                alt="logo"
                className="w-40 lg:w-48"
              />
            </div>
            <button onClick={() => setIsMenuOpen(false)}>
              <Image
                src="/assets/img/icon/cross.svg"
                alt="close-menu"
                height="32"
                width="32"
              />
            </button>
          </div>

          <div className="absolute top-0 left-0 flex flex-col gap-8 w-full h-full items-center justify-center">
            {headerConfig.navSequence.map((nav, index) => (
              <motion.a
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.15, delay: 0.25 + index * 0.1 }}
                key={index}
                href={routeConfig[nav].path}
                onClick={() => setIsMenuOpen(false)}
                className={clsx(
                  "text-xl",
                  isRouteActive(nav) &&
                    "border-b-4 font-semibold border-primary-500"
                )}
              >
                {nav}
              </motion.a>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

const NavDesktop: FC = () => {
  return (
    <div className="hidden lg:flex items-baseline gap-8">
      {headerConfig.navSequence.map((nav, index) => (
        <a
          key={index}
          href={routeConfig[nav].path}
          className={clsx(
            "text-md",
            isRouteActive(nav) && "border-b-4 font-semibold border-primary-500"
          )}
        >
          {nav}
        </a>
      ))}
    </div>
  );
};

export default Header;
