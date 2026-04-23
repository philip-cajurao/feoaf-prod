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
import image1 from "../assets/latest_events/FE1.jpg";
import image2 from "../assets/latest_events/FE2.jpg";
import image3 from "../assets/latest_events/FE3.jpg";
import image4 from "../assets/latest_events/fe.jpg";
import image5 from "../assets/latest_events/fe4.jpg";
import image6 from "../assets/latest_events/fe5.jpg";
import image7 from "../assets/latest_events/fe6.jpg";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

function Hero() {
  const plugin = React.useRef([
    Autoplay({ delay: 7000, stopOnInteraction: true }),
    Fade(),
  ]);

  const images = [image1, image2, image3, image4, image5, image6, image7];

  return (
    <div className="flex flex-col w-full">
      {/* --- HERO SECTION: Fixed 100vh --- */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        
        {/* 1. Background Carousel */}
        <div className="absolute inset-0 z-0">
          <Carousel
            plugins={plugin.current}
            opts={{ loop: true, duration: 50 }}
            className="h-full w-full"
          >
            <CarouselContent className="h-screen m-0">
              {images.map((img, index) => (
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

        {/* 2. Contrast Overlay (Dark Gradient) */}
        {/* This ensures the text is readable even if the image is bright */}
        <div className="absolute inset-0 z-10 bg-black/50" />

        {/* 3. Hero Content */}
        <div className="relative z-20 max-w-4xl px-6 text-center text-white flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
            Empowering the Next Generation of Entrepreneurs
          </h1>
          <p className="text-lg md:text-2xl mb-8 text-gray-100 max-w-2xl drop-shadow-md">
            From ideas to real businesses, Future Entrepreneurs of America equips 
            youth ages 9–18 with the skills and confidence to lead.
          </p>
          
          <Link href="/join">
            <button className="btn btn-accent btn-lg px-12 shadow-xl hover:scale-105 transition-transform">
              Join Now
            </button>
          </Link>

          {/* 4. The "Sign" / Scroll Indicator */}
          <div className="absolute -bottom-24 md:-bottom-32 flex flex-col items-center">
             <p className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-accent mb-2">
                Join our Upcoming Events Below
             </p>
             <div className="animate-bounce p-2 bg-white/10 rounded-full backdrop-blur-md">
                <ChevronDown className="w-6 h-6 text-white" />
             </div>
          </div>
        </div>
      </section>

      {/* --- UPCOMING EVENTS SECTION --- */}
      <section id="events" className="bg-base-100 py-24 px-6 border-t border-base-300">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold italic">Upcoming Events</h2>
              <div className="h-1.5 w-24 bg-accent mt-2" />
            </div>
            <p className="text-lg opacity-70 max-w-md">
              Secure your spot in our upcoming workshops and networking sessions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Event Card Example */}
            {[1, 2, 3].map((i) => (
              <div key={i} className="group cursor-pointer">
                <div className="bg-base-200 aspect-video rounded-xl mb-4 overflow-hidden relative border border-base-300">
                   <div className="absolute inset-0 bg-accent/10 group-hover:bg-transparent transition-colors" />
                   <div className="absolute top-4 left-4 badge badge-neutral">Sept {10 + i}, 2024</div>
                </div>
                <h3 className="text-xl font-bold group-hover:text-accent transition-colors">Summit for Youth Leaders</h3>
                <p className="opacity-70 mt-2">A gathering of the brightest young minds in the country.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;