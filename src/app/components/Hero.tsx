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

import summerBootCamp from "../assets/events/summerBootCamp.png";
import galaImage from "../assets/events/GALA.jpg";

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

  // --- UPDATED EVENTS DATA ---
  const upcomingEvents = [
    {
      id: "summer-bootcamp",
      title: "Entrepreneurship Summer Bootcamp",
      date: "15-19",
      month: "June",
      year: "2026",
      time: "9AM - 2PM",
      location: "The Waverly Club, 15401 Fog Mountain Cir, Haymarket, VA 20169",
      description: "The FEOAF Summer Bootcamp is a fun, hands-on program where youth learn entrepreneurship, financial literacy, and leadership skills.",
      flyerUrl: summerBootCamp.src,
      registrationUrl: "/register/bootcamp"
    },
    {
      id: "annual-gala",
      title: "The FEOAF Gala",
      date: "17",
      month: "Oct",
      year: "2026",
      time: "6:30PM - 11PM",
      location: "Heritage Hunt Country Club, 6901 Arthur Hills Drive, Gainesville, VA 20155",
      description: "The FEOAF Gala is our premier annual fundraising event that supports programs designed to nurture young entrepreneurs.",
      flyerUrl: galaImage.src,
      registrationUrl: "https://givebutter.com/c/X0GXZ6?source=qr&version=1"
    }
  ];

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

      {/* --- UPCOMING EVENTS SECTION --- */}
      <section id="events" className="bg-base-200 py-24 px-6 border-t border-base-300">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col justify-between items-center mb-12 gap-4">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold italic">Upcoming Events</h2>
              <div className="h-1.5 w-24 bg-accent mt-2" />
            </div>
            <p className="text-lg opacity-90 max-w-md">
              Secure your spot in our upcoming workshops and networking sessions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingEvents.map((event) => (
              <Link
                key={event.id}
                href="/events"
                className="group flex flex-col h-full max-w-sm mx-auto bg-white rounded-2xl overflow-hidden border border-black/50 transition-all hover:border-accent hover:shadow-none shadow-2xl cursor-pointer"
              >
                {/* Image Wrapper */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={event.flyerUrl}
                    alt={event.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 flex flex-col items-center justify-center bg-white text-black px-3 py-1 rounded-lg shadow-lg border border-black/50">
                    <span className="text-xs font-bold uppercase leading-none">{event.month}</span>
                    <span className="text-xl font-black">{event.date}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors line-clamp-2">
                    {event.title}
                  </h3>

                  <div className="space-y-2 mb-4 text-sm opacity-80">
                    <div className="flex items-start gap-2">
                      <Clock className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <span className="line-clamp-2">{event.location}</span>
                    </div>
                  </div>

                  <p className="text-sm opacity-70 line-clamp-3 flex-grow">
                    {event.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;