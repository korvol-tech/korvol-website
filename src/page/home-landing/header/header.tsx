import { FC, useState, useEffect, MouseEventHandler } from "react";
import { motion } from "framer-motion";

const Header: FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const triggerAnchorOnClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.currentTarget.querySelector("a")?.click();
  };

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
      className={`w-full flex items-center px-2 md:px-8 h-12 md:h-16 fixed top-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-black" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center w-full">
        <a href="#hero-section">
          <img
            src="/assets/img/logo/logo-dark.png"
            alt="logo"
            className="w-40 md:w-48"
          />
        </a>
        <div className="hidden md:flex items-center gap-4">
          <motion.button
            className="bg-primary text-white rounded-md p-2 font-bold"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
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
            <a
              id="book"
              href="https://calendly.com/nawaaz-korvol/30min"
              target="_blank"
            >
              Book a Consultation Now
            </a>
          </motion.button>
          <motion.button
            className="bg-secondary text-white rounded-md p-2 font-bold"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
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
            <a id="call" href="tel:+9316896458">
              Call Us Now
            </a>
          </motion.button>

          <motion.button
            className="border border-solid border-primary text-white rounded-md p-2 font-bold"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
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
            <a
              id="call"
              href="https://wa.me/message/YQ45OANXCSWSB1"
              target="_blank"
            >
              Message us
            </a>
          </motion.button>
        </div>
      </div>
    </header>
  );
};

export default Header;
