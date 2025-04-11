import { Metadata } from "next";
import React from "react";
import RecentSponsors from "../components/RecentSponsors";
import DonateQR from "../components/DonateQR";
// import SponsorBanner from "../components/banners/SponsorBanner";

export const metadata: Metadata = {
  title: "Sponsors | Future Entrepreneurs Of America Foundation",
  description: "...",
};

export default function Sponsors() {
  return (
    <div className="relative">
      {/* <SponsorBanner /> */}
      <RecentSponsors />

      <DonateQR />
    </div>
  );
}
