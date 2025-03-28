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

function Hero() {
  const plugin = React.useRef([
    Autoplay({ delay: 5000, stopOnInteraction: true }),
    Fade(),
  ]);
  return (
    <div className="h-svh relative">
      {/* <span className="bg-linear-to-b from-base-300 to-transparent absolute top-0 h-2/3 w-full" /> */}
      <Carousel
        plugins={plugin.current}
        opts={{
          align: "start",
          loop: true,
          duration: 70,
        }}
        className="h-full w-full absolute top-0 left-0 -z-10"
      >
        <CarouselContent>
          <CarouselItem>
            <Image
              alt="test"
              src={image1}
              className="object-cover object-center h-full brightness-30 blur-[3px]"
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              alt="test"
              src={image2}
              className="object-cover object-center h-full brightness-30 blur-[3px]"
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              alt="test"
              src={image3}
              className="object-cover object-center h-full brightness-30 blur-[3px]"
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              alt="test"
              src={image4}
              className="object-cover object-center h-full brightness-30 blur-[3px]"
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              alt="test"
              src={image5}
              className="object-cover object-right-bottom h-full brightness-30 blur-[3px]"
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              alt="test"
              src={image6}
              className="object-cover object-left-top h-full brightness-30 blur-[3px]"
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              alt="test"
              src={image7}
              className="object-cover object-center h-full brightness-30 blur-[3px]"
            />
          </CarouselItem>
        </CarouselContent>
      </Carousel>

      <div className="absolute w-full h-full flex justify-center items-center">
        <div className="max-w-2xl flex flex-col items-center">
          <h2 className="text-center text-5xl/18 font-bold">
            Dream{" "}
            <span className="bg-primary px-2 border-2 text-primary-content rounded-lg">
              Big,
            </span>{" "}
            Learn{" "}
            <span className="bg-secondary px-2 border-2 text-primary-content rounded-lg">
              Bigger
            </span>{" "}
            &nbsp; Inspire The{" "}
            <span className="bg-success px-2 border-2 text-primary-content rounded-lg">
              Entrepreneurs
            </span>{" "}
            Of Tomorrow
          </h2>
          <p className="text-center mt-2 max-w-md">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
            autem.
          </p>

          <Link href="/join">
            <button className="rounded-md relative cursor-pointer group hover:border-black font-bold border-2 text-accent hover:text-black transform-all duration-300 px-8 py-4 overflow-hidden mt-8 border">
              <span className="absolute h-[calc(100%+2rem)] w-[calc(100%+2rem)] bg-accent rounded-full -z-10 -top-3 -left-3 -translate-x-full group-hover:translate-x-0 transform-all duration-300" />
              Join now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
