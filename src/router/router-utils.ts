import { routeConfig, RouteNames } from "./route-config";

export const isRouteActive = (routeName: RouteNames) => {
  return window.location.pathname === routeConfig[routeName].path;
};
