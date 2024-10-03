import { FC } from "react";

const Header: FC = () => {
  return (
    <header className="flex items-center p-2 h-16 sticky top-0 z-50 !bg-dark">
      <div>
        <img src="/assets/img/logo/logo-dark.png" alt="logo" className="w-36" />
      </div>
    </header>
  );
};

export default Header;
