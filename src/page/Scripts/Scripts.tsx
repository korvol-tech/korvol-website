import { useEffect } from "react";

export default function Scripts() {
  const scriptByOrder = [
    "/assets/js/vendor/jquary-3.6.0.min.js",
    "/assets/js/vendor/jquery.isotope.js",
    "/assets/js/vendor/bootstrap-bundle.js",
    "/assets/js/vendor/imagesloaded-pkgd.js",
    "/assets/js/vendor/waypoints.min.js",
    "/assets/js/vendor/venobox.min.js",
    "/assets/js/vendor/odometer.min.js",
    "/assets/js/vendor/meanmenu.js",
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
    const promiseChain = (src: string) => {
      return new Promise<void>((resolve) => {
        if (document.querySelector(`script[src="${src}"]`)) {
          resolve();
          return;
        }

        const script = document.createElement("script");
        script.src = src;
        script.async = true;

        script.onload = () => {
          resolve();
        };

        document.body.appendChild(script);
      });
    };

    scriptByOrder.reduce((chain, src) => {
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

    scriptByOrder.reduce(async (chain, src) => {
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

      await chain;
      return await promiseChain(src);
    }, Promise.resolve());

    return () => {
      scriptByOrder.forEach((src) => {
        const script = document.querySelector(`script[src="${src}"]`);
        script?.remove();
      });
    };
  }, []);

  // useEffect(() => {
  //   const scripts: HTMLScriptElement[] = [];

  //   scriptByOrder.forEach((src) => {
  //     const script = document.createElement("script");
  //     script.src = src;
  //     script.async = true;

  //     document.body.appendChild(script);
  //     scripts.push(script);
  //   });

  //   return () => {
  //     scripts.forEach((script) => {
  //       script.remove();
  //     });
  //   };
  // }, []);

  return null;
}
