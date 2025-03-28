import { Metadata } from "next";
import React from "react";
import Image from "next/image";
import image1 from "../assets/latest_events/program.jpg";
import image2 from "../assets/latest_events/create.jpg";
import image3 from "../assets/latest_events/plan.jpg";
import image4 from "../assets/latest_events/present.jpeg";

export const metadata: Metadata = {
  title: "Services | Future Entrepreneurs Of America Foundation",
  description: "...",
};

export default function Services() {
  return (
    <div className="my-24">
      <h2 className="font-bold w-full border-2 border-black p-4 bg-secondary text-2xl text-secondary-content mb-4">
        Services
      </h2>

      <div className="p-10 grid grid-cols-2 place-items-center gap-10">
        <div className="card image-full w-96">
          <figure>
            <Image alt="Test" src={image1} />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-xl flex items-center h-full ">
              Programs
            </h2>
          </div>
        </div>

        <div className="card image-full w-96">
          <figure>
            <Image alt="Test" src={image2} />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-xl flex items-center h-full ">
              Creating Exciting New Business
            </h2>
          </div>
        </div>

        <div className="card image-full w-96">
          <figure>
            <Image alt="Test" src={image3} />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-xl flex items-center h-full ">
              Planning on how to market your products/services
            </h2>
          </div>
        </div>

        <div className="card image-full w-96">
          <figure>
            <Image alt="Test" src={image4} />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-xl flex items-center h-full ">
              Present your business to real investors
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
