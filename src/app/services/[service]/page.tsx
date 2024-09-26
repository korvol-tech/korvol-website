"use client";

import { ServiceDetailsPage } from "@/page/service-details";

export default function Service({ params }: AppRouterProps) {
  return <ServiceDetailsPage id={params.service} />;
}
