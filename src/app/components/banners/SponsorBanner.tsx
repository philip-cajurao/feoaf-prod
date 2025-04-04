import React from 'react';
import Image from "next/image";
import services from "../../assets/latest_events/sponsorbg.jpg";

export default function SponsorBanner() {
  return (
    <div className="card image-full h-72">
      <figure>
        <Image placeholder="blur" priority={true} alt="Test" src={services} />
      </figure>
      <div className="card-body flex justify-center items-center">
        <h2 className="card-title text-5xl font-bold">
          <div className="grid place-items-center">
            <div>
              <p className="font-bold text-2xl text-accent">Our</p>
              <h2 className="font-bold text-5xl ml-4">Sponsors</h2>
            </div>
          </div>
        </h2>
      </div>
    </div>
  );
}
