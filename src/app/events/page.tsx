import { Metadata } from "next";
import React from "react";
import EventsBanner from "../components/banners/EventsBanner";
import SpringGala from "../components/SpringGala";

export const metadata: Metadata = {
  title: "Events | Future Entrepreneurs Of America Foundation",
  description: "...",
};

export default function Events() {
  return (
    <div className="flex flex-col justify-center">
      <EventsBanner />

      <SpringGala />
    </div>
  );
}
