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
    <div className="flex flex-col relative overflow-x-hidden">
      <div className="card image-full h-72 mb-8">
        <figure>
          <Image placeholder="blur" priority={true} alt="Test" src={story} />
        </figure>
        <div className="card-body flex justify-center items-center">
          <h2 className="card-title text-5xl font-bold">Our Story</h2>
        </div>
      </div>

      <CompanyStory />

      <MissionVision />
    </div>
  );
}
