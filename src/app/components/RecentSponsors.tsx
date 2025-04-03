import Image from "next/image";
import React from "react";
import fhc from "../assets/sponsors/FHC.png";
import pmi from "../assets/sponsors/PMI.png";

export default function RecentSponsors() {
  return (
    <div className="grid md:grid-cols-2 place-content-center">
      <div className="px-4 sm:px-10 md:py-32 pt-32 pb-10 flex flex-col justify-center">
        <h2 className="text-4xl font-bold mb-4 text-accent">Sponsors</h2>
        <p className="text-xl max-w-2xl">
          Thank you to our Spring 2025 Gala Event - The Launch of Future
          Entrepreneurs Foundation.
        </p>
      </div>

      <div className="grid md:grid-cols-3">
        <div></div>
        <div className="grid grid-cols-2 sm:grid-cols-1 w-full md:py-32 pb-32 bg-success items-center justify-center gap-20 p-10">
          <Image
            className="w-auto h-auto mx-auto"
            alt="Fortune Homes Construction logo"
            src={fhc}
            placeholder="blur"
            loading="lazy"
            width={100}
          />
          <Image
            className="w-auto h-auto mx-auto"
            alt="PMI of Fairfax logo"
            src={pmi}
            placeholder="blur"
            loading="lazy"
            width={100}
          />
        </div>
        <div></div>
      </div>
    </div>
  );
}
