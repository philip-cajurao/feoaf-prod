import React from "react";
import Image from "next/image";
import flyer from "../../assets/latest_events/flyer.png";

export default function Flyer() {
  return (
      <div className="rounded-xl overflow-hidden dark:border-2">
        <Image
          alt="alt img to be put"
          placeholder="blur"
          src={flyer}
          height={400}
          width={400}
        />
      </div>
  );
}
