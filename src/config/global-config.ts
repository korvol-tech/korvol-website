const brandName = "Korvol";
const tagLine = "Enabling Business Online";

const logo = {
  dark: {
    src: "/assets/img/logo/logo-dark.png",
    alt: "Logo",
  },
  light: {
    src: "/assets/img/logo/logo-light.png",
    alt: "Logo",
  },
};

const navLinks = (() => {
  const links = new Map<
    "home" | "services" | "contact" | "about",
    {
      href: string;
      text: string;
      children?: {
        href: string;
        text: string;
      }[];
    }
  >();
  links.set("home", {
    href: "/",
    text: "Home",
  });
  links.set("services", {
    href: "/services",
    text: "Services",
    children: [
      {
        href: "/services/e-commerce",
        text: "E-Commerce",
      },
      {
        href: "/services/digital-marketing",
        text: "Digital Marketing",
      },
    ],
  });
  links.set("contact", {
    href: "/contact",
    text: "Contact",
  });
  links.set("about", {
    href: "/about",
    text: "About",
  });

  return links;
})();

const address = {
  receipient: "Korvol",
  building: "103 Aadhesh Apartments",
  street: "Vapi-Daman Road",
  area: "Khariwad",
  landmark: "Tejas Homes",
  district: "Nani Daman",
  city: "Daman",
  state: "Dadra and Nagar Haveli and Daman and Diu",
  zip: "396210",
};

const contact = {
  email: "contact@korvol.com",
  phone: "+91 93168 96458",
};

const aboutUs = {
  title: "About Us",
  content:
    "Korvol is an E-commerce service provider and digital marketing agency in Daman, India, that helps businesses grow online. We provide complete e-commerce solutions and digital marketing services to help businesses grow online.",
};

const socialLinks = {
  facebook: "https://www.facebook.com/korvolorg",
  twitter: "https://www.twitter.com/korvol",
  linkedin: "https://www.linkedin.com/korvol",
  instagram: "https://www.instagram.com/korvol",
};

const globalConfig = {
  tagLine,
  brandName,
  logo,
  navLinks,
  address,
  contact,
  socialLinks,
  aboutUs,
};

export default globalConfig;
