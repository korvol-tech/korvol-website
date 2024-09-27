import globalConfig from "@/config/global-config";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { CSSProperties, FC } from "react";

const { brandName, logo, navLinks, address, contact, socialLinks, aboutUs } =
  globalConfig;

const Header1: FC = () => {
  return (
    <>
      <div />
      <div id="preloader">
        <div className="loading" data-loading-text={brandName}></div>
      </div>
      {/* header-area-start */}
      <header className="header sticky-active bg-red">
        <div className="primary-header">
          <div className="primary-header-inner">
            <div className="header-logo d-lg-block">
              <Link href={navLinks.get("home")?.href as string}>
                <Image
                  className="logo-dark"
                  src={logo.dark.src}
                  alt={logo.dark.alt}
                  width={150}
                  height={20.84}
                />
                <Image
                  className="logo-light"
                  src={logo.light.src}
                  alt={logo.light.alt}
                  width={150}
                  height={20.84}
                />
              </Link>
            </div>
            <div className="header-right-wrap">
              <div className="header-menu-wrap">
                <div className="mobile-menu-items">
                  <ul>
                    {Array.from(navLinks.values()).map((navLink) => (
                      <li
                        key={navLink.text}
                        className={clsx(
                          navLink.children && "menu-item-has-children"
                        )}
                      >
                        <Link href={navLink.href}>{navLink.text}</Link>
                        {navLink.children && (
                          <ul className="sub-menu">
                            {navLink.children.map((child) => (
                              <li key={child.text}>
                                <Link href={child.href}>{child.text}</Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* /.header-menu-wrap */}
              <div className="header-right">
                <div className="sidebar-icon">
                  <button className="sidebar-trigger open">
                    <svg
                      width="24"
                      height="23"
                      viewBox="0 0 24 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.300781 0H5.30078V5H0.300781V0Z"
                        fill="currentColor"
                      />
                      <path
                        d="M0.300781 9H5.30078V14H0.300781V9Z"
                        fill="currentColor"
                      />
                      <path
                        d="M0.300781 18H5.30078V23H0.300781V18Z"
                        fill="currentColor"
                      />
                      <path
                        d="M9.30078 0H14.3008V5H9.30078V0Z"
                        fill="currentColor"
                      />
                      <path
                        d="M9.30078 9H14.3008V14H9.30078V9Z"
                        fill="currentColor"
                      />
                      <path
                        d="M9.30078 18H14.3008V23H9.30078V18Z"
                        fill="currentColor"
                      />
                      <path
                        d="M18.3008 0H23.3008V5H18.3008V0Z"
                        fill="currentColor"
                      />
                      <path
                        d="M18.3008 9H23.3008V14H18.3008V9Z"
                        fill="currentColor"
                      />
                      <path
                        d="M18.3008 18H23.3008V23H18.3008V18Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              {/* /.header-right */}
            </div>
          </div>
          {/* /.primary-header-inner */}
        </div>
      </header>
      {/* /.Main Header */}
      <div id="popup-search-box">
        <div className="box-inner-wrap d-flex align-items-center">
          <form id="form" action="#" method="get" role="search">
            <input
              id="popup-search"
              type="text"
              name="s"
              placeholder="Type keywords here..."
            />
          </form>
          <div className="search-close">
            <i className="fa-sharp fa-regular fa-xmark"></i>
          </div>
        </div>
      </div>
      {/* /#popup-search-box */}
      <div className="mobile-side-menu">
        <div className="side-menu-content">
          <div className="side-menu-head">
            <Link href={navLinks.get("home")?.href as string}>
              <Image
                src={logo.dark.src}
                alt={logo.dark.alt}
                width={150}
                height={20.84}
              />
            </Link>
            <button className="mobile-side-menu-close">
              <i className="fa-regular fa-xmark"></i>
            </button>
          </div>
          <div className="side-menu-wrap"></div>
          <ul className="side-menu-list">
            <li>
              <i className="fa-light fa-location-dot"></i>Address :{" "}
              <span>Amsterdam, 109-74</span>
            </li>
            <li>
              <i className="fa-light fa-phone"></i>Phone :{" "}
              <Link href="tel:+01569896654">+01 569 896 654</Link>
            </li>
            <li>
              <i className="fa-light fa-envelope"></i>Email :{" "}
              <Link href="mailto:info@example.com">info@example.com</Link>
            </li>
          </ul>
        </div>
      </div>
      {/* /.mobile-side-menu */}
      <div className="mobile-side-menu-overlay"></div>

      {/* ./ preloader */}
      <div id="sidebar-area" className="sidebar-area">
        <button className="sidebar-trigger close">
          <svg
            className="sidebar-close"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="16px"
            height="12.7px"
            viewBox="0 0 16 12.7"
            style={
              {
                enableBackground: " new 0 0 16 12.7",
              } as CSSProperties
            }
            xmlSpace="preserve"
          >
            <g>
              <rect
                x="0"
                y="5.4"
                transform="matrix(0.7071 -0.7071 0.7071 0.7071 -2.1569 7.5208)"
                width="16"
                height="2"
              ></rect>
              <rect
                x="0"
                y="5.4"
                transform="matrix(0.7071 0.7071 -0.7071 0.7071 6.8431 -3.7929)"
                width="16"
                height="2"
              ></rect>
            </g>
          </svg>
        </button>
        <div className="side-menu-content">
          <div className="side-menu-logo">
            <Link
              className="dark-img"
              href={navLinks.get("home")?.href as string}
            >
              <Image
                src={logo.dark.src}
                alt={logo.dark.alt}
                width={150}
                height={20.84}
              />
            </Link>
            <Link
              className="light-img"
              href={navLinks.get("home")?.href as string}
            >
              <Image
                src={logo.light.src}
                alt={logo.light.alt}
                width={150}
                height={20.84}
              />
            </Link>
          </div>
          <div className="side-menu-wrap"></div>
          <div className="side-menu-about">
            <div className="side-menu-header">
              <h3>{aboutUs.title}</h3>
            </div>
            <p>{aboutUs.content}</p>
            <Link
              href={navLinks.get("contact")?.href as string}
              className="rr-primary-btn"
            >
              Contact Us
            </Link>
          </div>
          <div className="side-menu-contact">
            <div className="side-menu-header">
              <h3>Contact Us</h3>
            </div>
            <ul className="side-menu-list">
              <li className="flex !items-start">
                <i className="fas fa-map-marker-alt"></i>
                <p>
                  {address.building}
                  <br />
                  {address.street}, {address.area}
                  <br />
                  {address.district}, {address.city} - {address.zip}
                </p>
              </li>
              <li>
                <i className="fas fa-phone"></i>
                <Link href={`tel:${contact.phone.replaceAll(/\s/g, "")}`}>
                  {contact.phone}
                </Link>
              </li>
              <li>
                <i className="fas fa-envelope-open-text"></i>
                <Link href={`mailto:${contact.email}`}>{contact.email}</Link>
              </li>
            </ul>
          </div>
          <ul className="side-menu-social">
            <li className="facebook">
              <Link href={socialLinks.facebook}>
                <i className="fab fa-facebook-f"></i>
              </Link>
            </li>
            <li className="instagram">
              <Link href={socialLinks.instagram}>
                <i className="fab fa-instagram"></i>
              </Link>
            </li>
            <li className="twitter">
              <Link href={socialLinks.twitter}>
                <i className="fab fa-twitter"></i>
              </Link>
            </li>
            <li className="linkedin">
              <Link href={socialLinks.linkedin}>
                <i className="fab fa-linkedin-in"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/*/.sidebar-area*/}
    </>
  );
};

export default Header1;
