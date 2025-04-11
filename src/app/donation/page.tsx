import Image from "next/image";
import Link from "next/link";
import React from "react";
import thanksImage from "../assets/latest_events/fe.jpg";

export default function Donation() {
  return (
    <div className="p-10 relative">
      <Link href="/" className="flex items-center gap-x-1 mb-8 cursor-pointer">
        <svg
          className="w-6 h-6 text-gray-800"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 12h14M5 12l4-4m-4 4 4 4"
          />
        </svg>
        <span>Back to home</span>
      </Link>

      <h2 className="text-center font-bold text-4xl text-accent mb-4">
        THANK YOU!
      </h2>
      <p className="max-w-2xl mx-auto text-justify">
        On behalf of everyone at <span className="font-bold">Future Entrepreneurs of America Foundation</span>,
        Inc., we extend our deepest gratitude for your generous support.
        <br />
        <br /> Your donation plays a vital role in empowering the next
        generation of entrepreneurs. Because of your kindness, we are able to
        provide aspiring young leaders with the tools, mentorship, and
        opportunities they need to turn their ideas into impact.
        <br />
        <br />
        Your belief in our mission fuels our work and inspires the future. Thank
        you for being a part of this journey with us.
      </p>
      <div className="h-[300px] overflow-hidden my-8 max-w-2xl mx-auto border relative">
        <Image
          src={thanksImage}
          alt="Thank you sponsor"
          placeholder="blur"
          fill
          className="object-cover object-center"
        />
      </div>
    </div>
  );
}
