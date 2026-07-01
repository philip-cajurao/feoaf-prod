"use client";

import { useState } from "react";
import GalaModal from "./GalaModal";

import Image from "next/image";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Fade from "embla-carousel-fade";
import Autoplay from "embla-carousel-autoplay";

import Link from "next/link";
import { ChevronDown, MapPin, Clock, Calendar } from "lucide-react";

// ── Gala slideshow images (from public/events/gala/2025/) ──────────────────
const galaSlides = [
  "/events/gala/2025/_DSC6430.JPG",
  "/events/gala/2025/_DSC6440.JPG",
  "/events/gala/2025/_DSC6667.JPG",
  "/events/gala/2025/_DSC6669.JPG",
  "/events/gala/2025/_DSC6875.JPG",
];

function Hero() {
  const [showGalaModal, setShowGalaModal] = useState(false);
  const plugin = React.useRef([
    Autoplay({ delay: 5000, stopOnInteraction: false }),
    Fade(),
  ]);

  return (
    <div className="flex flex-col w-full">

      {/* ── Gala Story Modal ── */}
      {showGalaModal && <GalaModal onClose={() => setShowGalaModal(false)} />}

      {/* ── HERO SECTION — Gala slideshow + Gala ad ───────────────────────── */}
      <section className="relative h-[calc(100dvh-4rem)] w-full overflow-hidden flex flex-col">

        {/* Background carousel — gala photos */}
        <div className="absolute inset-0 z-0">
          <Carousel
            plugins={plugin.current}
            opts={{ loop: true, duration: 50 }}
            className="h-full w-full"
          >
            <CarouselContent className="h-full m-0">
              {galaSlides.map((src, index) => (
                <CarouselItem key={index} className="h-full p-0">
                  <Image
                    alt={`Gala event photo ${index + 1}`}
                    src={src}
                    fill
                    priority={index === 0}
                    className="object-cover object-center"
                    sizes="100vw"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Dark gradient overlay — heavier at top & bottom for legibility */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/70 via-black/40 to-black/75" />

        {/* Gala advertisement — centred on the hero */}
        <div className="relative z-20 flex-1 flex flex-col items-center justify-center text-center text-white px-6 py-6">

          {/* Event label */}
          <span className="inline-block text-xs font-bold uppercase tracking-[0.25em] text-accent mb-4
            [@media(max-height:600px)]:mb-2">
            ★ &nbsp;Upcoming Black-Tie Event &nbsp;★
          </span>

          {/* Title */}
          <h1 className="
            text-4xl sm:text-6xl md:text-7xl
            [@media(max-height:600px)]:text-3xl
            font-black leading-none drop-shadow-lg mb-2
          ">
            A Gala to<br />Remember
          </h1>
          <p className="text-accent text-sm sm:text-base font-semibold italic mb-6
            [@media(max-height:600px)]:mb-3">
            Celebrating Tomorrow&apos;s Leaders
          </p>

          {/* Event details row */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-sm text-white/80 mb-8
            [@media(max-height:600px)]:mb-4">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-accent" />
              October 17, 2026
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-accent" />
              6:30 PM – 11:00 PM
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-accent" />
              Heritage Hunt Golf &amp; Country Club, Gainesville VA
            </span>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="https://givebutter.com/c/X0GXZ6?source=qr&version=1"
              target="_blank"
              rel="noopener noreferrer"
              id="hero-gala-tickets-btn"
              className="btn btn-accent btn-md sm:btn-lg px-8 sm:px-12 font-bold shadow-xl hover:scale-105 transition-transform"
            >
              Get Tickets
            </Link>
            <button
              id="hero-gala-story-btn"
              onClick={() => setShowGalaModal(true)}
              className="btn btn-outline btn-accent btn-md sm:btn-lg px-8 sm:px-12 font-bold text-white hover:text-white shadow-xl"
            >
              Details
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="relative z-20 shrink-0 flex flex-col items-center pb-4 sm:pb-6 pointer-events-none">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-6">
            Scroll to explore
          </p>
          <div className="animate-bounce p-2 bg-white/10 rounded-full backdrop-blur-md">
            <ChevronDown className="w-5 h-5 text-white" />
          </div>
        </div>
      </section>

      {/* ── ORG TAGLINE STRIP — replaces the old hero text, sits below ──────── */}
      <div className="border-b border-base-300 py-10 px-6">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold italic text-base-content leading-snug">
              Empowering the Next Generation of Entrepreneurs
            </h2>
            <p className="text-sm opacity-60 mt-1 max-w-lg">
              From ideas to real businesses — FEOAF equips youth ages 9–18 with the skills and confidence to lead.
            </p>
          </div>
          <Link href="/join" className="shrink-0 btn btn-accent font-bold px-8">
            Join Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;