"use client"

import Image from "next/image";
import event from "../../assets/latest_events/events.jpg";
import React, { useEffect, useMemo, useState } from "react";

function getTimeLeft(targetDate: Date) {
  const now = new Date();
  const diff = targetDate.getTime() - now.getTime();

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { days, hours, minutes, seconds };
}

export default function EventsBanner() {

  const targetDate = useMemo(() => new Date("2025-12-06T09:30:00"), []);

  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="relative overflow-hidden h-[250px]">
      <Image
        placeholder="blur"
        priority={true}
        alt="Test"
        src={event}
        fill
        className="object-cover object-[25%_35%] brightness-35 -z-10"
      />

      <div className="flex flex-col h-full justify-center items-center">
        <h2 className="text-5xl font-bold">
          <div className="grid place-items-center">
            {/* <div>
              <p className="font-bold text-lg sm:text-2xl text-accent">Our</p>
              <h2 className="font-bold text-3xl sm:text-5xl ml-4 text-neutral-content">
                Events
              </h2>
            </div> */}
            <div>
              <h2 className="font-bold text-4xl sm:text-5xl ml-4 text-neutral-content">
                SAVE<span className="text-accent"> THE DATE</span>!
              </h2>
            </div>
          </div>
        </h2>

        {/* Countdown */}
        <div className="grid grid-flow-col gap-5 mt-4 text-center auto-cols-max">
          <div className="flex flex-col p-2 bg-neutral rounded-lg text-neutral-content">
            <span className="countdown font-mono text-5xl">
              <span style={{ "--value": timeLeft.days } as React.CSSProperties}></span>
            </span>
            days
          </div>
          <div className="flex flex-col p-2 bg-neutral rounded-lg text-neutral-content">
            <span className="countdown font-mono text-5xl">
              <span style={{ "--value": timeLeft.hours } as React.CSSProperties}></span>
            </span>
            hours
          </div>
          <div className="flex flex-col p-2 bg-neutral rounded-lg text-neutral-content">
            <span className="countdown font-mono text-5xl">
              <span style={{ "--value": timeLeft.minutes } as React.CSSProperties}></span>
            </span>
            min
          </div>
          <div className="flex flex-col p-2 bg-neutral rounded-lg text-neutral-content">
            <span className="countdown font-mono text-5xl">
              <span style={{ "--value": timeLeft.seconds } as React.CSSProperties}></span>
            </span>
            sec
          </div>
        </div>
      </div>
    </div>
  );
}
