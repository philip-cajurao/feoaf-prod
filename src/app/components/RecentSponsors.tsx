import Image from "next/image";
import React from "react";
import fhc from "../assets/sponsors/FHC.png";
import pmi from "../assets/sponsors/PMI.png";
import fts from "../assets/sponsors/FTS.png";
import Link from "next/link";

export default function RecentSponsors() {
  return (
    <div className="pt-24">
      <div className="flex flex-col items-center justify-center mb-24">
        {/* <h2 className="text-4xl font-bold mb-4 text-accent text-center">
          Sponsors
        </h2> */}
        <p className="text-xl max-w-2xl text-center">
          Thank you to our Spring 2025 Gala Event - The Launch of Future
          Entrepreneurs Foundation.
        </p>
      </div>

      <div className="flex w-full bg-neutral items-center justify-center gap-20">
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
            width={120}
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
            width={120}
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
            width={120}
          />
        </Link>
      </div>
    </div>
  );
}
