import Image from "next/image";
import React from "react";
import image1 from "../assets/latest_events/program.jpg";
import image2 from "../assets/latest_events/create.jpg";
import image3 from "../assets/latest_events/plan.jpg";
import image4 from "../assets/latest_events/present.jpg";

export default function ServicesCard() {
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
          <h2 className="card-title dark:text-neutral-content text-xl font-bold flex items-center h-full text-primary-content">
            Programs
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
          <h2 className="card-title dark:text-neutral-content text-xl font-bold flex items-center h-full text-primary-content">
            Creating Exciting New Business
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
            Planning on how to market your products/services
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
          <h2 className="card-title dark:text-neutral-content text-xl font-bold flex items-center h-full text-primary-content">
            Present your business to real investors
          </h2>
        </div>
      </div>
    </div>
  );
}
