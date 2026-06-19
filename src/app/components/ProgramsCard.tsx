"use client"

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import image1 from "../assets/latest_events/fe5.jpg";
import image2 from "../assets/latest_events/create.jpg";
import image4 from "../assets/latest_events/ads.jpg";
import image5 from "../assets/latest_events/interest.jpg"; 
import image6 from "../assets/latest_events/scholar.jpg";  

export default function ProgramsCard() {
  /* OLD PROGRAMS ARRAY (COMMENTED OUT)
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
      colorClass: "bg-success text-accent-content",
    },
    {
      title: "Scholarship Program",
      image: image6, 
      colorClass: "bg-success text-success-content",
      href: "/join/academic-scholarship",
    },
    {
      title: "Marketing 101",
      image: image4,
      colorClass: "bg-secondary text-secondary-content",
    },
    {
      title: "0% Interest Loan",
      image: image5, 
      href: "/funding-request",
      colorClass: "bg-primary text-primary-content",
    },
  ];
  */

  // NEW UPDATED PROGRAMS ARRAY
  const programs = [
    {
      title: "Youth Bootcamps",
      image: image1,
      colorClass: "bg-secondary text-secondary-content",
      href: "/bootcamps", 
    },
    {
      title: "Community Outreach",
      image: image2,
      colorClass: "bg-primary text-primary-content",
      href: "/outreach", 
    },
    {
      title: "Bootcamp Scholarships",
      image: image6, 
      colorClass: "bg-success text-success-content",
      href: "/join/academic-scholarship", 
    },
    {
      title: "Youth Business Funding",
      image: image5, 
      colorClass: "bg-accent text-primary-content",
      href: "/funding-request", 
    },
    {
      title: "Youth Mentorship",
      image: image4,
      colorClass: "bg-secondary text-secondary-content",
    },
  ];

  interface ProgramType {
    title: string;
    image: StaticImageData;
    colorClass: string;
    href?: string;
  }

  const CardInnerContent = ({ program }: { program: ProgramType }) => (
    <>
      <figure className="relative h-60 w-full overflow-hidden bg-base-200">
        <Image
          alt={program.title}
          placeholder="blur"
          loading="lazy"
          src={program.image}
          className="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/10 mix-blend-multiply transition-opacity duration-300 ease-in-out group-hover:opacity-0"></div>
      </figure>
      
      <div className={`relative z-10 -mt-8 flex-grow rounded-t-[2rem] p-8 text-center shadow-[0_-4px_20px_rgba(0,0,0,0.1)] ${program.colorClass}`}>
        <h2 className="text-xl font-black uppercase tracking-widest drop-shadow-sm">
          {program.title}
        </h2>
        <div className="mx-auto mt-4 h-1.5 w-12 rounded-full bg-current opacity-40"></div>
      </div>
    </>
  );

  return (
    <section className="relative w-full py-24 px-4 sm:px-0">
      {/* Switched to flex flex-wrap with justify-center. 
        On large screens, the max-width of the items dictates 3 per row, 
        leaving the bottom 2 to perfectly align in the center.
      */}
      <div className="mx-auto flex flex-wrap justify-center w-full max-w-7xl gap-x-12 gap-y-24">
        {programs.map((program, index) => {
          
          // Added fixed basis sizing to act like a 3-column layout on desktop, 
          // 2-column on tablet, and full width on mobile.
          const cardClasses = `
            group relative flex flex-col w-full max-w-md shadow-2xl border shadow-black/50 overflow-hidden rounded-3xl
            transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-4xl
            basis-full md:basis-[calc(50%-1.5rem)] lg:basis-[calc(33.333%-2rem)]
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