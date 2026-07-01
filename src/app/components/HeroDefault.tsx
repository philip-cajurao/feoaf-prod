"use client";



import Image from "next/image";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Fade from "embla-carousel-fade";
import Autoplay from "embla-carousel-autoplay";

// Hero Backgrounds
import image1 from "../assets/latest_events/FE1.jpg";
import image2 from "../assets/latest_events/FE2.jpg";
import image3 from "../assets/latest_events/FE3.jpg";
import image4 from "../assets/latest_events/fe.jpg";
import image5 from "../assets/latest_events/fe4.jpg";
import image6 from "../assets/latest_events/fe5.jpg";
import image7 from "../assets/latest_events/fe6.jpg";

import summerBootCamp from "../assets/events/summerBootCamp.png";
import galaImage from "../assets/events/GALA.jpg";

import Link from "next/link";
import { ChevronDown, MapPin, Clock } from "lucide-react";

function HeroDefault() {
  const plugin = React.useRef([
    Autoplay({ delay: 7000, stopOnInteraction: true }),
    Fade(),
  ]);

  const heroImages = [image1, image2, image3, image4, image5, image6, image7];

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
      {/* --- HERO SECTION --- */}
      <section className="relative h-[calc(100dvh-4rem)] w-full overflow-hidden flex flex-col">
        {/* Background carousel */}
        <div className="absolute inset-0 z-0">
          <Carousel
            plugins={plugin.current}
            opts={{ loop: true, duration: 50 }}
            className="h-full w-full"
          >
            <CarouselContent className="h-full m-0">
              {heroImages.map((img, index) => (
                <CarouselItem key={index} className="h-full p-0">
                  <Image
                    alt="Background Slide"
                    placeholder="blur"
                    priority={index === 0}
                    src={img}
                    fill
                    className="object-cover object-center"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 z-10 bg-black/50" />

        {/* Center content — takes all remaining space and centers itself */}
        <div className="relative z-20 flex-1 flex flex-col items-center justify-center text-center text-white px-6 py-6">
          <h1 className="
            text-3xl sm:text-5xl md:text-6xl
            [@media(max-height:600px)]:text-2xl
            [@media(max-height:500px)]:text-xl
            font-extrabold leading-tight drop-shadow-lg
            mb-4 sm:mb-6 [@media(max-height:600px)]:mb-2
          ">
            Empowering the Next Generation of Entrepreneurs
          </h1>
          <p className="
            text-sm sm:text-lg md:text-xl
            [@media(max-height:600px)]:text-xs
            text-gray-100 max-w-2xl drop-shadow-md
            mb-6 sm:mb-8 [@media(max-height:600px)]:mb-3
          ">
            From ideas to real businesses, Future Entrepreneurs of America equips{" "}
            youth ages 9–18 with the skills and confidence to lead.
          </p>

          <Link href="/join">
            <button className="
              btn btn-accent shadow-xl hover:scale-105 transition-transform text-white
              btn-md sm:btn-lg px-8 sm:px-12
              [@media(max-height:600px)]:btn-sm [@media(max-height:600px)]:px-6
            ">
              Join Now
            </button>
          </Link>
        </div>

        {/* Scroll indicator — pinned to the bottom of the flex column, never overlaps */}
        <div className="relative z-20 shrink-0 flex flex-col items-center pb-4 sm:pb-6 pointer-events-none">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-8">
            Join our Upcoming Events Below
          </p>
          <div className="animate-bounce p-2 bg-white/10 rounded-full backdrop-blur-md">
            <ChevronDown className="w-5 h-5 text-white" />
          </div>
        </div>
      </section>

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

export default HeroDefault;
