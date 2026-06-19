import Image from "next/image";
import React from "react";
import Link from "next/link";
import bg from "../assets/bg.png";
import DonateQR from "./DonateQR";

// --- SPONSOR IMPORTS ---
import fhc from "../assets/sponsors/FHC-black.png";
import pmi from "../assets/sponsors/pmi-fairfax-black.png";
import fts from "../assets/sponsors/fts-full-black.png";
import fhgf from "../assets/sponsors/fht-growth-fund.png";
import gtsc from "../assets/sponsors/GTSC-talentsolutions.png";

export default function RecentSponsors({ showQR = true, fadeTop = false }: { showQR?: boolean; fadeTop?: boolean }) {
  return (
    <div className="bg-transparent">
      {/* 1. BRONZE SPONSORS */}
      <div className="py-16 relative overflow-hidden bg-transparent">
        {/* Decorative Backgrounds */}
        <div 
          className="absolute h-fit -left-[200px] top-0 hidden sm:block pointer-events-none w-[468px] z-0"
        >
          <Image
            src={bg}
            alt="bg"
            className="w-full h-auto opacity-100"
            style={fadeTop ? {
              maskImage: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.08) 12.5%, rgba(0,0,0,0.3) 25%, rgba(0,0,0,0.6) 37.5%, rgba(0,0,0,0.85) 50%, rgba(0,0,0,1) 70%)",
              WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.08) 12.5%, rgba(0,0,0,0.3) 25%, rgba(0,0,0,0.6) 37.5%, rgba(0,0,0,0.85) 50%, rgba(0,0,0,1) 70%)"
            } : undefined}
          />
          {fadeTop && (
            <div
              className="absolute inset-0 backdrop-blur-sm"
              style={{
                maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 12.5%, rgba(0,0,0,0.6) 25%, rgba(0,0,0,0.3) 37.5%, rgba(0,0,0,0.08) 50%, rgba(0,0,0,0) 70%)",
                WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 12.5%, rgba(0,0,0,0.6) 25%, rgba(0,0,0,0.3) 37.5%, rgba(0,0,0,0.08) 50%, rgba(0,0,0,0) 70%)"
              }}
            />
          )}
        </div>
        <div 
          className="absolute rotate-180 perspective-distant h-fit -right-[240px] -top-1 hidden sm:block pointer-events-none w-[468px] z-0"
        >
          <Image
            src={bg}
            alt="bg"
            className="w-full h-auto opacity-100"
            style={fadeTop ? {
              maskImage: "linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,0.08) 12.5%, rgba(0,0,0,0.3) 25%, rgba(0,0,0,0.6) 37.5%, rgba(0,0,0,0.85) 50%, rgba(0,0,0,1) 70%)",
              WebkitMaskImage: "linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,0.08) 12.5%, rgba(0,0,0,0.3) 25%, rgba(0,0,0,0.6) 37.5%, rgba(0,0,0,0.85) 50%, rgba(0,0,0,1) 70%)"
            } : undefined}
          />
          {fadeTop && (
            <div
              className="absolute inset-0 backdrop-blur-sm"
              style={{
                maskImage: "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 12.5%, rgba(0,0,0,0.6) 25%, rgba(0,0,0,0.3) 37.5%, rgba(0,0,0,0.08) 50%, rgba(0,0,0,0) 70%)",
                WebkitMaskImage: "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 12.5%, rgba(0,0,0,0.6) 25%, rgba(0,0,0,0.3) 37.5%, rgba(0,0,0,0.08) 50%, rgba(0,0,0,0) 70%)"
              }}
            />
          )}
        </div>

        <div className="flex flex-col items-center justify-center mb-12 relative z-10">
          <h2 className="text-base-content sm:text-4xl font-black text-2xl max-w-2xl text-center px-2 uppercase tracking-wide">
            Annual Bronze Sponsors
          </h2>
          <div className="h-1 w-20 bg-accent mt-4 rounded-full"></div>
        </div>

        {/* Top Row: Highlighted / Bigger Sponsors */}
        <div className="flex flex-wrap px-4 w-full items-center justify-center gap-6 sm:gap-12 mb-8 relative z-10">
          <Link href="https://invest.fortunehomesteam.com/" rel="noopener noreferrer" target="_blank" className="bg-white p-6 rounded-2xl shadow-xl border border-accent/25 flex items-center justify-center h-48 w-full max-w-[320px] sm:w-80 hover:scale-[1.03] transition-transform duration-300 hover:border-accent hover:shadow-2xl">
            <Image alt="FH Growth Fund logo" src={fhgf} className="max-h-full w-auto object-contain" />
          </Link>
          <Link href="https://gtscts.com/" rel="noopener noreferrer" target="_blank" className="bg-white p-6 rounded-2xl shadow-xl border border-accent/25 flex items-center justify-center h-48 w-full max-w-[320px] sm:w-80 hover:scale-[1.03] transition-transform duration-300 hover:border-accent hover:shadow-2xl">
            <Image alt="GTSC Talent Solutions logo" src={gtsc} className="max-h-full w-auto object-contain" />
          </Link>
        </div>

        {/* Bottom Row: Rest of the Sponsors (Slightly Smaller) */}
        <div className="flex flex-wrap px-4 w-full items-center justify-center gap-6 sm:gap-8 mb-10 relative z-10">
          <Link href="https://fortunehomesconstruction.com/" rel="noopener noreferrer" target="_blank" className="hover:scale-[1.03] transition-transform duration-300 bg-white p-6 rounded-2xl shadow-md border border-base-300 flex items-center justify-center h-36 w-full max-w-[256px] sm:w-64 hover:border-accent/60 hover:shadow-lg">
            <Image alt="Fortune Homes Construction logo" src={fhc} className="max-h-full w-auto object-contain" />
          </Link>
          <Link href="https://www.fairfaxpropertymanagementinc.com/" rel="noopener noreferrer" target="_blank" className="hover:scale-[1.03] transition-transform duration-300 bg-white p-6 rounded-2xl shadow-md border border-base-300 flex items-center justify-center h-36 w-full max-w-[256px] sm:w-64 hover:border-accent/60 hover:shadow-lg">
            <Image alt="PMI of Fairfax logo" src={pmi} className="max-h-full w-auto object-contain" />
          </Link>
          <Link href="https://www.fortunetechsolutions.net/" rel="noopener noreferrer" target="_blank" className="hover:scale-[1.03] transition-transform duration-300 bg-white p-6 rounded-2xl shadow-md border border-base-300 flex items-center justify-center h-36 w-full max-w-[256px] sm:w-64 hover:border-accent/60 hover:shadow-lg">
            <Image alt="Fortune Tech Solutions logo" src={fts} className="max-h-full w-auto object-contain" />
          </Link>
        </div>
      </div>

      {/* 3. Donate QR Section */}
      {showQR && (
        <div className="py-16 bg-neutral">
          <DonateQR />
        </div>
      )}
    </div>
  );
}