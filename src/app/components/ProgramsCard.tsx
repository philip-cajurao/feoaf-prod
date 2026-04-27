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
      href: "/join/academic-scholarship",
    },
    {
      title: "0% Interest Loan",
      image: image5, 
      colorClass: "bg-primary text-primary-content",
      href: "/funding-request",
    },
  ];

  const CardInnerContent = ({ program }) => (
    <>
      <figure className="relative h-60 w-full overflow-hidden bg-base-200">
        <Image
          alt={program.title}
          placeholder="blur"
          loading="lazy"
          src={program.image}
          // Minimal, synchronized image zoom
          className="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
        />
        {/* Subtle, synchronized overlay fade */}
        <div className="absolute inset-0 bg-black/10 mix-blend-multiply transition-opacity duration-300 ease-in-out group-hover:opacity-0"></div>
      </figure>
      
      <div className={`relative z-10 -mt-8 flex-grow rounded-t-[2rem] p-8 text-center shadow-[0_-4px_20px_rgba(0,0,0,0.1)] ${program.colorClass}`}>
        <h2 className="text-xl font-black uppercase tracking-widest drop-shadow-sm">
          {program.title}
        </h2>
        {/* Static underline for a cleaner look */}
        <div className="mx-auto mt-4 h-1.5 w-12 rounded-full bg-current opacity-40"></div>
      </div>
    </>
  );

  return (
    <section className="relative w-full py-20 px-4">
      <div className="mx-auto grid w-full max-w-6xl gap-x-10 gap-y-16 lg:grid-cols-2">
        {programs.map((program, index) => {
          
          // Minimal scale on the parent container, synchronized timing
          const cardClasses = `
            group relative flex flex-col w-full max-w-md mx-auto shadow-lg overflow-hidden rounded-3xl
            transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-2xl
            ${index % 2 === 1 ? "lg:translate-y-12" : ""} 
          `;

          if (program.href) {
            return (
              <Link 
                key={index} 
                href={program.href} 
                className={`${cardClasses} cursor-pointer outline-none focus-visible:ring-4 focus-visible:ring-primary/50`}
              >
                <CardInnerContent program={program} />
              </Link>
            );
          }

          return (
            <div key={index} className={cardClasses}>
              <CardInnerContent program={program} />
            </div>
          );
        })}
      </div>
    </section>
  );
}