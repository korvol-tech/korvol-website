import { Header } from "@/components";
import { Scripts } from "@/components/Scripts";
import { FC } from "react";
import { Hero1 } from "../components/hero";

const HomePage: FC = () => {
  return (
    <>
      <Header />
      <Hero1 />
      <Scripts />
    </>
  );
};

export default HomePage;
