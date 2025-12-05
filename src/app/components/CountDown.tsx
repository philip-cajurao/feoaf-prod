"use client"

import Link from "next/link";
import React, { useEffect, useMemo, useState } from "react";

// DATA FOR UPCOMING EVENTS
const UPCOMING_EVENTS = [
    { title: "Young Entrepreneurs Spring Fair", date: "TBD", subtitle: "Spring 2026" },
    { title: "Future Entrepreneurs Summer Bootcamp", date: "TBD", subtitle: "Summer 2026" },
    { title: "Fall Gala Event", date: "TBD", subtitle: "Fall 2026" },
];

function getTimeLeft(targetDate) {
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
    // 10 Minutes in milliseconds (Production Value)
    const DELAY_MS = 10 * 60 * 1000; 

    // PRODUCTION: Target date set to Dec 06, 2025 at 9:30 AM
    const targetDate = useMemo(() => {
        return new Date('2025-12-06T09:30:00');
    }, []);

    // Initialize with static 0s to prevent hydration mismatch.
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        setTimeLeft(getTimeLeft(targetDate));

        const timer = setInterval(() => {
            setTimeLeft(getTimeLeft(targetDate));
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    const isFinished = timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0;

    // State to trigger the "Happening Now" entrance
    const [finishedTrigger, setFinishedTrigger] = useState(false);
    
    // State for the white screen flash
    const [flash, setFlash] = useState(false);

    // State for switching to "Upcoming Events"
    const [showUpcomingEvents, setShowUpcomingEvents] = useState(false);

    useEffect(() => {
        if (isFinished) {
            // 1. Trigger the "Let's Go" transition (Slam effect)
            const slamTimeout = setTimeout(() => {
                setFinishedTrigger(true);
                setFlash(true); 
                setTimeout(() => setFlash(false), 300);
            }, 800);

            // 2. Set the timer to switch to "Upcoming Events"
            const upcomingEventsTimeout = setTimeout(() => {
                setShowUpcomingEvents(true);
            }, DELAY_MS); 

            return () => {
                clearTimeout(slamTimeout);
                clearTimeout(upcomingEventsTimeout);
            };
        }
    }, [isFinished, DELAY_MS]);

    return (
        <div className="mt-8 relative w-full flex flex-col items-center gap-12">
            
            {/* INJECTED STYLES FOR ANIMATIONS */}
            <style>{`
                .perspective-container {
                    perspective: 1000px;
                }
                .slam-enter {
                    animation: slam-in 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
                }
                .shake-text {
                    animation: shake 0.5s ease-in-out 0.2s; 
                }
                .flash-overlay {
                    animation: flash-bang 0.3s ease-out forwards;
                }
                .fade-in-section {
                    animation: fade-in 1s ease-out forwards;
                    opacity: 0;
                }
                
                @keyframes slam-in {
                    0% { opacity: 0; transform: scale(5) rotateX(20deg); filter: blur(10px); }
                    40% { opacity: 1; filter: blur(0px); }
                    60% { transform: scale(0.9) rotateX(0deg); } 
                    80% { transform: scale(1.05); } 
                    100% { transform: scale(1); }
                }
                @keyframes shake {
                    0%, 100% { transform: translateX(0); }
                    20% { transform: translateX(-5px); }
                    40% { transform: translateX(5px); }
                    60% { transform: translateX(-3px); }
                    80% { transform: translateX(3px); }
                }
                @keyframes flash-bang {
                    0% { background-color: rgba(255, 255, 255, 0.9); }
                    100% { background-color: transparent; }
                }
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>

            {/* WHITE FLASH OVERLAY */}
            {flash && (
                <div className="fixed inset-0 pointer-events-none z-50 flash-overlay"></div>
            )}

            {/* CONDITIONAL RENDERING: SHOW MAIN EVENT OR UPCOMING EVENTS */}
            {!showUpcomingEvents ? (
                // -----------------------------------------------------
                // VIEW 1: COUNTDOWN / LET'S GO / MAIN CARD
                // -----------------------------------------------------
                <>
                    <div className="flex flex-col justify-center items-center w-full">
                        <div className="grid place-items-center w-full relative h-32 perspective-container">
                            
                            {/* "Save the Date" Header */}
                            <div className={`absolute transition-all duration-700 ease-in-out transform ${isFinished ? 'opacity-0 scale-150 blur-sm pointer-events-none' : 'opacity-100 scale-100'}`}>
                                <h2 className="font-bold text-4xl sm:text-5xl ml-4 text-neutral text-center">
                                    <>SAVE<span className="text-accent"> THE DATE</span>!</>
                                </h2>
                                <p className="text-neutral text-xl text-center mt-2">
                                    Upcoming event in
                                </p>
                            </div>

                            {/* "Happening Now" Header */}
                            {isFinished && (
                                <div className={`absolute z-10 w-full px-4 flex flex-col items-center justify-center ${finishedTrigger ? 'slam-enter' : 'opacity-0'}`}>
                                    <h2 className={`font-black italic tracking-tighter text-6xl sm:text-8xl text-accent text-center transform leading-none mb-2 ${finishedTrigger ? 'shake-text' : ''}`}>
                                        LET&apos;S GO!
                                    </h2>
                                    <p className="font-bold text-lg sm:text-2xl text-neutral text-center max-w-3xl leading-snug">
                                        The Annual Holiday Event of the Future Entrepreneurs of America Foundation is happening now.
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* Countdown Digits */}
                        <div className={`grid grid-flow-col gap-5 mt-4 text-center auto-cols-max transition-all duration-700 ease-in-out transform ${!isFinished ? 'opacity-100 scale-100' : 'opacity-0 scale-125 pointer-events-none'}`}>
                            <div className={`flex flex-col p-2 bg-neutral rounded-lg text-neutral-content transition-all duration-500 ease-out ${mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                                <span className="countdown font-mono text-5xl">
                                    <span style={{ "--value": timeLeft.days }}></span>
                                </span>
                                days
                            </div>
                            <div className={`flex flex-col p-2 bg-neutral rounded-lg text-neutral-content transition-all duration-500 delay-200 ease-out ${mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                                <span className="countdown font-mono text-5xl">
                                    <span style={{ "--value": timeLeft.hours }}></span>
                                </span>
                                hours
                            </div>
                            <div className={`flex flex-col p-2 bg-neutral rounded-lg text-neutral-content transition-all duration-500 delay-500 ease-out ${mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                                <span className="countdown font-mono text-5xl">
                                    <span style={{ "--value": timeLeft.minutes }}></span>
                                </span>
                                min
                            </div>
                            <div className={`flex flex-col p-2 bg-neutral rounded-lg text-neutral-content transition-all duration-500 delay-700 ease-out ${mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                                <span className="countdown font-mono text-5xl">
                                    <span style={{ "--value": timeLeft.seconds }}></span>
                                </span>
                                sec
                            </div>
                        </div>
                    </div>

                    {/* Main Event Card */}
                    <div className="card w-full max-w-3xl bg-base-100 shadow-2xl overflow-hidden rounded-3xl group transition-all duration-300 hover:shadow-3xl border border-base-200">
                        <div className="relative p-8 sm:p-10 pb-16 bg-radial-[at_0%_0%] from-black via-black to-accent to-140%">
                            <div className="relative max-w-2xl">
                                <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-2 tracking-tight">
                                    Future Entrepreneurs Of America Foundation
                                </h2>
                                <div className="h-1.5 w-24 bg-accent rounded-full my-4"></div>
                                <span className="text-xl sm:text-2xl text-white/90 font-semibold tracking-wide">
                                    Annual Holiday Event
                                </span>
                            </div>
                        </div>

                        <div className="relative px-8 pb-8 sm:px-10 sm:pb-10 pt-0">
                            <div className="absolute right-8 sm:right-10 -top-16 card bg-white p-4 rounded-2xl shadow-xl text-center min-w-[110px] transform -rotate-10 hover:rotate-0 hover:scale-110 transition-transform duration-300 border border-base-200">
                                <div className="text-sm font-bold text-accent uppercase tracking-wider">Dec</div>
                                <div className="text-5xl font-black text-base-content leading-none my-1">06</div>
                                <div className="text-base font-medium text-base-content/60">2025</div>
                            </div>

                            <div className="pt-12 sm:pt-8 md:pt-16 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-end">
                                <div className="space-y-6 mt-16 sm:mt-0">
                                    <div className="flex items-center space-x-4">
                                        <div>
                                            <p className="text-lg font-bold text-base-content">9:30 AM – 12:30 PM</p>
                                            <p className="text-sm font-medium text-base-content/60">Please arrive 15 mins early</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <div>
                                            <p className="text-lg font-bold text-base-content">Hampton Inn Gainesville</p>
                                            <p className="text-sm font-medium text-base-content/60 leading-snug">7300 Atlas Walkway, Gainesville, VA</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex w-full">
                                    <Link href={"https://maps.app.goo.gl/Lf49zsDfTvVDt9S29"} target="__blank" className="w-full">
                                        <button className="btn btn-neutral w-full h-auto py-4 min-h-[60px] rounded-2xl flex items-center justify-center gap-3 text-lg font-bold hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-xl">
                                            <span>Get Directions</span>
                                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                                <path fillRule="evenodd" d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                // -----------------------------------------------------
                // VIEW 2: UPCOMING EVENTS (Shows after delay)
                // -----------------------------------------------------
                <div className="w-full max-w-6xl flex flex-col items-center gap-8 fade-in-section pb-12">
                    
                    {/* New Header */}
                    <div className="text-center">
                        <h2 className="text-4xl sm:text-5xl font-extrabold text-neutral mb-2">
                            Upcoming Events
                        </h2>
                        <div className="h-1.5 w-24 bg-accent rounded-full mx-auto"></div>
                        <p className="text-lg text-neutral/70 mt-4">
                            Stay tuned for what&apos;s coming next.
                        </p>
                    </div>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full px-4">
                        {UPCOMING_EVENTS.map((event, index) => (
                            <div key={index} className="card w-full bg-base-100 shadow-xl overflow-hidden rounded-3xl group transition-all duration-300 hover:shadow-2xl border border-base-200 hover:-translate-y-2">
                                
                                {/* Dark Header Section */}
                                <div className="relative p-6 pb-12 bg-radial-[at_0%_0%] from-black via-black to-accent to-140% h-48 flex flex-col justify-start">
                                    <h3 className="text-2xl font-extrabold text-white leading-tight tracking-tight">
                                        {event.title}
                                    </h3>
                                    {/* Divider */}
                                    <div className="h-1 w-16 bg-accent rounded-full my-3"></div>
                                    <span className="text-sm sm:text-base text-white/90 font-semibold tracking-wide opacity-80">
                                        {event.subtitle}
                                    </span>
                                </div>

                                {/* Content Section */}
                                <div className="relative px-6 pb-6 pt-0 bg-base-100 flex-grow">
                                    
                                    {/* Floating Date Badge */}
                                    <div className="absolute right-6 -top-10 card bg-white p-3 rounded-2xl shadow-lg text-center min-w-[80px] transform group-hover:scale-110 transition-transform duration-300 border border-base-200">
                                        <div className="text-xs font-bold text-accent uppercase tracking-wider">Date</div>
                                        <div className="text-2xl font-black text-base-content leading-none my-1">{event.date}</div>
                                    </div>

                                    {/* Placeholder Details */}
                                    <div className="pt-10 space-y-3">
                                        <div className="flex items-center space-x-3 opacity-60">
                                            <div className="w-8 h-8 rounded-full bg-neutral/10 flex items-center justify-center">
                                                 <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                            </div>
                                            <span className="text-sm font-medium">Time: TBA</span>
                                        </div>
                                        <div className="flex items-center space-x-3 opacity-60">
                                            <div className="w-8 h-8 rounded-full bg-neutral/10 flex items-center justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                            </div>
                                            <span className="text-sm font-medium">Location: TBA</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}