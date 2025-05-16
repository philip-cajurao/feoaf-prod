import Image from "next/image";
import event from "../../assets/latest_events/events.jpg";
import React from "react";

export default function EventsBanner() {
  return (
    <div className="relative overflow-hidden h-[250px]">
      <Image
        placeholder="blur"
        priority={true}
        alt="Test"
        src={event}
        fill
        className="object-cover object-[25%_35%] brightness-35 -z-10"
      />

      <div className="flex h-full justify-center items-center">
        <h2 className="text-5xl font-bold">
          <div className="grid place-items-center">
            <div>
              <p className="font-bold text-lg sm:text-2xl text-accent">Our</p>
              <h2 className="font-bold text-3xl sm:text-5xl ml-4 text-neutral-content">
                Events
              </h2>
            </div>
          </div>
        </h2>
      </div>
    </div>
  );
}
