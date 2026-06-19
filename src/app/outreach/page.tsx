"use client"

import React from "react";
import Image from "next/image";
import BackButton from "../components/BackButton";

export default function OutreachPage() {
  const outreachEvents = [
    {
      id: "outreach",
      year: "2026",
      title: "Community Outreach",
      // Gallery images allocated for Community Outreach
      gallery: [
        { src: "/events/outreach images/DSC08222.JPG", alt: "Christian Center of World Restoration Outreach", sizes: "(max-width: 640px) 100vw, 66vw" },
        { src: "/events/outreach images/DSC08223.JPG", alt: "Outreach Team Gathering", sizes: "(max-width: 640px) 100vw, 33vw" },
        { src: "/events/outreach images/DSC08233.JPG", alt: "Outreach Event Group", sizes: "(max-width: 640px) 100vw, 33vw" },
        { src: "/events/outreach images/IMG_3795.JPEG", alt: "Community Outreach Team", sizes: "(max-width: 640px) 100vw, 66vw" },
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-base-100 py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        
        {/* Page Header */}
        <header className="mb-16">
          <BackButton href="/programs" className="text-sm font-semibold tracking-wider uppercase opacity-60 hover:opacity-100 transition-opacity">
            ← Back
          </BackButton>
          <h1 className="text-4xl font-black tracking-tight mt-3">
            COMMUNITY OUTREACH
          </h1>
        </header>

        {/* Outreach List */}
        <div className="space-y-24">
          {outreachEvents.map((event) => (
            <section key={event.id} className="border-t border-base-200 pt-12">
              
              {/* Event Info Header */}
              <div className="mb-8">
                <span className="inline-block px-3 py-1 text-xs font-black tracking-widest uppercase rounded bg-base-200 mb-3">
                  Year {event.year}
                </span>
                <h2 className="text-3xl font-black tracking-wide">{event.title}</h2>
              </div>

              {/* Mosaic Photo Grid Collage */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 auto-rows-[240px]">
                {event.gallery.map((img, idx) => {
                  let spanClass = "";
                  if (idx === 0) {
                    spanClass = "sm:col-span-2 sm:row-span-2";
                  } else if (idx === 1) {
                    spanClass = "sm:col-span-1 sm:row-span-1";
                  } else if (idx === 2) {
                    spanClass = "row-span-2 sm:col-span-1 sm:row-span-2";
                  } else if (idx === 3) {
                    spanClass = "sm:col-span-2 sm:row-span-1";
                  }
                  return (
                    <div 
                      key={idx} 
                      className={`group relative overflow-hidden rounded-2xl bg-base-200 border border-base-300 shadow-md transition-all duration-300 hover:shadow-xl ${spanClass}`}
                    >
                      <Image 
                        src={img.src} 
                        alt={img.alt}
                        fill
                        sizes={img.sizes}
                        priority={idx === 0}
                        loading={idx === 0 ? "eager" : "lazy"}
                        className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                      />
                    </div>
                  );
                })}
              </div>

            </section>
          ))}
        </div>

      </div>
    </main>
  );
}