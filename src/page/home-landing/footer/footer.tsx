import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="container py-8 border-t border-secondary">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-2 items-center md:items-start">
          <img
            src="/assets/img/logo/logo-dark.png"
            alt="logo"
            className="w-28"
          />
          <p className="text-sm">
            <em>Your E-commerce Partner</em>
          </p>
        </div>
        {/* <div className="flex md:justify-end">
          <button className="!px-2 !py-2 w-full md:w-fit !bg-secondary !text-white">
            Book Your Consultation Now
          </button>
        </div> */}
        <div className="flex flex-col items:center md:items-start">
          {/* <a className="text-center md:text-end" href="tel:+919316896458">
            +91 93168 96458
          </a> */}
          <a
            className="text-center md:text-start"
            href="mailto:contact@korvol.com"
          >
            contact@korvol.com
          </a>
        </div>
        <div className="flex flex-col gap-4 items-center md:items-end">
          <div className="flex justify-end gap-4">
            <img
              src="/assets/img/icon/facebook.svg"
              alt="facebook"
              className="w-4 h-4"
            />
            <img src="/assets/img/icon/x.svg" alt="x" className="w-4 h-4" />
            <img
              src="/assets/img/icon/instagram.svg"
              alt="instagram"
              className="w-4 h-4"
            />
          </div>

          {/* Copyright */}
        </div>
        <div className="md:col-span-2 flex flex-col gap-2 md:w-full">
          <div className="border-t border-secondary h-1 w-full"></div>
          <p className="text-sm text-center md:text-end">
            &copy; {new Date().getFullYear()} Korvol. All rights reserved.
          </p>
        </div>
      </div>
      {/* <div className="grid grid-cols-9 grid-rows-5">
        <div className="row-span-1 col-start-1 col-end-4">
          <img src="/assets/img/logo/logo-dark.png" alt="logo" />
        </div>
        <div className="row-span-1 col-start-1 col-end-6">
          <em>Enabling Business Online</em>
        </div>
        <div className="row-start-1 row-end-1 col-start-6 col-end-10 flex gap-3 items-center justify-end">
          <img
            src="/assets/img/icon/facebook.svg"
            alt="facebook"
            className="w-4"
          />
          <img src="/assets/img/icon/x.svg" alt="x" className="w-4" />
          <img
            src="/assets/img/icon/instagram.svg"
            alt="instagram"
            className="w-4"
          />
        </div>
        <div className="row-start-3 row-end-4 col-start-1 col-end-6">
          <CTAButton>Get Started</CTAButton>
        </div>
      </div> */}
    </footer>
  );
};

export default Footer;
