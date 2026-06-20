import Image from "next/image";
import React from "react";
import BackButton from "../components/BackButton";
import thanksImage from "../assets/latest_events/fe.jpg";

export default function Donation() {
  return (
    <div className="p-10 relative">
      <BackButton href="/" className="flex items-center gap-x-1 mb-8 cursor-pointer" />



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
