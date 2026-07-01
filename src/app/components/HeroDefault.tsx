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

import Link from "next/link";
import { ChevronDown } from "lucide-react";

function HeroDefault() {
  const plugin = React.useRef([
    Autoplay({ delay: 7000, stopOnInteraction: true }),
    Fade(),
  ]);

  const heroImages = [image1, image2, image3, image4, image5, image6, image7];

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
    </div>
  );
}

export default HeroDefault;
