"use client"

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

export default function CountDown() {
    const targetDate = useMemo(() => new Date("2025-12-06T09:30:00"), []);

    // Initialize with static 0s to prevent hydration mismatch.
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    
    // Add a mounted state to control visibility
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // Set mounted to true and calculate time immediately on the client
        setMounted(true);
        setTimeLeft(getTimeLeft(targetDate));

        const timer = setInterval(() => {
            setTimeLeft(getTimeLeft(targetDate));
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    return (
        <div className="mt-8">
            <div className="flex flex-col h-full justify-center items-center">
                <h2 className="text-5xl font-bold">
                    <div className="grid place-items-center">
                        <div>
                            <h2 className="font-bold text-4xl sm:text-5xl ml-4 text-neutral">
                                SAVE<span className="text-accent"> THE DATE</span>!
                            </h2>
                            <p className="text-neutral">
                                Upcoming event
                            </p>
                        </div>
                    </div>
                </h2>

                {/* Countdown */}
                <div className="grid grid-flow-col gap-5 mt-4 text-center auto-cols-max">
                    {/* Days - Immediate drop & fade in */}
                    <div className={`flex flex-col p-2 bg-neutral rounded-lg text-neutral-content transition-all duration-500 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
                        <span className="countdown font-mono text-5xl">
                            <span style={{ "--value": timeLeft.days } as React.CSSProperties}></span>
                        </span>
                        days
                    </div>
                    {/* Hours - Delayed drop & fade in */}
                    <div className={`flex flex-col p-2 bg-neutral rounded-lg text-neutral-content transition-all duration-500 delay-200 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
                        <span className="countdown font-mono text-5xl">
                            <span style={{ "--value": timeLeft.hours } as React.CSSProperties}></span>
                        </span>
                        hours
                    </div>
                    {/* Minutes - More delayed drop & fade in */}
                    <div className={`flex flex-col p-2 bg-neutral rounded-lg text-neutral-content transition-all duration-500 delay-500 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
                        <span className="countdown font-mono text-5xl">
                            <span style={{ "--value": timeLeft.minutes } as React.CSSProperties}></span>
                        </span>
                        min
                    </div>
                    {/* Seconds - Most delayed drop & fade in */}
                    <div className={`flex flex-col p-2 bg-neutral rounded-lg text-neutral-content transition-all duration-500 delay-700 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
                        <span className="countdown font-mono text-5xl">
                            <span style={{ "--value": timeLeft.seconds } as React.CSSProperties}></span>
                        </span>
                        sec
                    </div>
                </div>
            </div>
        </div>
    )
}