"use client";

import Image from "next/image";
import Link from "next/link";
import { Clock, MapPin } from "lucide-react";

import summerBootCamp from "../assets/events/summerBootCamp.png";
import galaImage from "../assets/events/GALA.jpg";

export default function UpcomingEvents() {
  const upcomingEvents = [
    {
      id: "summer-bootcamp",
      title: "Entrepreneurship Summer Bootcamp",
      date: "15-19",
      month: "June",
      year: "2026",
      time: "9AM - 2PM",
      location: "The Waverly Club, 15401 Fog Mountain Cir, Haymarket, VA 20169",
      description: "The FEOAF Summer Bootcamp is a fun, hands-on program where youth learn entrepreneurship, financial literacy, and leadership skills.",
      flyerUrl: summerBootCamp.src,
      registrationUrl: "/register/bootcamp"
    },
    {
      id: "annual-gala",
      title: "The FEOAF Gala",
      date: "17",
      month: "Oct",
      year: "2026",
      time: "6:30PM - 11PM",
      location: "Heritage Hunt Country Club, 6901 Arthur Hills Drive, Gainesville, VA 20155",
      description: "The FEOAF Gala is our premier annual fundraising event that supports programs designed to nurture young entrepreneurs.",
      flyerUrl: galaImage.src,
      registrationUrl: "https://givebutter.com/c/X0GXZ6?source=qr&version=1"
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
