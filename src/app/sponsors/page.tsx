import { Metadata } from "next";
import React from "react";
import RecentSponsors from "../components/RecentSponsors";
import DonateQR from "../components/DonateQR";

export const metadata: Metadata = {
  title: "Sponsors | Future Entrepreneurs Of America Foundation",
  description: "...",
};

export default function Sponsors() {
  return (
    <div className="py-24 mx-2">
      <RecentSponsors />

      <DonateQR />
    </div>
  );
}
