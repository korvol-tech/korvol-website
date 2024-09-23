import { Header } from "@/components";
import { Scripts } from "@/components/Scripts";
import { FC } from "react";
import { Hero1 } from "../components/hero";
import { About3 } from "../components/about";
import { Service5 } from "../components/services";
import { WhyUs6 } from "../components/why-us";
import Client3 from "../components/clients/clients-3/clients-3";
import { Stats5 } from "../components/stats";
import { Contact2 } from "../components/contact";
import { Footer2 } from "../components/footer";

const HomePage: FC = () => {
  return (
    <>
      {/* <div id="smooth-wrapper"> */}
      {/* <div className="smooth-content"> */}
      <Header />
      <Hero1 />
      <About3 />
      <Service5 />
      <WhyUs6 />
      <Client3 />
      <Stats5 />
      <Scripts />
      <Contact2 />
      <Footer2 />
      {/* </div> */}
      {/* </div> */}
    </>
  );
};

export default HomePage;
