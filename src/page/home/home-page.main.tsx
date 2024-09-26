import { Scripts } from "@/page/Scripts";
import { FC } from "react";
import { Hero1 } from "../components/hero";
import { About3 } from "../components/about";
import { Service5 } from "../components/services";
import { WhyUs6 } from "../components/why-us";
import Client3 from "../components/clients/clients-3/clients-3";
import { Stats5 } from "../components/stats";
import { Contact2 } from "../components/contact";
import { Footer2 } from "../components/footer";
import { Header1 } from "../components/header";

const HomePage: FC = () => {
  return (
    <>
      {/* <div id="smooth-wrapper">
        <div className="smooth-content"> */}
      <Header1 />
      <Hero1 />
      <About3 />
      <Service5 />
      <WhyUs6 />
      <Client3 />
      <Stats5 />
      <Contact2 />
      <Footer2 />
      <Scripts />
      {/* </div>
      </div> */}
    </>
  );
};

export default HomePage;
