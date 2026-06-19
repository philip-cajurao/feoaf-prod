"use client"

import React from "react";
import Image from "next/image";
import BackButton from "../components/BackButton";

export default function BootcampsPage() {
  // Static list of all bootcamps. You can seamlessly add 2026, 2027, etc., below.
  const bootcamps = [
    {
      id: "bootcamp-2025",
      year: "2025",
      title: "Youth Bootcamps",
      // Gallery images allocated explicitly for 2025
      gallery: [
        { src: "/events/summer_bootcamp_2025/IMG_0082-1.JPEG", alt: "Students presenting ideas" },
        { src: "/events/summer_bootcamp_2025/IMG_0084.JPEG", alt: "Youth Bootcamp group photo" },
        { src: "/events/summer_bootcamp_2025/IMG_0089.JPEG", alt: "Working on business concepts" },
        { src: "/events/summer_bootcamp_2025/IMG_5541.JPEG", alt: "Interactive bootcamp session" },
        { src: "/events/summer_bootcamp_2025/IMG_5549.JPEG", alt: "Student presentation" },
        { src: "/events/summer_bootcamp_2025/IMG_5550.JPEG", alt: "Collaborative teamwork" },
        { src: "/events/summer_bootcamp_2025/IMG_5551.JPEG", alt: "Pitch showcase" },
        { src: "/events/summer_bootcamp_2025/IMG_5556.JPEG", alt: "Students receiving awards" },
        { src: "/events/summer_bootcamp_2025/summer_bootcamp_image_1.JPEG", alt: "Group brainstorming" },
        { src: "/events/summer_bootcamp_2025/summer_bootcamp_image_2.JPEG", alt: "Award recognition ceremony" },
      ]
    },
    /* FUTURE BOOTCAMPS CAN BE ADDED HERE:
    {
      id: "bootcamp-2026",
      year: "2026",
      title: "Summer Tech Bootcamp",
      gallery: []
    }
    */
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
            BOOTCAMP ARCHIVES
          </h1>
        </header>

        {/* Bootcamps List */}
        <div className="space-y-24">
          {bootcamps.map((camp) => (
            <section key={camp.id} className="border-t border-base-200 pt-12">
              
              {/* Info Label Row */}
              <div className="mb-8">
                <span className="inline-block px-3 py-1 text-xs font-black tracking-widest uppercase rounded bg-base-200 mb-3">
                  Year {camp.year}
                </span>
                <h2 className="text-3xl font-black tracking-wide">{camp.title}</h2>
              </div>

              {/* Mosaic Photo Grid Collage */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 auto-rows-[240px]">
                {camp.gallery.map((img, idx) => {
                  let spanClass = "";
                  const mod = idx % 10;
                  if (mod === 0) {
                    spanClass = "sm:col-span-2 sm:row-span-2";
                  } else if (mod === 1) {
                    spanClass = "sm:col-span-1 sm:row-span-1";
                  } else if (mod === 2) {
                    spanClass = "sm:col-span-1 sm:row-span-1";
                  } else if (mod === 3) {
                    spanClass = "sm:col-span-1 sm:row-span-2";
                  } else if (mod === 4) {
                    spanClass = "sm:col-span-2 sm:row-span-1";
                  } else if (mod === 5) {
                    spanClass = "sm:col-span-1 sm:row-span-1";
                  } else if (mod === 6) {
                    spanClass = "sm:col-span-1 sm:row-span-1";
                  } else if (mod === 7) {
                    spanClass = "sm:col-span-2 sm:row-span-2";
                  } else if (mod === 8) {
                    spanClass = "sm:col-span-1 sm:row-span-1";
                  } else if (mod === 9) {
                    spanClass = "sm:col-span-1 sm:row-span-1";
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
                        sizes={
                          [0, 4, 7].includes(mod)
                            ? "(max-width: 640px) 100vw, 66vw"
                            : "(max-width: 640px) 100vw, 33vw"
                        }
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