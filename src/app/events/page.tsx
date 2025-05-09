import { Metadata } from "next";
import React from "react";
import EventsBanner from "../components/banners/EventsBanner";
import SpringGala from "../components/SpringGala";

export const metadata: Metadata = {
  title: "Events | Future Entrepreneurs Of America Foundation",
  description:
    "Discover exciting youth-focused events like our recent Spring Gala, where young entrepreneurs showcase their creativity and business ideas. The Future Entrepreneurs of America Foundation hosts inspiring gatherings that celebrate innovation, growth, and the power of the next generation.",
  icons: {
    icon: ["/favicon.ico"],
  },
  facebook: {
    appId: "61573876332746",
  },
};

export default function Events() {
  return (
    <div className="flex flex-col justify-center relative">
      <EventsBanner />

      <SpringGala />
    </div>
  );
}
