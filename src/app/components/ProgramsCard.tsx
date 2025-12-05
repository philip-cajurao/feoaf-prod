import Image from "next/image";
import React from "react";
import image1 from "../assets/latest_events/fe5.jpg";
import image2 from "../assets/latest_events/create.jpg";
import image3 from "../assets/latest_events/sm.jpeg";
import image4 from "../assets/latest_events/ads.jpg";
import image5 from "../assets/latest_events/interest.jpg"; // New Image
import image6 from "../assets/latest_events/scholar.jpg";   // New Image

export default function ProgramsCard() {
  const programs = [
    {
      title: "Advertisements 101",
      image: image1,
      // Color: Secondary (Pink/Purple)
      colorClass: "bg-secondary text-secondary-content",
    },
    {
      title: "Product Ideation",
      image: image2,
      // Color: Primary (Blue)
      colorClass: "bg-primary text-primary-content",
    },
    {
      title: "Social Media Madness",
      image: image3,
      // Color: Accent (Teal/Cyan)
      colorClass: "bg-accent text-accent-content",
    },
    {
      title: "Marketing 101",
      image: image4,
      // Color: Secondary (Pink/Purple)
      colorClass: "bg-secondary text-secondary-content",
    },
    {
      title: "Scholarship Program",
      image: image6, // Swapped to Scholar image
      // Color: Success (Green)
      colorClass: "bg-success text-success-content",
    },
    {
      title: "0% Interest Loan",
      image: image5, // Swapped to Interest image
      // Color: Primary (Blue)
      colorClass: "bg-primary text-primary-content",
    },
  ];

  return (
    <div className="py-12 px-4 grid lg:grid-cols-2 gap-10 w-full max-w-6xl mx-auto">
      {programs.map((program, index) => (
        <div
          key={index}
          className={`
            card w-full max-w-sm shadow-xl overflow-hidden rounded-2xl
            transition-transform duration-300 hover:scale-[1.03] hover:shadow-2xl
            ${index % 2 === 0 ? "lg:justify-self-end" : "lg:justify-self-start"}
          `}
        >
          {/* Image Section */}
          <figure className="h-52 w-full bg-base-100">
            <Image
              alt={program.title}
              placeholder="blur"
              loading="lazy"
              src={program.image}
              className="h-full w-full object-cover"
            />
          </figure>

          {/* Text Section - Solid colorful block */}
          <div className={`card-body text-center p-6 ${program.colorClass}`}>
            <h2 className="text-xl font-extrabold uppercase tracking-wider drop-shadow-sm">
              {program.title}
            </h2>
            <div className="w-12 h-1 bg-current opacity-40 mx-auto mt-2 rounded-full"></div>
          </div>
        </div>
      ))}
    </div>
  );
}