import Image from "next/image";
import React from "react";
import fhc from "../assets/sponsors/FHC.png";
import pmi from "../assets/sponsors/PMI.png";
import fts from "../assets/sponsors/FTS.png";
import Link from "next/link";
import bg from "../assets/bg.png";
import DonateQR from "./DonateQR";

export default function RecentSponsors() {
  return (

    <div className="bg-neutral py-8 relative overflow-hidden">
      <div className="flex flex-col items-center justify-center my-8">
        {/* <h2 className="text-4xl font-bold mb-4 text-accent text-center">
          Sponsors
        </h2> */}
        <h2 className="text-neutral-content sm:text-4xl font-bold text-2xl max-w-2xl text-center px-2">
          Annual Bronze Sponsors
        </h2>
      </div>

      <Image
        src={bg}
        alt="bg"
        className="absolute h-fit -left-50 top-0 hidden sm:block"
      />
      <Image
        src={bg}
        alt="bg"
        className="absolute rotate-180 perspective-distant h-fit -right-60 -top-1 hidden sm:block"
      />

      <div className="flex px-4 md:px-auto w-full items-center justify-center gap-10 md:gap-20">
        <Link
          href="https://fortunehomesconstruction.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Image
            alt="Fortune Homes Construction logo"
            src={fhc}
            // placeholder="blur"
            loading="lazy"
            width={230}
          />
        </Link>
        <Link
          href="https://www.fairfaxpropertymanagementinc.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Image
            alt="PMI of Fairfax logo"
            src={pmi}
            // placeholder="blur"
            loading="lazy"
            width={230}
          />
        </Link>
        <Link
          href="https://www.fortunetechsolutions.net/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Image
            alt="Fortune Tech Solutions logo"
            src={fts}
            // placeholder="blur"
            loading="lazy"
            width={230}
          />
        </Link>
      </div>

      <DonateQR />
    </div>
  );
}
