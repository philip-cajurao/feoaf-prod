import { Metadata } from "next";
import React from "react";
import flyer from "../assets/latest_events/flyer.png";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Events | Future Entrepreneurs Of America Foundation",
  description: "...",
};

export default function Events() {
  return (
    <div className="flex justify-center h-full">
      <div className="grid md:grid-cols-2 items-center w-full">
        <div className="h-full flex flex-col justify-center p-10 bg-accent">
          <h2 className="font-bold text-4xl mb-4 p-2 text-primary-content">
            Spring Gala Event
          </h2>
          <p className="text-xl">
            Step into a night of innovation, creativity, and inspiration as we
            celebrate the bright minds shaping tomorrow. The Spring Gala 2025 is
            your opportunity to meet, connect, and support the next generation
            of trailblazing entrepreneurs. Get your ticket now!
          </p>
        </div>
        <div className="p-10 flex justify-center items-center">
          <Image
            className="rounded-xl border"
            alt="alt img to be put"
            placeholder="blur"
            src={flyer}
            height={400}
            width={400}
          />
        </div>
      </div>
    </div>
  );
}
