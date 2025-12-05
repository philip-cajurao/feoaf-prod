import { Metadata } from "next";
import React from "react";
import RecentSponsors from "../components/RecentSponsors";
import SponsorBanner from "../components/banners/SponsorBanner";
import SponsorshipOpportunities from "./SponsorshipOpportuinities";

export const metadata: Metadata = {
  title: "Sponsors | Future Entrepreneurs Of America Foundation",
  description:
    "Become a proud sponsor of the Future Entrepreneurs of America Foundation and invest in the future of young innovators. Your support helps fund age-appropriate business programs, mentorship opportunities, and inspiring events that equip youth ages 9–17 with the tools to become confident, capable entrepreneurs.",
  icons: {
    icon: [
      "/logo.png",
      "/favicon.ico"
    ],
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
<SponsorshipOpportunities />

    </div>
  );
}
