"use client";

import { HomeLanding } from "@/page/home-landing";
import GoogleAnalytics from "@/page/home-landing/scripts/google-analytics";
import MetaPixel from "@/page/home-landing/scripts/meta-pixel";

export default function Home() {
  return (
    <>
      <HomeLanding />;
      <GoogleAnalytics />
      <MetaPixel />
    </>
  );
}
