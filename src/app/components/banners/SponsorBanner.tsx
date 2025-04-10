import React from "react";
import Image from "next/image";
import services from "../../assets/latest_events/bgsponsor.jpg";

export default function SponsorBanner() {
  return (
    <div className="relative overflow-hidden h-[250px]">
      <Image
        placeholder="blur"
        priority={true}
        alt="Test"
        src={services}
        fill
        className="object-cover object-center brightness-35 -z-10"
      />

      <div className="flex h-full justify-center items-center">
        <h2 className="text-5xl font-bold">
          <div className="grid place-items-center">
            <div>
              <p className="font-bold text-2xl text-accent">Our</p>
              <h2 className="font-bold text-5xl ml-4 text-neutral-content">
                Sponsors
              </h2>
            </div>
          </div>
        </h2>
      </div>
    </div>
  );
}
