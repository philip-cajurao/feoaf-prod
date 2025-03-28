import Image from "next/image";
import React from "react";
import qr from "../assets/qr.png";
import Link from "next/link";

export default function DonateQR() {
  return (
    <div className="flex flex-col text-center items-center space-y-4">
      <p>
        Make a difference in each child’s future. <br /> Be one of our sponsors.
      </p>
      <Link href="/become-a-sponsor">
        <Image
          className="w-auto h-auto"
          alt="QR code for sponsors"
          src={qr}
          height={150}
          width={150}
        />
      </Link>
    </div>
  );
}
