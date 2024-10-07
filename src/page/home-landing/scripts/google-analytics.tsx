import { FC } from "react";

const GoogleAnalytics: FC = () => {
  return (
    <>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-E8GH103CF1"
      ></script>
      <script>
        {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-E8GH103CF1');`}
      </script>
    </>
  );
};

export default GoogleAnalytics;
