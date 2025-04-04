import Image from "next/image";
import event from "../../assets/latest_events/events.jpg";
import React from "react";

export default function EventsBanner() {
  return (
    <div className="card image-full h-72">
      <figure>
        <Image placeholder="blur" priority={true} alt="Test" src={event} />
      </figure>
      <div className="card-body flex justify-center items-center">
        <h2 className="card-title text-5xl font-bold">
          <div className="grid place-items-center">
            <div>
              <p className="font-bold text-2xl text-accent">Our</p>
              <h2 className="font-bold text-5xl ml-4">Events</h2>
            </div>
          </div>
        </h2>
      </div>
    </div>
  );
}
