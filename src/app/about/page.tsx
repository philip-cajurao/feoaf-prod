import { Metadata } from "next";
import React from "react";
import CompanyStory from "../components/CompanyStory";
import MissionVision from "../components/MissionVision";
import story from "../assets/latest_events/story.jpg";
import Image from "next/image";
import bg from "../assets/bg.png";

export const metadata: Metadata = {
  title: "About | Future Entrepreneurs Of America Foundation",
  description: "...",
};

export default function About() {
  return (
    <div className="flex flex-col relative overflow-x-hidden">
      <div className="card image-full h-72">
        <figure>
          <Image placeholder="blur" priority={true} alt="Test" src={story} />
        </figure>
        <div className="card-body flex justify-center items-center">
          <h2 className="card-title text-5xl font-bold">
            <div className="grid place-items-center">
              <div>
                <p className="font-bold text-2xl text-accent">Our</p>
                <h2 className="font-bold text-5xl ml-4">Story</h2>
              </div>
            </div>
          </h2>
        </div>
      </div>

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
