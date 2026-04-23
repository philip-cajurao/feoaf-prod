"use client"

import Image from "next/image";
import Link from "next/link";
import React from "react";
import image1 from "../assets/latest_events/fe5.jpg";
import image2 from "../assets/latest_events/create.jpg";
import image3 from "../assets/latest_events/sm.jpeg";
import image4 from "../assets/latest_events/ads.jpg";
import image5 from "../assets/latest_events/interest.jpg"; 
import image6 from "../assets/latest_events/scholar.jpg";  

export default function ProgramsCard() {
  const programs = [
    {
      title: "Advertisements 101",
      image: image1,
      colorClass: "bg-secondary text-secondary-content",
    },
    {
      title: "Product Ideation",
      image: image2,
      colorClass: "bg-primary text-primary-content",
    },
    {
      title: "Social Media Madness",
      image: image3,
      colorClass: "bg-accent text-accent-content",
    },
    {
      title: "Marketing 101",
      image: image4,
      colorClass: "bg-secondary text-secondary-content",
    },
    {
      title: "Scholarship Program",
      image: image6, 
      colorClass: "bg-success text-success-content",
      href: "/join/academic-scholarship", // Added the link here
    },
    {
      title: "0% Interest Loan",
      image: image5, 
      colorClass: "bg-primary text-primary-content",
      href: "/funding-request", // This tells the code to make it a link
    },
  ];

  return (
    <div className="py-12 px-4 grid lg:grid-cols-2 gap-10 w-full max-w-6xl mx-auto">
      {programs.map((program, index) => {
        // Shared classes for both regular cards and clickable links
        const cardClasses = `
          card w-full max-w-sm shadow-xl overflow-hidden rounded-2xl block
          transition-transform duration-300 hover:scale-[1.03] hover:shadow-2xl
          ${index % 2 === 0 ? "lg:justify-self-end" : "lg:justify-self-start"}
        `;

        // If an href exists, wrap it in a Next.js Link
        if (program.href) {
          return (
            <Link 
              key={index} 
              href={program.href} 
              className={`${cardClasses} cursor-pointer hover:ring-4 hover:ring-primary/50`}
            >
              <figure className="h-52 w-full bg-base-100">
                <Image
                  alt={program.title}
                  placeholder="blur"
                  loading="lazy"
                  src={program.image}
                  className="h-full w-full object-cover"
                />
              </figure>
              <div className={`card-body text-center p-6 ${program.colorClass}`}>
                <h2 className="text-xl font-extrabold uppercase tracking-wider drop-shadow-sm">
                  {program.title}
                </h2>
                <div className="w-12 h-1 bg-current opacity-40 mx-auto mt-2 rounded-full"></div>
              </div>
            </Link>
          );
        }

        // Standard card for items without links
        return (
          <div key={index} className={cardClasses}>
            <figure className="h-52 w-full bg-base-100">
              <Image
                alt={program.title}
                placeholder="blur"
                loading="lazy"
                src={program.image}
                className="h-full w-full object-cover"
              />
            </figure>
            <div className={`card-body text-center p-6 ${program.colorClass}`}>
              <h2 className="text-xl font-extrabold uppercase tracking-wider drop-shadow-sm">
                {program.title}
              </h2>
              <div className="w-12 h-1 bg-current opacity-40 mx-auto mt-2 rounded-full"></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}