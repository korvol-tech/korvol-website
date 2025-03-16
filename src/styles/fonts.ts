// src/fonts/roboto.js
import { Roboto } from "next/font/google";

export const roboto = Roboto({
  weight: "400", // or any desired weight
  subsets: ["latin"], // or any other desired subsets
  variable: "--font-roboto", // optional, for using with tailwind
  style: "normal",
});
