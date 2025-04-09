import React from "react";
import Flyer from "./springgala/Flyer";
import Details from "./springgala/Details";
import TicketButton from "./springgala/TicketButton";

export default function SpringGala() {
  return (
    <div className="grid md:grid-cols-2 items-center h-full w-full">
      <div className="p-4 sm:p-10 h-[calc(100svh-4rem)] md:h-auto flex flex-col justify-center items-center order-last md:order-none">
        <Flyer />

        <div className="md:hidden mt-10">
          <TicketButton />
        </div>
      </div>

      <div className="h-full hidden md:flex flex-col items-center justify-center p-10 order-first md:order-none bg-accent space-y-12">
        <Details />

        <TicketButton />
      </div>
    </div>
  );
}
