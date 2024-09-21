import { useEffect, useState } from "react";

export default function Scripts() {
  const [scriptsLoaded, setScriptsLoaded] = useState(false);

  const scriptByOrder = [
    "/assets/js/vendor/jquary-3.6.0.min.js",
    "/assets/js/vendor/bootstrap-bundle.js",
    "/assets/js/vendor/imagesloaded-pkgd.js",
    "/assets/js/vendor/waypoints.min.js",
    "/assets/js/vendor/venobox.min.js",
    "/assets/js/vendor/odometer.min.js",
    "/assets/js/vendor/meanmenu.js",
    "/assets/js/vendor/jquery.isotope.js",
    "/assets/js/vendor/wow.min.js",
    "/assets/js/vendor/swiper.min.js",
    "/assets/js/vendor/split-type.min.js",
    "/assets/js/vendor/gsap.min.js",
    "/assets/js/vendor/scroll-smoother.js",
    "/assets/js/vendor/scroll-trigger.min.js",
    "/assets/js/vendor/jquery.carouselTicker.js",
    "/assets/js/vendor/nice-select.js",
    "/assets/js/ajax-form.js",
    "/assets/js/contact.js",
    "/assets/js/main.js",
  ];

  useEffect(() => {
    if (!scriptsLoaded) {
      const promiseChain = (src: string) => {
        return new Promise<void>((resolve) => {
          const script = document.createElement("script");
          script.src = src;
          script.async = true;

          script.onload = () => {
            resolve();
          };

          document.body.appendChild(script);
        });
      };

      const chainPromise = scriptByOrder.reduce((chain, src) => {
        const allScripts = document.querySelectorAll("script");
        let isExist = false;

        allScripts.forEach((script) => {
          if (script.src === src) {
            isExist = true;
          }
        });

        if (isExist) {
          return chain;
        }

        return chain.then(() => {
          return promiseChain(src);
        });
      }, Promise.resolve());

      chainPromise.then(() => {
        console.log("All scripts loaded");
        setScriptsLoaded(true);
      });
    }

    return () => {
      const allScripts = document.querySelectorAll("script");

      allScripts.forEach((script) => {
        if (script.src.includes("/assets/js/")) {
          console.log("removing, here");
          script.remove();
        }
      });
    };
  }, []);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const $ = (window as any).$;
    if ($) {
      console.log("jQuery is loaded");
      $(document).ready(function () {
        console.log("Document is ready");
      });

      $(window).on("load", function () {
        console.log("Window is loaded");
      });
    }
  }, [scriptsLoaded]);

  return null;
}
