import React from "react";
import Image from "next/image";
import flyer from "../../assets/latest_events/flyer.png";

export default function Flyer() {
  return (
      <div className="rounded-xl overflow-hidden">
        <Image
          alt="alt img to be put"
          placeholder="blur"
          priority={true}
          src={flyer}
          width={530}
          className="h-full"
        />
      </div>
  );
}
