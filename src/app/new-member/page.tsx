import Image from "next/image";
import Link from "next/link";
import React from "react";
import thanksImage from "../assets/latest_events/newmember.jpeg";

export default function page() {
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
        Welcome aboard, and thank you for registering with the Future
        Entrepreneurs of America Foundation!
        <br />
        <br />
        We’re excited to have you as part of our growing community of future
        entrepreneurs. By joining us, you’re taking a bold step toward turning
        your ideas into impact—and we’re here to guide and support you every
        step of the way.
        <br />
        <br />
        Stay tuned for upcoming events, learning sessions, and opportunities
        designed to help you grow your skills, expand your network, and bring
        your vision to life.
        <br />
        <br />
        If you have any questions or just want to say hi, feel free to reach out
        anytime—we’d love to hear from you!
        <br />
        <br />
        Let’s build the future together.
      </p>
      <div className="h-[330px] overflow-hidden my-8 max-w-2xl mx-auto border relative">
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
