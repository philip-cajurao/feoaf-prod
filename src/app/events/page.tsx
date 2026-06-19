"use client"

import EventsBanner from "../components/banners/EventsBanner";
import Image from "next/image";
import CountDown from "../components/CountDown";

// Import your assets for use in the static list
import pickleball from "@/app/assets/events/pickleball.jpg";

export default function Events() {
  return (
    <div className="flex flex-col justify-center relative">
      <EventsBanner />

      {/* ─── UPCOMING EVENTS (Primary / Hero Section) ─── */}
      <CountDown />

      {/* ─── PREVIOUS EVENTS (Simple List) ─── */}
      <div className="relative px-4 sm:px-6 py-12 flex flex-col items-center w-full">

        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-base-300 to-transparent" />

        {/* Section Header */}
        <div className="text-center mb-8 max-w-xl">
          <h2 className="text-2xl sm:text-3xl font-black text-neutral uppercase tracking-tighter mt-1">
            Previous <span className="text-accent">Events</span>
          </h2>
        </div>

        {/* Simple Event List */}
        <div className="w-full max-w-2xl flex flex-col gap-12">

          {/* 1. Pickleball Tournament */}
          <div className="flex flex-col items-center text-center">
            <span className="text-xs font-bold text-accent uppercase tracking-wider">April 18, 2026</span>
            <h3 className="text-base font-black text-neutral leading-snug mt-0.5">Dink For a Cause — Pickleball Tournament</h3>
            <p className="text-sm text-base-content/50 mt-1 leading-relaxed max-w-xl">Thank you to everyone who joined us at Dill Dinkers at Manassas Mall for a day of fun, networking, and impact.</p>
            <div className="relative w-full sm:w-80 aspect-video rounded-xl shadow-sm overflow-hidden mt-4">
              <Image src={pickleball} alt="Pickleball" fill className="object-cover" />
            </div>
          </div>

          <div className="w-16 h-0.5 bg-accent/25 rounded-full mx-auto" />

          {/* 2. CCWRC Outreach */}
          <div className="flex flex-col items-center text-center">
            <span className="text-xs font-bold text-accent uppercase tracking-wider">February 2026</span>
            <h3 className="text-base font-black text-neutral leading-snug mt-0.5">Christian Center of World Restoration Outreach</h3>
            <p className="text-sm text-base-content/50 mt-1 leading-relaxed max-w-xl">A community-focused initiative bridging the gap between local resources and youth potential, fostering growth through faith and entrepreneurship.</p>
            <div className="relative w-full sm:w-80 aspect-video rounded-xl shadow-sm overflow-hidden mt-4">
              <Image src="/events/outreach images/DSC08222.JPG" alt="CCWRC" fill className="object-cover" />
            </div>
          </div>

          <div className="w-16 h-0.5 bg-accent/25 rounded-full mx-auto" />

          {/* 3. Spring Gala — with playable YouTube embeds */}
          <div className="flex flex-col items-center text-center">
            <span className="text-xs font-bold text-accent uppercase tracking-wider">April 2025</span>
            <h3 className="text-base font-black text-neutral leading-snug mt-0.5">Spring Gala Event</h3>
            <p className="text-sm text-base-content/50 mt-1 leading-relaxed max-w-xl">Watch our students take the stage. Our flagship gala combines student showcases with high-energy networking and business pitches.</p>
            {/* Playable YouTube embeds */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full mt-4">
              <div className="aspect-video rounded-xl overflow-hidden shadow-sm">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/w6UiWqXI_lo"
                  title="Spring Gala 2025 Video 1"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <div className="aspect-video rounded-xl overflow-hidden shadow-sm">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/SVMYB5t8QSk"
                  title="Spring Gala 2025 Video 2"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          </div>

          <div className="w-16 h-0.5 bg-accent/25 rounded-full mx-auto" />

          {/* 4. Summer Bootcamp */}
          <div className="flex flex-col items-center text-center">
            <span className="text-xs font-bold text-accent uppercase tracking-wider">June 2025</span>
            <h3 className="text-base font-black text-neutral leading-snug mt-0.5">Summer Bootcamp</h3>
            <p className="text-sm text-base-content/50 mt-1 leading-relaxed max-w-xl">An intensive experience where successful business owners, bankers, and community leaders train kids in entrepreneurship and professional skills.</p>
            <div className="relative w-full sm:w-80 aspect-video rounded-xl shadow-sm overflow-hidden mt-4">
              <Image src="/events/summer_bootcamp_2025/summer_bootcamp_image_1.JPEG" alt="Summer Bootcamp" fill className="object-cover" />
            </div>
          </div>

          <div className="w-16 h-0.5 bg-accent/25 rounded-full mx-auto" />

          {/* 5. Annual Holiday Event */}
          <div className="flex flex-col items-center text-center">
            <span className="text-xs font-bold text-accent uppercase tracking-wider">2024 – 2026 Tradition</span>
            <h3 className="text-base font-black text-neutral leading-snug mt-0.5">Annual Holiday Event</h3>
            <p className="text-sm text-base-content/50 mt-1 leading-relaxed max-w-xl">The year-end celebration where kids recognize their accomplishments. Includes the signature &quot;SHARKTANK&quot; competition where sponsors participate as judges.</p>
            <div className="relative w-full sm:w-80 aspect-video rounded-xl shadow-sm overflow-hidden mt-4">
              <Image src="/events/holiday/IMG_4627.jpg" alt="Holiday Event" fill className="object-cover" />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}