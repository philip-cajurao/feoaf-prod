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

      <div>
        <svg
          className="absolute w-52 -z-50"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="rgba(248, 40, 52, 1)"
            d="M1.2,3.9C-5.9,13.1,-24.5,19,-26.6,12.7C-28.7,6.3,-14.4,-12.2,-5.1,-15.2C4.2,-18.1,8.4,-5.4,1.2,3.9Z"
            width="100%"
            height="100%"
            transform="translate(50 50)"
            strokeWidth="0"
            stroke="rgba(248, 40, 52, 1)"
          ></path>
        </svg>

        <svg
          className="absolute w-52 -z-50 left-70 top-5"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="rgba(248, 40, 52, 1)"
            d="M17.1,-17.4C21.9,-12.4,25.1,-6.2,22.6,-2.5C20.1,1.2,11.8,2.4,7.1,7.3C2.4,12.2,1.2,20.8,-2.2,22.9C-5.5,25.1,-11,20.8,-13.2,15.9C-15.3,11,-14.1,5.5,-14.5,-0.5C-15,-6.5,-17.2,-12.9,-15.1,-17.9C-12.9,-23,-6.5,-26.5,-0.1,-26.4C6.2,-26.2,12.4,-22.4,17.1,-17.4Z"
            width="100%"
            height="100%"
            transform="translate(50 50)"
            strokeWidth="0"
            stroke="rgba(248, 40, 52, 1)"
          ></path>
        </svg>

        <svg
          className="absolute w-52 -z-50 left-20 top-50"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="fill-success"
            d="M24.6,-33.8C31.9,-33.6,37.8,-26.8,36.3,-19.6C34.8,-12.5,26,-5,24.5,3.4C23,11.7,28.9,20.9,27.6,25.6C26.2,30.2,17.6,30.3,10.2,30.4C2.9,30.4,-3,30.6,-7.7,28.3C-12.4,26,-15.8,21.3,-18,16.8C-20.2,12.2,-21.3,7.7,-24.3,2.1C-27.4,-3.6,-32.5,-10.4,-32.8,-17.3C-33.2,-24.1,-28.8,-31.1,-22.6,-31.7C-16.3,-32.3,-8.2,-26.6,0.3,-27C8.7,-27.4,17.3,-33.9,24.6,-33.8Z"
            width="100%"
            height="100%"
            transform="translate(50 50)"
            strokeWidth="0"
            stroke="rgba(248, 40, 52, 1)"
          ></path>
        </svg>

        <svg
          className="absolute w-52 -z-50 bottom-0 right-5"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="rgba(248, 40, 52, 1)"
            d="M1.2,3.9C-5.9,13.1,-24.5,19,-26.6,12.7C-28.7,6.3,-14.4,-12.2,-5.1,-15.2C4.2,-18.1,8.4,-5.4,1.2,3.9Z"
            width="100%"
            height="100%"
            transform="translate(50 50)"
            strokeWidth="0"
            stroke="rgba(248, 40, 52, 1)"
          ></path>
        </svg>

        <svg
          className="absolute w-20 md:w-52 -z-50 left-20 bottom-90"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="fill-accent"
            d="M17.1,-17.4C21.9,-12.4,25.1,-6.2,22.6,-2.5C20.1,1.2,11.8,2.4,7.1,7.3C2.4,12.2,1.2,20.8,-2.2,22.9C-5.5,25.1,-11,20.8,-13.2,15.9C-15.3,11,-14.1,5.5,-14.5,-0.5C-15,-6.5,-17.2,-12.9,-15.1,-17.9C-12.9,-23,-6.5,-26.5,-0.1,-26.4C6.2,-26.2,12.4,-22.4,17.1,-17.4Z"
            width="100%"
            height="100%"
            transform="translate(50 50)"
            strokeWidth="0"
            stroke="rgba(248, 40, 52, 1)"
          ></path>
        </svg>

        <svg
          className="absolute w-20 md:w-52 -z-50 right-20 bottom-50"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="fill-primary"
            d="M24.6,-33.8C31.9,-33.6,37.8,-26.8,36.3,-19.6C34.8,-12.5,26,-5,24.5,3.4C23,11.7,28.9,20.9,27.6,25.6C26.2,30.2,17.6,30.3,10.2,30.4C2.9,30.4,-3,30.6,-7.7,28.3C-12.4,26,-15.8,21.3,-18,16.8C-20.2,12.2,-21.3,7.7,-24.3,2.1C-27.4,-3.6,-32.5,-10.4,-32.8,-17.3C-33.2,-24.1,-28.8,-31.1,-22.6,-31.7C-16.3,-32.3,-8.2,-26.6,0.3,-27C8.7,-27.4,17.3,-33.9,24.6,-33.8Z"
            width="100%"
            height="100%"
            transform="translate(50 50)"
            strokeWidth="0"
            stroke="rgba(248, 40, 52, 1)"
          ></path>{" "}
        </svg>
      </div>
      <CompanyStory />

      <MissionVision />
    </div>
  );
}
