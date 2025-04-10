import { Metadata } from "next";
import React from "react";
import CompanyStory from "../components/CompanyStory";
import MissionVision from "../components/MissionVision";
import Image from "next/image";
import bg from "../assets/bg.png";
import StoryBanner from "../components/banners/StoryBanner";

export const metadata: Metadata = {
  title: "About | Future Entrepreneurs Of America Foundation",
  description: "...",
};

export default function About() {
  return (
    <div className="flex flex-col relative overflow-x-hidden">
      <StoryBanner />

      <div className="relative overflow-hidden pt-8">
        <Image
          src={bg}
          alt="bg"
          className="absolute -z-50 h-fit -left-70 top-0 hidden lg:block"
        />
        <Image
          src={bg}
          alt="bg"
          className="absolute perspective-distant -z-50 h-fit -right-90 top-0 hidden lg:block"
        />

          <CompanyStory />

          <MissionVision />
      </div>
    </div>
  );
}
