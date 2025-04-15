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
    Autoplay({ delay: 7000, stopOnInteraction: true }),
    Fade(),
  ]);
  return (
    <div className="h-auto md:h-[calc(100svh-4rem)] grid md:grid-cols-2">
      {/* <span className="bg-linear-to-b from-base-300 to-transparent absolute top-0 h-2/3 w-full" /> */}
      <div className="w-full h-[calc(60svh)] md:order-last md:h-full flex justify-center items-center py-4 px-10">
        <div className="max-w-2xl flex flex-col items-center">
          <h2 className="text-center text-xl sm:text-3xl/10 font-bold">
            We are the future of the world. We are the next generation, we are
            tomorrow’s people, we are the Future Entrepreneurs.
          </h2>
          <p className="text-center text-sm sm:text-lg max-w-md px-10 mt-4">
            Join us and together we can make a difference!
          </p>

          <Link href="/join">
            <div className="border mt-4">
              <button className="btn btn-accent sm:btn-xl">
                {/* <span className="absolute h-[calc(100%+2rem)] w-[calc(100%+2rem)] bg-accent rounded-full -z-10 -top-3 -left-3 -translate-x-full group-hover:translate-x-0 transform-all duration-300" /> */}
                Join
              </button>
            </div>
          </Link>
        </div>
      </div>

      <div className="relative h-auto my-4 md:my-0 md:order-first">
        <Carousel
          plugins={plugin.current}
          opts={{
            align: "start",
            loop: true,
            duration: 50,
          }}
          className="h-full w-full top-0 left-0 -z-10"
        >
          <CarouselContent>
            <CarouselItem>
              <Image
                alt="test"
                placeholder="blur"
                priority={true}
                src={image1}
                className="object-cover object-center h-full brightness-90 md:rounded-br-2xl"
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                alt="test"
                placeholder="blur"
                src={image2}
                className="object-cover object-center h-full brightness-90 md:rounded-br-2xl"
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                alt="test"
                placeholder="blur"
                src={image3}
                className="object-cover object-center h-full brightness-90 md:rounded-br-2xl"
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                alt="test"
                placeholder="blur"
                src={image4}
                className="object-cover object-center h-full brightness-90 md:rounded-br-2xl"
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                alt="test"
                placeholder="blur"
                src={image5}
                className="object-cover object-right-bottom h-full brightness-90 md:rounded-br-2xl"
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                alt="test"
                placeholder="blur"
                src={image6}
                className="object-cover object-left-top h-full brightness-90 md:rounded-br-2xl"
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                alt="test"
                placeholder="blur"
                src={image7}
                className="object-cover object-center h-full brightness-90 md:rounded-br-2xl"
              />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}

export default Hero;
