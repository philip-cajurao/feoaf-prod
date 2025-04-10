import Image from "next/image";
import React from "react";
import image1 from "../assets/latest_events/fe5.jpg";
import image2 from "../assets/latest_events/create.jpg";
import image3 from "../assets/latest_events/sm.jpeg";
import image4 from "../assets/latest_events/ads.jpeg";

export default function ProgramsCard() {
  return (
    <div className="py-10 px-4 grid lg:grid-cols-2 place-items-center gap-10">
      <div className="card card-sm rounded-md border border-2 bg-secondary max-w-96 lg:justify-self-end">
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
          <h2 className="card-title dark:text-neutral-content text-xl font-bold flex items-center h-full text-secondary-content">
            Advertisements 101
          </h2>
        </div>
      </div>

      <div className="card card-sm rounded-md border border-2 bg-accent max-w-96 lg:justify-self-start">
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
          <h2 className="card-title dark:text-neutral-content text-xl font-bold flex items-center h-full text-accent-content">
            Product Ideation
          </h2>
        </div>
      </div>

      <div className="card card-sm rounded-md border border-2 bg-primary max-w-96 lg:justify-self-end">
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
            Social Media Madness
          </h2>
        </div>
      </div>

      <div className="card card-sm rounded-md border border-2 bg-success max-w-96 lg:justify-self-start">
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
          <h2 className="card-title dark:text-neutral-content text-xl font-bold flex items-center h-full text-success-content">
            Marketing 101
          </h2>
        </div>
      </div>
    </div>
  );
}
