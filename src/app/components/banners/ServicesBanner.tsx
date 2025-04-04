import Image from "next/image";
import services from "../../assets/latest_events/services.jpeg";
import React from "react";

export default function ServicesBanner() {
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
              <h2 className="font-bold text-5xl ml-4">Services</h2>
            </div>
          </div>
        </h2>
      </div>
    </div>
  );
}
