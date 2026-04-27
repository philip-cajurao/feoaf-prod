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

// Event Image Imports (Ensure these paths match your folder structure)
import pickleball from "../assets/latest_events/FE1.jpg"; 
import summerBootCamp from "../assets/latest_events/FE2.jpg";
import galaImage from "../assets/latest_events/FE3.jpg";

import Link from "next/link";
import { ChevronDown, MapPin, Clock } from "lucide-react";

function Hero() {
  const plugin = React.useRef([
    Autoplay({ delay: 7000, stopOnInteraction: true }),
    Fade(),
  ]);

  const heroImages = [image1, image2, image3, image4, image5, image6, image7];

  // --- UPDATED EVENTS DATA ---
  const upcomingEvents = [
    { 
        id: "pickleball-tournament",
        title: "Dink For a Cause - Pickleball Tournament", 
        date: "18", 
        month: "April",
        year: "2026",
        time: "2PM - 6PM",
        location: "Dill Dinkers in Manassas Mall, 9071 Center St, #53, Manassas, VA 20110",
        description: "Together we can play, have fun, and create opportunities for the next generation.",
        flyerUrl: pickleball.src,
        registrationUrl: "https://givebutter.com/c/Feoaf"
    },
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
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Carousel
            plugins={plugin.current}
            opts={{ loop: true, duration: 50 }}
            className="h-full w-full"
          >
            <CarouselContent className="h-screen m-0">
              {heroImages.map((img, index) => (
                <CarouselItem key={index} className="h-screen p-0">
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

        <div className="absolute inset-0 z-10 bg-black/50" />

        <div className="relative z-20 max-w-4xl px-6 text-center text-white flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
            Empowering the Next Generation of Entrepreneurs
          </h1>
          <p className="text-lg md:text-2xl mb-8 text-gray-100 max-w-2xl drop-shadow-md">
            From ideas to real businesses, Future Entrepreneurs of America equips 
            youth ages 9–18 with the skills and confidence to lead.
          </p>
          
          <Link href="/join">
            <button className="btn btn-accent btn-lg px-12 shadow-xl hover:scale-105 transition-transform text-white">
              Join Now
            </button>
          </Link>

          <div className="absolute -bottom-24 md:-bottom-32 flex flex-col items-center">
             <p className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-accent mb-2">
                Join our Upcoming Events Below
             </p>
             <div className="animate-bounce p-2 mt-8 bg-white/10 rounded-full backdrop-blur-md">
                <ChevronDown className="w-6 h-6 text-white" />
             </div>
          </div>
        </div>
      </section>

      {/* --- UPCOMING EVENTS SECTION --- */}
      <section id="events" className="bg-base-300 py-24 px-6 border-t border-base-300">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold italic">Upcoming Events</h2>
              <div className="h-1.5 w-24 bg-accent mt-2" />
            </div>
            <p className="text-lg opacity-90 max-w-md">
              Secure your spot in our upcoming workshops and networking sessions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-black/50 transition-all hover:shadow-none shadow-2xl">
                {/* Image Wrapper */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image 
                    src={event.flyerUrl}
                    alt={event.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 flex flex-col items-center justify-center bg-white text-black px-3 py-1 rounded-lg shadow-lg">
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

                  <p className="text-sm opacity-70 mb-6 line-clamp-3 flex-grow">
                    {event.description}
                  </p>

                  <Link href={event.registrationUrl} className="w-full">
                    <button className="btn btn-outline btn-accent btn-block group-hover:btn-link transition-all">
                      Register Now
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;