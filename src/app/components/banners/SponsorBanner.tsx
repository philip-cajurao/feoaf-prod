import React from "react";
// import Image from "next/image";
// import services from "../../assets/latest_events/bgsponsor.jpg";

export default function SponsorBanner() {
  return (
    <div className="relative overflow-hidden h-[150px] sm:h-[200px] flex justify-center items-center bg-neutral z-0">
      {/* <Image
        placeholder="blur"
        priority={true}
        alt="Sponsorship Background"
        src={services}
        fill
        className="object-cover object-[25%_35%] brightness-50 -z-20"
      /> 
      */}

      {/* The glowing yellow (accent) spread from the earlier version! No gridlines. */}
      <div className="absolute w-[700px] h-[250px] bg-accent/40 rounded-full blur-[250px] pointer-events-none -z-10"></div>

      {/* Clean, floating text */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <p className="font-bold text-xs sm:text-sm text-accent uppercase tracking-[0.2em] mb-2 drop-shadow-md">
          Partner With Us
        </p>
        <div className="flex items-baseline justify-center">
          <span className="font-bold text-4xl sm:text-5xl text-white mr-3 drop-shadow-md">
            Our
          </span>
          <h1 className="font-black text-4xl sm:text-5xl text-accent uppercase tracking-tight drop-shadow-md">
            Sponsors
          </h1>
        </div>
      </div>

    </div>
  );
}