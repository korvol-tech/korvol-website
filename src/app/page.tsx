"use client";

import { HomeLanding } from "@/page/home-landing";
import GoogleAnalytics from "@/page/home-landing/scripts/google-analytics";

export default function Home() {
  return (
    <>
      <HomeLanding />;
      <GoogleAnalytics />
    </>
  );
}
