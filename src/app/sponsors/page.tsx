import { Metadata } from "next";
import React from "react";
import RecentSponsors from "../components/RecentSponsors";
import DonateQR from "../components/DonateQR";
import SponsorBanner from "../components/banners/SponsorBanner";

export const metadata: Metadata = {
  title: "Sponsors | Future Entrepreneurs Of America Foundation",
  description:
    "Become a proud sponsor of the Future Entrepreneurs of America Foundation and invest in the future of young innovators. Your support helps fund age-appropriate business programs, mentorship opportunities, and inspiring events that equip youth ages 9–17 with the tools to become confident, capable entrepreneurs.",
  icons: {
    icon: ["/favicon.ico", "/logo.png"],
  },
  facebook: {
    appId: "61573876332746",
  },
};

export default function Sponsors() {
  return (
    <div className="relative">
      <SponsorBanner />
      <RecentSponsors />

      <DonateQR />
    </div>
  );
}
