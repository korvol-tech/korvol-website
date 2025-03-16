export enum RouteNames {
  home = "Home",
  services = "Services",
  industries = "Industries",
  portfolio = "Portfolio",
  pricing = "Pricing",
  about = "About",
  contact = "Contact",
}
export const routeConfig = {
  [RouteNames.home]: {
    path: "/",
  },
  [RouteNames.services]: {
    path: "/services",
  },
  [RouteNames.industries]: {
    path: "/industries",
  },
  [RouteNames.portfolio]: {
    path: "/portfolio",
  },
  [RouteNames.pricing]: {
    path: "/pricing",
  },
  [RouteNames.about]: {
    path: "/about",
  },
  [RouteNames.contact]: {
    path: "/contact",
  },
};
