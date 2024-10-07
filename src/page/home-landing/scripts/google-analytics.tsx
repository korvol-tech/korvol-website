import { FC } from "react";

const GoogleAnalytics: FC = () => {
  return (
    <>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-KJ44Y3BREF"
      ></script>
      <script>
        {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-KJ44Y3BREF');
        `}
      </script>
    </>
  );
};

export default GoogleAnalytics;
