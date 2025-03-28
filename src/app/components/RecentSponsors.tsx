import Image from "next/image";
import React from "react";
import fhc from "../assets/sponsors/FHC.png";
import pmi from "../assets/sponsors/PMI.png";

export default function RecentSponsors() {
  return (
    <>
      <div className="text-center my-8">
        <h2 className="text-2xl max-w-2xl mx-auto">
          Thank you to our Spring 2025 Gala Event - The Launch of Future
          Entrepreneurs Foundation.
        </h2>
      </div>

      <div className="flex justify-evenly mb-24">
        <div>
          <Image
            className="w-auto h-auto"
            alt="Fortune Homes Construction logo"
            src={fhc}
            height={100}
            width={100}
          />
        </div>
        <div>
          <Image
            className="w-auto h-auto"
            alt="PMI of Fairfax logo"
            src={pmi}
            height={100}
            width={100}
          />
        </div>
      </div>
    </>
  );
}
