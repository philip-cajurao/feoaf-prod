import React from "react";
import Flyer from "./springgala/Flyer";
import Details from "./springgala/Details";

export default function SpringGala() {
  return (
    <div className="grid md:grid-cols-2 w-full h-full">
      <div className="relative p-2 h-[calc(100svh-4rem)] flex flex-col justify-center items-center">
        <Flyer />
      </div>

      <div className="h-full flex flex-col w-full items-center justify-center p-10 bg-accent space-y-12">
      <Details />
      </div>
    </div>
  );
}
