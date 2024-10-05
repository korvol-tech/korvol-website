import { FC } from "react";

const Header: FC = () => {
  return (
    <header
      className={`w-full flex items-center px-2 md:px-8 h-16 fixed top-0 z-50 transition-colors duration-300"bg-black" 
      `}
    >
      <a href="#hero-section">
        <img
          src="/assets/img/logo/logo-dark.png"
          alt="logo"
          className="w-40 md:w-48"
        />
      </a>
    </header>
  );
};

export default Header;
