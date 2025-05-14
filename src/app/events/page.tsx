import { Metadata } from "next";
import React from "react";
import EventsBanner from "../components/banners/EventsBanner";
// import SpringGala from "../components/SpringGala";
import SummerBootCampImg from "../assets/events/summerBootCamp2025/summerBootCamp.png";
import SpringGalaImg from "../assets/events/springGala2025/springgala.png";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Events | Future Entrepreneurs Of America Foundation",
  description:
    "Discover exciting youth-focused events like our recent Spring Gala, where young entrepreneurs showcase their creativity and business ideas. The Future Entrepreneurs of America Foundation hosts inspiring gatherings that celebrate innovation, growth, and the power of the next generation.",
  icons: {
    icon: ["/logo.png", "/favicon.ico"],
  },
  facebook: {
    appId: "61573876332746",
  },
};

export default function Events() {
  return (
    <div className="flex flex-col justify-center relative">
      <EventsBanner />

      <div className="py-16 px-8 flex flex-wrap gap-10 justify-center">
        <div className="card bg-base-300 rounded-lg w-xl shadow-sm hover:shadow-xl hover:-translate-y-1 duration-300 p-8 transition-all">
          <figure>
            <Image
              src={SummerBootCampImg}
              className="w-sm rounded-lg border"
              alt="Summer Bootcamp Logo"
            />
          </figure>
          <div className="card-body px-0">
            <h2 className="card-title">Kids Summer Bootcamp</h2>
            <p>
              Listen and learn to successful entrepreneurs as they share their
              success stories.
            </p>
          </div>
          <p className="text-xs">
            <span className="badge badge-xs">Upcoming event</span>
          </p>
        </div>

        <div className="card bg-base-300 rounded-lg w-xl shadow-sm hover:shadow-xl hover:-translate-y-1 duration-300 p-8 transition-all">
          <figure>
            <Image
              src={SpringGalaImg}
              className="w-sm rounded-lg border"
              alt="Summer Bootcamp Logo"
            />
          </figure>
          <div className="card-body px-0">
            <h2 className="card-title">Spring Gala 2025</h2>
            <p>
              Step into a night of innovation, creativity, and inspiration as we
              celebrate the bright minds shaping tomorrow.
            </p>
          </div>
        </div>
      </div>

      {/* <SpringGala /> */}
    </div>
  );
}
