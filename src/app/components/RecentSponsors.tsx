import Image from "next/image";
import React from "react";
import Link from "next/link";
import bg from "../assets/bg.png";
import DonateQR from "./DonateQR";

// --- SPONSOR IMPORTS ---
import fhc from "../assets/sponsors/FHC.png";
import pmi from "../assets/sponsors/PMI.png";
import fts from "../assets/sponsors/FTS.png";

// --- PARTNER IMPORTS ---
import fhGrowthFundLogo from "@/app/assets/partners/fhGrowthFund.png";
import fortuneLogo from "@/app/assets/sponsors/fts-full-bg.png";

export default function RecentSponsors() {
  const partners = [
    { name: "FH Growth Fund", logo: fhGrowthFundLogo },
    { name: "Roberts", logo: fhGrowthFundLogo },
    { name: "Fortune Tech Solutions", logo: fortuneLogo }
  ];

  return (
    <div className="bg-neutral">
      {/* 1. BRONZE SPONSORS (Original Style) */}
      <div className="py-16 relative overflow-hidden">
        <div className="flex flex-col items-center justify-center mb-8 relative z-10">
          <h2 className="text-neutral-content sm:text-4xl font-bold text-2xl max-w-2xl text-center px-2">
            Annual Bronze Sponsors
          </h2>
        </div>

        {/* Decorative Backgrounds */}
        <Image
          src={bg}
          alt="bg"
          className="absolute h-fit -left-50 top-0 hidden sm:block pointer-events-none opacity-30"
        />
        <Image
          src={bg}
          alt="bg"
          className="absolute rotate-180 perspective-distant h-fit -right-60 -top-1 hidden sm:block pointer-events-none opacity-30"
        />

        <div className="flex flex-wrap px-4 w-full items-center justify-center gap-10 md:gap-20 mb-10 relative z-10">
          <Link href="https://fortunehomesconstruction.com/" rel="noopener noreferrer" target="_blank" className="hover:scale-105 transition-transform duration-300">
            <Image alt="Fortune Homes Construction logo" src={fhc} loading="lazy" width={230} />
          </Link>
          <Link href="https://www.fairfaxpropertymanagementinc.com/" rel="noopener noreferrer" target="_blank" className="hover:scale-105 transition-transform duration-300">
            <Image alt="PMI of Fairfax logo" src={pmi} loading="lazy" width={230} />
          </Link>
          <Link href="https://www.fortunetechsolutions.net/" rel="noopener noreferrer" target="_blank" className="hover:scale-105 transition-transform duration-300">
            <Image alt="Fortune Tech Solutions logo" src={fts} loading="lazy" width={230} />
          </Link>
        </div>
      </div>

      {/* 2. PARTNERS SECTION (New Stylized Layout) */}
      <section className="py-32 bg-neutral border-y border-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          
          {/* Clean Heart Icon */}
          <div className="mb-6 flex justify-center relative cursor-default group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-16 h-16 text-accent relative z-10 
                   drop-shadow-sm
                   group-hover:scale-105 group-hover:-translate-y-1 
                   transition-all duration-300"
            >
              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
            </svg>
          </div>

          {/* Solid Yellow "Thank You" */}
          <h2 className="text-3xl font-extrabold sm:text-5xl tracking-tight uppercase mb-4">
            <span className="text-accent">
              Thank You
            </span>
            <span className="text-white"> To Our Partners</span>
          </h2>

          <p className="text-white/70 mb-12 font-bold leading-relaxed max-w-2xl mx-auto text-lg">
            We are incredibly grateful for the support of our partners who empower our future leaders.
          </p>

          <div className="flex flex-wrap justify-center gap-6 sm:gap-10 mb-12">
            {partners.map((partner, i) => (
              <div key={i} className="flex items-center gap-4 bg-white/5 backdrop-blur-sm p-4 pr-6 rounded-xl border border-white/10 transition-all hover:border-accent hover:bg-white/10 group/logo">
                <div className="w-16 h-16 relative bg-white rounded-lg overflow-hidden shrink-0 shadow-sm flex items-center justify-center">
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    fill
                    className="object-contain p-2"
                    unoptimized
                  />
                </div>
                <span className="font-black text-white leading-tight text-xl group-hover/logo:text-accent transition-colors">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>

          <div className="max-w-xs mx-auto">
            <Link href="/partner" className="btn btn-accent btn-block rounded-md shadow-lg hover:shadow-accent/30 transition-all font-black text-neutral uppercase tracking-widest h-14 flex items-center justify-center">
              Partner With Us
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Donate QR Section */}
      <div className="py-16">
        <DonateQR />
      </div>
    </div>
  );
}