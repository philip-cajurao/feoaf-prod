import Image from "next/image";
import Link from "next/link";
import React from "react";
import thanksImage from "../assets/latest_events/fe.jpg";

export default function SpringGalaSponsor() {
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
        Your support means the world to us! By joining as a sponsor, you&apos;re
        not just contributing to an unforgettable evening—you&apos;re empowering
        creativity, connection, and celebration. Your generosity helps us craft
        an event that brings people together, inspires fresh ideas, and creates
        lasting memories. <br />
        <br />
        We are honored to have you on board and can&apos;t wait to showcase the
        incredible impact of your support. Here&apos;s to a remarkable gala,
        made possible by champions like you!
        <br />
        <br />
        Your support means the world to us! By joining as a sponsor, you&apos;re
        not just contributing to an unforgettable evening—you&apos;re empowering
        creativity, connection, and celebration. Your generosity helps us craft
        an event that brings people together, inspires fresh ideas, and creates
        lasting memories. <br />
        <br />
        We are honored to have you on board and can&apos;t wait to showcase the
        incredible impact of your support. Here&apos;s to a remarkable gala,
        made possible by champions like you!
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
