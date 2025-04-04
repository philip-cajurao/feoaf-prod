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
        <h2 className="card-title text-5xl font-bold">Events</h2>
      </div>
    </div>
  );
}
