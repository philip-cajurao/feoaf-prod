import { Metadata } from "next";
import React from "react";
import ServicesBanner from "../components/banners/ServicesBanner";
import ServicesCard from "../components/ServicesCard";

export const metadata: Metadata = {
  title: "Services | Future Entrepreneurs Of America Foundation",
  description: "...",
};

export default function Services() {
  return (
    <div className="relative overflow-hidden">
      <ServicesBanner />

      <ServicesCard />
    </div>
  );
}
