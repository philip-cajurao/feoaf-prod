"use client"

import Link from "next/link";
import React, { useEffect, useMemo, useState } from "react";
import { UPCOMING_EVENTS, type EventData } from "@/data/events";

function getTimeLeft(targetDate: Date) {
    const now = new Date();
    const diff = targetDate.getTime() - now.getTime();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
    };
}

export default function CountDown() {
    const targetDate = useMemo(() => new Date('2025-12-06T09:30:00'), []);
    const showUpcomingDate = useMemo(() => new Date(targetDate.getTime() + 180000), [targetDate]);
    const cardExpiryDate = useMemo(() => {
        const expiry = new Date(targetDate);
        expiry.setHours(12, 0, 0, 0);
        if(expiry < targetDate) expiry.setDate(expiry.getDate() + 1);
        return expiry;
    }, [targetDate]);

    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    
    const [showUpcomingEvents, setShowUpcomingEvents] = useState(true); 
    const [showHolidayCard, setShowHolidayCard] = useState(true);
    const [isHappeningNow, setIsHappeningNow] = useState(false);

    const [selectedEvent, setSelectedEvent] = useState<EventData | null>(null);

    useEffect(() => {
        const checkTime = () => {
            const now = new Date().getTime();
            setTimeLeft(getTimeLeft(targetDate));
            
            setShowHolidayCard(now < cardExpiryDate.getTime());
            setShowUpcomingEvents(now >= showUpcomingDate.getTime());
            setIsHappeningNow(now >= targetDate.getTime() && now < cardExpiryDate.getTime());
        };
        checkTime();
        const timer = setInterval(checkTime, 1000);
        return () => clearInterval(timer);
    }, [targetDate, showUpcomingDate, cardExpiryDate]);

    useEffect(() => {
        if (selectedEvent) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; }
    }, [selectedEvent]);

    return (
        <div className="mt-8 relative w-full flex flex-col items-center gap-8">
            <style>{`
                .perspective-container { perspective: 1000px; }
                .fade-in-section { animation: fade-in 1s ease-out forwards; opacity: 0; }
                .smooth-exit { transition: all 1.5s cubic-bezier(0.4, 0, 0.2, 1); opacity: 1; max-height: 500px; transform: translateY(0); }
                .smooth-exit.hidden-state { opacity: 0; max-height: 0; margin: 0; transform: translateY(-20px); pointer-events: none; }
                
                @keyframes fade-in { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
                @keyframes modal-pop { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }
                .animate-modal { animation: modal-pop 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards; }
            `}</style>

            {!showUpcomingEvents && (
                <div className={`relative w-full flex flex-col items-center justify-center perspective-container overflow-hidden smooth-exit`}>
                    <div className="flex flex-col items-center justify-center">
                        <div className="h-32 grid place-items-center">
                            <h2 className="font-bold text-4xl sm:text-5xl ml-4 text-neutral text-center">
                                SAVE<span className="text-accent"> THE DATE</span>!
                            </h2>
                        </div>
                        <div className="grid grid-flow-col gap-5 mt-4 text-center auto-cols-max pb-4">
                            {Object.entries(timeLeft).map(([label, value]) => (
                                <div key={label} className="flex flex-col p-2 bg-neutral rounded-lg text-neutral-content">
                                    <span className="countdown font-mono text-5xl">
                                        <span style={{ "--value": value } as React.CSSProperties}></span>
                                    </span>
                                    {label.slice(0, 3)}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {showHolidayCard && (
                <div className={`card w-full max-w-3xl bg-base-100 shadow-2xl overflow-hidden rounded-3xl group transition-all duration-1000 border border-base-200 fade-in-section ${showUpcomingEvents ? '-mt-8' : 'mt-0'}`}>
                    <div className="relative p-8 sm:p-10 pb-16 overflow-hidden">
                        <img 
                            src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop" 
                            alt="Holiday Event Background" 
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/60"></div>

                        <div className="relative z-10 max-w-2xl flex flex-col items-start">
                            {isHappeningNow && (
                                <span className="badge badge-accent badge-lg border-none text-white font-black uppercase tracking-widest mb-6 animate-pulse shadow-lg">
                                    Happening Now
                                </span>
                            )}
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-3">
                                Future Entrepreneurs Of America Foundation
                            </h2>
                            <div className="h-1.5 w-24 bg-accent rounded-full mb-5"></div>
                            <span className="text-xl sm:text-2xl text-white/90 font-semibold tracking-wide">
                                Annual Holiday Event
                            </span>
                        </div>
                    </div>

                    <div className="relative px-8 pb-8 sm:px-10 sm:pb-10 pt-0">
                        <div className="absolute right-8 sm:right-10 -top-16 card bg-white p-4 rounded-2xl shadow-xl text-center min-w-[110px] transform -rotate-10 border border-base-200 z-20">
                            <div className="text-sm font-bold text-accent uppercase tracking-wider">Dec</div>
                            <div className="text-5xl font-black text-base-content leading-none my-1">06</div>
                            <div className="text-base font-medium text-base-content/60">2025</div>
                        </div>
                        <div className="pt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
                            <div className="space-y-6">
                                <div>
                                    <p className="text-lg font-bold text-base-content">9:30 AM – 12:30 PM</p>
                                    <p className="text-sm font-medium text-base-content/60">Please arrive 15 mins early</p>
                                </div>
                                <div>
                                    <p className="text-lg font-bold text-base-content">Hampton Inn Gainesville</p>
                                    <p className="text-sm font-medium text-base-content/60 leading-snug">7300 Atlas Walkway, Gainesville, VA</p>
                                </div>
                            </div>
                            <button className="btn btn-neutral w-full h-auto py-4 min-h-[60px] rounded-2xl flex items-center justify-center gap-3 text-lg font-bold shadow-xl">
                                <span>Get Directions</span>
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {showUpcomingEvents && (
                <div className="w-full max-w-6xl flex flex-col items-center gap-8 fade-in-section pb-12 mt-24">
                    <div className="text-center px-4">
                        <h2 className="text-4xl sm:text-5xl font-extrabold text-neutral mb-2">Upcoming Events</h2>
                        <div className="h-1.5 w-24 bg-accent rounded-full mx-auto"></div>
                        
                        <div className="mt-8 bg-accent/10 border border-accent/20 rounded-2xl p-4 inline-block shadow-sm">
                            <p className="text-lg sm:text-xl font-black text-neutral flex flex-col sm:flex-row items-center justify-center gap-2 leading-snug">
                                <span className="text-2xl hidden sm:inline-block">🚀</span> 
                                <span>
                                    Ready to dive in? <span className="text-accent underline decoration-wavy underline-offset-4">Click any event below</span> to get details and REGISTER! 
                                </span>
                                <span className="text-2xl">👇</span>
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full px-4 items-stretch mt-4">
                        {UPCOMING_EVENTS.map((event) => (
                            <div 
                                key={event.id} 
                                onClick={() => setSelectedEvent(event)} 
                                className="group h-full cursor-pointer"
                            >
                                <div className="card w-full bg-base-100 shadow-xl overflow-hidden rounded-3xl transition-all duration-300 hover:shadow-2xl border border-base-200 hover:-translate-y-2 h-full flex flex-col">
                                    <div className="relative p-6 pb-12 h-44 flex flex-col justify-center overflow-hidden">
                                        <img 
                                            src={event.flyerUrl} 
                                            alt={event.title} 
                                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-300"></div>
                                        
                                        <div className="relative z-10">
                                            <h3 className="text-2xl font-extrabold text-white leading-tight tracking-tight">
                                                {event.title}
                                            </h3>
                                            <div className="h-1 w-16 bg-accent rounded-full my-3"></div>
                                        </div>
                                    </div>

                                    <div className="relative px-6 pb-6 pt-0 bg-base-100 flex-grow">
                                        <div className="absolute right-6 -top-10 card bg-white p-3 rounded-2xl shadow-lg text-center min-w-[80px] border border-base-200 z-20">
                                            <div className="text-xs font-bold text-accent uppercase tracking-wider">{event.month}</div>
                                            <div className={`font-black text-base-content leading-none my-1 ${event.date.length > 2 ? 'text-3xl' : 'text-5xl'}`}>{event.date}</div>
                                        </div>
                                        <div className="pt-10 space-y-3">
                                            <div className="flex items-start space-x-3 opacity-80">
                                                <span className="text-sm font-medium"><strong className="text-neutral">Time:</strong> {event.time}</span>
                                            </div>
                                            <div className="flex items-start space-x-3 opacity-80">
                                                <span className="text-sm font-medium leading-snug"><strong className="text-neutral">Location:</strong> {event.location}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* --- POPUP MODAL OVERLAY --- */}
            {selectedEvent && (
                <div 
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto"
                    onClick={() => setSelectedEvent(null)}
                >
                    <div 
                        className="relative w-full max-w-6xl bg-base-100 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row my-auto animate-modal items-stretch"
                        onClick={(e) => e.stopPropagation()} 
                    >
                        {/* Close Button */}
                        <button 
                            className="btn btn-circle btn-sm absolute top-4 right-4 z-50 border-none bg-black/50 hover:bg-black/80 text-white"
                            onClick={() => setSelectedEvent(null)}
                        >
                            ✕
                        </button>

                        {/* Image Section */}
                        <div className="w-full md:w-auto md:max-w-[55%] shrink-0 border-b md:border-b-0 md:border-r border-base-200 bg-base-100 flex">
                            <img 
                                src={selectedEvent.flyerUrl} 
                                alt={selectedEvent.title} 
                                className="w-full md:w-auto h-auto block max-h-[60vh] md:max-h-[90vh] object-contain object-left"
                            />
                        </div>

                        {/* Details Section */}
                        <div className="w-full flex-1 relative bg-base-100">
                            <div className="md:absolute md:inset-0 p-8 md:p-12 flex flex-col overflow-y-auto">
                                <div>
                                    <div className="badge badge-accent badge-lg font-bold uppercase tracking-wider mb-4 border-none text-white shadow-md">
                                        {selectedEvent.month} {selectedEvent.date}, {selectedEvent.year}
                                    </div>
                                    
                                    <h3 className="text-3xl sm:text-4xl font-extrabold text-base-content leading-tight mb-6">
                                        {selectedEvent.title}
                                    </h3>
                                    
                                    <div className="space-y-4 mb-6">
                                        <div>
                                            <h4 className="text-sm font-bold text-base-content/60 uppercase tracking-wider">Time</h4>
                                            <p className="text-xl font-medium">{selectedEvent.time}</p>
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-bold text-base-content/60 uppercase tracking-wider">Location</h4>
                                            <p className="text-lg font-medium leading-snug">{selectedEvent.location}</p>
                                        </div>
                                    </div>

                                    <div className="h-1 w-16 bg-accent rounded-full mb-6"></div>

                                    <p className="text-base text-base-content/80 leading-relaxed mb-8 whitespace-pre-wrap">
                                        {selectedEvent.description}
                                    </p>
                                </div>

                                {/* --- REGISTER BUTTON (Updated to use dynamic URL) --- */}
                                <div className="mt-auto pt-6 border-t border-base-200">
                                    {/* Make sure 'registrationUrl' is added to your EventData interface and data objects */}
                                    <Link href={(selectedEvent as any).registrationUrl || "#"} target="_blank" className="w-full">
                                        <button className="btn btn-accent w-full py-4 h-auto rounded-2xl text-lg font-bold text-white shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                                            Register Now
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}