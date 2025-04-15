import { Metadata } from "next";
import React from "react";
import ProgramsBanner from "../components/banners/ProgramsBanner";
import ServicesCard from "../components/ProgramsCard";

export const metadata: Metadata = {
  title: "Services | Future Entrepreneurs Of America Foundation",
  description:
    "The Future Entrepreneurs of America Foundation offers engaging, age-appropriate business programs for youth ages 9–17. From Advertisements 101 and Product Ideation to Social Media Madness and Marketing 101, each program is designed to spark creativity, build entrepreneurial skills, and inspire the next generation of business leaders through real-world, hands-on learning.",
  icons: {
    icon: ["./favicon.ico"],
  },
  facebook: {
    appId: "61573876332746",
  },
};

export default function Services() {
  return (
    <div className="flex flex-col justify-center">
      <ProgramsBanner />

      <ServicesCard />
    </div>
  );
}
