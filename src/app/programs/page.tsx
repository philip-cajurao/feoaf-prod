import { Metadata } from "next";
import React from "react";
import ProgramsBanner from "../components/banners/ProgramsBanner";
import ServicesCard from "../components/ProgramsCard";

export const metadata: Metadata = {
  title: "Services | Future Entrepreneurs Of America Foundation",
  description: "...",
};

export default function Services() {
  return (
    <div className="relative overflow-hidden">
      <ProgramsBanner />

      <ServicesCard />
    </div>
  );
}
