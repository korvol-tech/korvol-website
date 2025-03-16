import { FC, useState, useEffect } from "react";

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
        {/* Desktop */}
        <div className="hidden md:flex items-center gap-4">
          {/* <motion.button
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
          </motion.button> */}
        </div>
        {/* Mobile */}
        <div className="md:hidden">
          <button>
            <img src="/assets/img/icons/menu.svg" alt="menu" />
          </button>
        </div>
        <div className="md:hidden"></div>
      </div>
    </header>
  );
};

export default Header;
