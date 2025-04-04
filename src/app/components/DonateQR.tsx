import Image from "next/image";
import React from "react";
import qr from "../assets/qr/sponsorQR.png";
import Link from "next/link";
import bg from "../assets/bg.png";

export default function DonateQR() {
  return (
    <div className="flex flex-col relative overflow-hidden py-24 text-center items-center space-y-4 py-16">
      <Image
        src={bg}
        alt="bg"
        className="absolute -z-50 h-fit -left-50 top-0 hidden sm:block"
      />
      <Image
        src={bg}
        alt="bg"
        className="absolute rotate-180 perspective-distant -z-50 h-fit -right-60 top-0 hidden sm:block"
      />

      <p>
        Make a difference in each child’s future. <br />
        <Link href="/sponsors/be-a-sponsor" className="text-accent">
          Be one of our sponsors.
        </Link>
      </p>
      <Image
        className="w-auto h-auto"
        alt="QR code for sponsors"
        src={qr}
        height={150}
        width={150}
      />
    </div>
  );
}
