import { Metadata } from "next";
import React from "react";
import Image from "next/image";
import image1 from "../assets/latest_events/program.jpg";
import image2 from "../assets/latest_events/create.jpg";
import image3 from "../assets/latest_events/plan.jpg";
import image4 from "../assets/latest_events/present.jpg";

export const metadata: Metadata = {
  title: "Services | Future Entrepreneurs Of America Foundation",
  description: "...",
};

export default function Services() {
  return (
    <div className="py-24 relative overflow-hidden">
      <div className="grid place-items-center">
        <div>
          <p className="font-bold text-2xl">Our</p>
          <h2 className="font-bold text-5xl ml-4">Services</h2>
        </div>
      </div>
      <svg
        className="absolute w-52 -z-50"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="rgba(248, 40, 52, 1)"
          d="M1.2,3.9C-5.9,13.1,-24.5,19,-26.6,12.7C-28.7,6.3,-14.4,-12.2,-5.1,-15.2C4.2,-18.1,8.4,-5.4,1.2,3.9Z"
          width="100%"
          height="100%"
          transform="translate(50 50)"
          strokeWidth="0"
          stroke="rgba(248, 40, 52, 1)"
        ></path>
      </svg>

      <svg
        className="absolute w-52 -z-50 left-70 top-5"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="rgba(248, 40, 52, 1)"
          d="M17.1,-17.4C21.9,-12.4,25.1,-6.2,22.6,-2.5C20.1,1.2,11.8,2.4,7.1,7.3C2.4,12.2,1.2,20.8,-2.2,22.9C-5.5,25.1,-11,20.8,-13.2,15.9C-15.3,11,-14.1,5.5,-14.5,-0.5C-15,-6.5,-17.2,-12.9,-15.1,-17.9C-12.9,-23,-6.5,-26.5,-0.1,-26.4C6.2,-26.2,12.4,-22.4,17.1,-17.4Z"
          width="100%"
          height="100%"
          transform="translate(50 50)"
          strokeWidth="0"
          stroke="rgba(248, 40, 52, 1)"
        ></path>
      </svg>

      <svg
        className="absolute w-52 -z-50 left-20 top-50"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="rgba(248, 40, 52, 1)"
          d="M24.6,-33.8C31.9,-33.6,37.8,-26.8,36.3,-19.6C34.8,-12.5,26,-5,24.5,3.4C23,11.7,28.9,20.9,27.6,25.6C26.2,30.2,17.6,30.3,10.2,30.4C2.9,30.4,-3,30.6,-7.7,28.3C-12.4,26,-15.8,21.3,-18,16.8C-20.2,12.2,-21.3,7.7,-24.3,2.1C-27.4,-3.6,-32.5,-10.4,-32.8,-17.3C-33.2,-24.1,-28.8,-31.1,-22.6,-31.7C-16.3,-32.3,-8.2,-26.6,0.3,-27C8.7,-27.4,17.3,-33.9,24.6,-33.8Z"
          width="100%"
          height="100%"
          transform="translate(50 50)"
          strokeWidth="0"
          stroke="rgba(248, 40, 52, 1)"
        ></path>
      </svg>

      <svg
        className="absolute w-52 -z-50 bottom-0 right-5"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="rgba(248, 40, 52, 1)"
          d="M1.2,3.9C-5.9,13.1,-24.5,19,-26.6,12.7C-28.7,6.3,-14.4,-12.2,-5.1,-15.2C4.2,-18.1,8.4,-5.4,1.2,3.9Z"
          width="100%"
          height="100%"
          transform="translate(50 50)"
          strokeWidth="0"
          stroke="rgba(248, 40, 52, 1)"
        ></path>
      </svg>

      <svg
        className="absolute w-52 -z-50 right-70 bottom-5"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="rgba(248, 40, 52, 1)"
          d="M17.1,-17.4C21.9,-12.4,25.1,-6.2,22.6,-2.5C20.1,1.2,11.8,2.4,7.1,7.3C2.4,12.2,1.2,20.8,-2.2,22.9C-5.5,25.1,-11,20.8,-13.2,15.9C-15.3,11,-14.1,5.5,-14.5,-0.5C-15,-6.5,-17.2,-12.9,-15.1,-17.9C-12.9,-23,-6.5,-26.5,-0.1,-26.4C6.2,-26.2,12.4,-22.4,17.1,-17.4Z"
          width="100%"
          height="100%"
          transform="translate(50 50)"
          strokeWidth="0"
          stroke="rgba(248, 40, 52, 1)"
        ></path>
      </svg>

      <svg
        className="absolute w-52 -z-50 right-20 bottom-50"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="rgba(248, 40, 52, 1)"
          d="M24.6,-33.8C31.9,-33.6,37.8,-26.8,36.3,-19.6C34.8,-12.5,26,-5,24.5,3.4C23,11.7,28.9,20.9,27.6,25.6C26.2,30.2,17.6,30.3,10.2,30.4C2.9,30.4,-3,30.6,-7.7,28.3C-12.4,26,-15.8,21.3,-18,16.8C-20.2,12.2,-21.3,7.7,-24.3,2.1C-27.4,-3.6,-32.5,-10.4,-32.8,-17.3C-33.2,-24.1,-28.8,-31.1,-22.6,-31.7C-16.3,-32.3,-8.2,-26.6,0.3,-27C8.7,-27.4,17.3,-33.9,24.6,-33.8Z"
          width="100%"
          height="100%"
          transform="translate(50 50)"
          strokeWidth="0"
          stroke="rgba(248, 40, 52, 1)"
        ></path>{" "}
      </svg>

      <div className="py-10 px-4 grid lg:grid-cols-2 place-items-center gap-10">
        <div className="card card-sm border border-2 bg-secondary max-w-96 lg:justify-self-end">
          <figure>
            <Image
              alt="Test"
              placeholder="blur"
              loading="lazy"
              src={image1}
              className="h-52 object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title dark:text-neutral-content text-xl font-bold flex items-center h-full text-primary-content">
              Programs
            </h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptates exercitationem nisi nobis possimus tempora dicta, hic
              dolorum autem sit asperiores obcaecati ducimus totam atque
              necessitatibus temporibus alias cupiditate veritatis. Excepturi.
            </p>
          </div>
        </div>

        <div className="card card-sm border border-2 bg-accent max-w-96 lg:justify-self-start">
          <figure>
            <Image
              alt="Test"
              placeholder="blur"
              loading="lazy"
              src={image2}
              className="h-52 object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title dark:text-neutral-content text-xl font-bold flex items-center h-full text-primary-content">
              Creating Exciting New Business
            </h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptates exercitationem nisi nobis possimus tempora dicta, hic
              dolorum autem sit asperiores obcaecati ducimus totam atque
              necessitatibus temporibus alias cupiditate veritatis. Excepturi.
            </p>
          </div>
        </div>

        <div className="card card-sm border border-2 bg-primary max-w-96 lg:justify-self-end">
          <figure>
            <Image
              alt="Test"
              placeholder="blur"
              loading="lazy"
              src={image3}
              className="h-52 object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title dark:text-neutral-content text-xl font-bold flex items-center h-full text-primary-content">
              Planning on how to market your products/services
            </h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptates exercitationem nisi nobis possimus tempora dicta, hic
              dolorum autem sit asperiores obcaecati ducimus totam atque
              necessitatibus temporibus alias cupiditate veritatis. Excepturi.
            </p>
          </div>
        </div>

        <div className="card card-sm border border-2 bg-success max-w-96 lg:justify-self-start">
          <figure>
            <Image
              alt="Test"
              placeholder="blur"
              loading="lazy"
              src={image4}
              className="h-52 object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title dark:text-neutral-content text-xl font-bold flex items-center h-full text-primary-content">
              Present your business to real investors
            </h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptates exercitationem nisi nobis possimus tempora dicta, hic
              dolorum autem sit asperiores obcaecati ducimus totam atque
              necessitatibus temporibus alias cupiditate veritatis. Excepturi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
