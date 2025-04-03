import Image from "next/image";
import React from "react";
import qr from "../assets/qr.png";
import Link from "next/link";

export default function DonateQR() {
  return (
    <div className="flex flex-col text-center items-center space-y-4 py-16">
      <p>
        Make a difference in each child’s future. <br />
        <Link href="/sponsors/be-a-sponsor" className="text-accent">Be one of our sponsors.</Link>
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
