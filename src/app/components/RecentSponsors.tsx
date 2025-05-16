import Image from "next/image";
import React from "react";
import fhc from "../assets/sponsors/FHC.png";
import pmi from "../assets/sponsors/PMI.png";
import fts from "../assets/sponsors/FTS.png";
import Link from "next/link";

export default function RecentSponsors() {
  return (
    <div className="pt-8">
      <div className="flex flex-col items-center justify-center mb-8">
        {/* <h2 className="text-4xl font-bold mb-4 text-accent text-center">
          Sponsors
        </h2> */}
        <p className="text-lg sm:text-2xl max-w-2xl text-center px-2">
          Thank you for joining us at the Spring 2025 Gala — The Launch of the
          Future Entrepreneurs Foundation.
        </p>
      </div>

      <div className="flex px-4 md:px-auto w-full bg-neutral items-center justify-center gap-10 md:gap-20">
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
