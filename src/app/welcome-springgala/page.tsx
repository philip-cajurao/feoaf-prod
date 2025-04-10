import Image from "next/image";
import Link from "next/link";
import React from "react";
import thanksImage from "../assets/latest_events/fe.jpg";

export default function WelcomeSpringGala() {
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
        See you at the Spring Gala!
      </h2>
      <p className="max-w-2xl mx-auto text-justify">
        Thank you for registering! We&apos;re thrilled to have you join us for
        an evening of elegance, creativity, and connection. Get ready to
        experience stunning visuals, engaging performances, and an atmosphere
        buzzing with inspiration. <br />
        <br />
        Whether you&apos;re here to celebrate, network, or simply soak in the
        magic, this gala promises unforgettable moments. <br />
        <br />
        We can&apos;t wait to see you there!
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
