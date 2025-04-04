import Image from 'next/image';
import flyer from "../assets/latest_events/flyer.png";
import React from 'react';

export default function SpringGala() {
  return (
    <div className="grid md:grid-cols-2 items-center h-full w-full">
        <div className="h-full flex flex-col justify-center p-10 bg-accent">
          <h2 className="font-bold text-4xl mb-4 text-primary-content dark:text-neutral-content">
            Spring Gala Event
          </h2>
          <p className="text-xl text-primary-content">
            Step into a night of innovation, creativity, and inspiration as we
            celebrate the bright minds shaping tomorrow. The Spring Gala 2025 is
            your opportunity to meet, connect, and support the next generation
            of trailblazing entrepreneurs. Get your ticket now!
          </p>
        </div>
        <div className="p-10 flex justify-center items-center">
          <div className="rounded-xl overflow-hidden dark:border-2">
            <Image
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
