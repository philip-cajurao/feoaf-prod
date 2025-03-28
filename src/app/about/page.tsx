import { Metadata } from "next";
import React from "react";
import CompanyStory from "../components/CompanyStory";
import MissionVision from "../components/MissionVision";
import story from "../assets/latest_events/story.jpg";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About | Future Entrepreneurs Of America Foundation",
  description: "...",
};

export default function About() {
  return (
    <div className="my-24 flex flex-col">
      <div className="flex justify-center mb-8">
        <Image
          alt="Test"
          src={story}
          className="h-full w-auto object-cover max-w-xl rounded-lg"
        />
      </div>
      <CompanyStory />

      <MissionVision />
    </div>
  );
}
