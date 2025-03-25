import { Metadata } from "next";
import Image from "next/image";
import React from "react";
import qr from "../assets/qr.png";

export const metadata: Metadata = {
  title: "Sponsors | Future Entrepreneurs Of America Foundation",
  description: "...",
};

export default function Sponsors() {
  return (
    <div className="p-10">
      <div className="text-center mb-4">
        <p>
          Thank you to our Spring 2025 Gala Event-The Launch of Future
          Ettepreneurs Foundation.
        </p>
      </div>
      <div className="flex justify-evenly">
        <div className="font-bold text-4xl">Fortune Homes Construction</div>
        <div className="font-bold text-4xl">PML of Fairfax</div>
      </div>
      <div className="flex flex-col text-center items-center space-y-4 my-8">
        <p>Make a difference in each child’s future. <br /> Be one of our sponsors.</p>
        <Image alt="QR code for sponsors" src={qr} height={150} width={150} />
      </div>
    </div>
  );
}
