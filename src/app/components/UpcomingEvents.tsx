"use client";

import Image from "next/image";
import Link from "next/link";
import { Clock, MapPin } from "lucide-react";

export default function UpcomingEvents() {
  const upcomingEvents = [
    {
      id: "holiday-party",
      title: "Holiday Party",
      date: "TBA",
      month: "TBA",
      year: "2026",
      time: "TBA",
      location: "TBA",
      description: "Join us for our year-end Holiday Party celebration where we recognize the accomplishments of our young entrepreneurs, enjoy festive activities, and celebrate a wonderful year of growth.",
      flyerUrl: "/events/holiday/IMG_4627.jpg",
      registrationUrl: "/events"
    }
  ];

  return (
    <section id="events" className="bg-base-200 py-24 px-6 border-t border-base-300">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col justify-between items-center mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold italic text-center">Upcoming Events</h2>
            <div className="h-1.5 w-24 bg-accent mt-2 mx-auto" />
          </div>
          <p className="text-lg opacity-90 max-w-md text-center">
            Secure your spot in our upcoming workshops and networking sessions.
          </p>
        </div>

        <div className={`grid grid-cols-1 ${upcomingEvents.length > 1 ? 'md:grid-cols-2' : 'max-w-md mx-auto'} gap-8`}>
          {upcomingEvents.map((event) => (
            <Link
              key={event.id}
              href="/events"
              className="group flex flex-col h-full max-w-sm mx-auto bg-white rounded-2xl overflow-hidden border border-black/50 transition-all hover:border-accent hover:shadow-none shadow-2xl cursor-pointer"
            >
              {/* Image Wrapper */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={event.flyerUrl}
                  alt={event.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 flex flex-col items-center justify-center bg-white text-black px-3 py-1 rounded-lg shadow-lg border border-black/50">
                  <span className="text-xs font-bold uppercase leading-none">{event.month}</span>
                  <span className="text-xl font-black">{event.date}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors line-clamp-2">
                  {event.title}
                </h3>

                <div className="space-y-2 mb-4 text-sm opacity-80">
                  <div className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span className="line-clamp-2">{event.location}</span>
                  </div>
                </div>

                <p className="text-sm opacity-70 line-clamp-3 flex-grow">
                  {event.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
