import React from "react";

// --- Data Definitions ---

const programs = [
  {
    title: "Spring Festival",
    description:
      "Kids showcase their products and services in a festival type event with various vendors. Expected attendance: ~500.",
  },
  {
    title: "Summer Bootcamp",
    description:
      "Successful Business Owners, Bankers, and Community Leaders train kids in business aspects and entrepreneurship skills.",
  },
  {
    title: "Fall Gala Event",
    description:
      "Celebrates our mission, honors supporters, and recognizes sponsors. A night to strengthen our ability to serve.",
  },
  {
    title: "Holiday Event",
    description:
      "Year-end celebration. Sponsors are invited to participate in the “SHARKTANK” (a famous part of FEOAF events).",
  },
  {
    title: "Cocktail for A Cause",
    description:
      "A community event for sponsors to mingle, socialize, and have fun in a “Community Auction Fundraising”.",
  },
];

const annualTiers = [
  {
    name: "PLATINUM SPONSOR",
    price: "$5,000",
    period: "/year",
    tagline: "Greatest impact — Highest recognition",
    features: [
      "Premier logo placement on all event materials",
      "Complimentary vendor table at all major events",
      "Opportunity to speak at all major events",
      "Featured on website, social media, & newsletters",
      "Name/logo on certificates for kids",
      "Option to include branded giveaways in kids’ bags",
      "Photo with the kids (optional)",
      "(4) VIP-Tickets for our major events",
    ],
    highlight: true,
  },
  {
    name: "GOLD SPONSOR",
    price: "$2,500",
    period: "/year",
    tagline: "Strong visibility & community impact",
    features: [
      "Logo displayed on event materials",
      "Recognition on website and social media",
      "Opportunity to speak at 2 major events",
      "Verbal recognition during the program",
      "Name listed in take-home flyers",
      "Option to include small giveaway items",
      "(2) VIP-Tickets for our major events",
    ],
    highlight: false,
  },
  {
    name: "SILVER SPONSOR",
    price: "$1,000",
    period: "/year",
    tagline: "Great support for young entrepreneurs",
    features: [
      "Name listed on event materials",
      "Recognition on social media",
      "Verbal recognition during the program",
      "Name included in event flyer",
      "(2) Tickets for our major events",
    ],
    highlight: false,
  },
  {
    name: "BRONZE SPONSOR",
    price: "$500",
    period: "/year",
    tagline: "Valued Support",
    features: [
      "Name featured in thank-you post",
      "Listed on event flyer as a supporter",
      "Verbal recognition during the program",
    ],
    highlight: false,
  },
  {
    name: "COMMUNITY FRIEND",
    price: "Any Amount",
    period: "",
    tagline: "Every dollar helps empower a child",
    features: ["Recognition on Social Media"],
    highlight: false,
  },
];

const singleEventTiers = [
  {
    name: "Platinum Sponsorship",
    price: "$1,000",
    features: [
      "Everything in Gold Sponsorship package",
      "Opportunity to speak in front and talk about your business",
      "Opportunity to have a picture with the kids of FEOAF",
      "4 VIP Event Tickets",
    ],
  },
  {
    name: "Gold Sponsorship",
    price: "$500",
    features: [
      "Everything in Bronze Sponsorship Package",
      "A table to display your items and marketing materials",
      "2 VIP Event Tickets",
    ],
  },
  {
    name: "Bronze Sponsorship",
    price: "$250",
    features: [
      "Mentioned in all marketing materials (social media, flyers, brochures)",
      "Recognition in the actual program",
      "1 VIP Event Ticket",
    ],
  },
  {
    name: "Community Friends",
    price: "Any Amount",
    features: [
      "A thank you mention of your name/business during the event",
      "We are always grateful for any amount",
    ],
  },
];

const CheckIcon = () => (
  <svg
    className="h-5 w-5 text-accent shrink-0 mr-3 mt-0.5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.5}
      d="M5 13l4 4L19 7"
    />
  </svg>
);

const StarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-4 h-4 text-accent shrink-0 mt-1 mr-2"
  >
    <path
      fillRule="evenodd"
      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
      clipRule="evenodd"
    />
  </svg>
);

export default function SponsorshipOpportunities() {
  return (
    <div className="text-base-content">
      {/* 1. Programs Context */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold sm:text-4xl tracking-tight">
              Programs & Events You Support
            </h2>
            <p className="mt-4 text-lg text-base-content/80 max-w-3xl mx-auto leading-relaxed">
              Your sponsorship directly funds these impactful initiatives for our
              future leaders.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {programs.map((program, index) => (
              <div
                key={index}
                className="card rounded-md bg-base-100 shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-accent h-full"
              >
                <div className="card-body p-8">
                  <h3 className="card-title text-xl font-bold mb-3">
                    {program.title}
                  </h3>
                  <p className="text-base-content/70 leading-relaxed">
                    {program.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Single Event Sponsorships - Updated Style (Moved up) */}
      <section className="py-24 bg-neutral text-neutral-content">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="badge badge-accent font-bold uppercase tracking-wide mb-4 p-4 text-neutral">
              Single Event
            </div>
            <h2 className="text-4xl font-extrabold tracking-tight text-white">
              One Event Only Sponsorship
            </h2>
            <p className="mt-4 text-lg text-neutral-content/70 max-w-2xl mx-auto leading-relaxed">
              Support a specific major event like our Gala or Festival.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {singleEventTiers.map((tier, idx) => (
              <div
                key={idx}
                className="card rounded-md bg-base-100 text-base-content shadow-xl border-t-8 border-accent hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full"
              >
                <div className="card-body p-6">
                  <h3 className="card-title text-xl font-bold min-h-[3.5rem] items-start">
                    {tier.name}
                  </h3>
                  <div className="my-4">
                    <p className="text-3xl font-extrabold text-accent">
                      {tier.price}
                    </p>
                    <p className="text-xs text-base-content/50 font-semibold uppercase mt-1">
                      One-time
                    </p>
                  </div>
                  <div className="divider my-2"></div>
                  <ul className="space-y-3 flex-1">
                    {tier.features.map((feature, fIdx) => (
                      <li
                        key={fIdx}
                        className="text-sm text-base-content/70 flex items-start leading-snug"
                      >
                        <StarIcon />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="card-actions mt-6">
                    <a
                       href="mailto:feoafoundation@gmail.com"
                       className="btn btn-outline btn-accent btn-sm btn-block rounded-md"
                    >
                      Select
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Annual Sponsorships (Moved down) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="badge badge-accent badge-outline font-bold uppercase tracking-wide mb-4 p-4">
            Annual Packages
          </div>
          <h2 className="text-4xl font-extrabold tracking-tight">
            Annual Sponsorship
          </h2>
          <p className="mt-4 text-lg text-base-content/70 max-w-2xl mx-auto leading-relaxed">
            Year-round partnership and recognition.
          </p>
        </div>

        <div className="grid gap-8 lg:gap-10 lg:grid-cols-3 items-start">
          {annualTiers.map((tier, idx) => (
            <div
              key={idx}
              className={`card rounded-md bg-base-100 h-full ${
                tier.highlight
                  ? "border-2 border-accent shadow-2xl scale-100 lg:scale-105 overflow-visible"
                  : "border border-base-200 shadow-lg hover:shadow-xl transition-shadow"
              }`}
            >
              <div className="card-body p-8 relative">
                {tier.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="badge badge-accent badge-lg font-bold shadow-md">
                      MOST POPULAR
                    </div>
                  </div>
                )}
                <div className="mb-6 border-b border-base-200 pb-6">
                  <h3 className="card-title text-2xl font-bold mb-2">
                    {tier.name}
                  </h3>
                  <p className="text-sm font-medium uppercase tracking-wider text-base-content/60">
                    {tier.tagline}
                  </p>
                </div>
                <div className="mb-8 flex items-baseline">
                  <span className="text-4xl font-extrabold text-accent">
                    {tier.price}
                  </span>
                  <span className="text-base-content/60 font-semibold ml-2">
                    {tier.period}
                  </span>
                </div>
                <ul className="space-y-4 mb-8 flex-1">
                  {tier.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start">
                      <CheckIcon />
                      <span className="text-base-content/80 text-sm leading-snug">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="card-actions">
                  <a
                    href="mailto:feoafoundation@gmail.com"
                    className={`btn btn-block rounded-md ${
                      tier.highlight ? "btn-accent" : "btn-outline btn-accent"
                    }`}
                  >
                    Choose Plan
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Sponsorship Specific Contact */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="card rounded-md bg-neutral text-neutral-content shadow-2xl overflow-hidden">
            <div className="card-body p-10 md:p-16 text-center md:text-left relative z-10">
              <h2 className="card-title text-3xl md:text-4xl font-bold mb-10 justify-center md:justify-start">
                Interested in Sponsoring?
              </h2>

              <div className="flex flex-col md:flex-row justify-between items-stretch gap-8 w-full">
                <div className="flex-1 flex flex-col justify-center text-center p-4 rounded-md hover:bg-white/5 transition-colors">
                  <p className="text-xs uppercase font-bold tracking-widest mb-2 text-neutral-content/60">
                    Founder
                  </p>
                  <p className="text-xl font-bold tracking-wide">
                    Mary Rose Lam
                  </p>
                </div>

                <div className="hidden md:block w-px bg-neutral-content/20 mx-4 self-stretch"></div>
                <div className="md:hidden h-px w-full bg-neutral-content/20 my-2"></div>

                <div className="flex-1 flex flex-col justify-center text-center p-4 rounded-md hover:bg-white/5 transition-colors">
                  <p className="text-xs uppercase font-bold tracking-widest mb-2 text-neutral-content/60">
                    Phone
                  </p>
                  <p className="text-xl font-bold tracking-wide">
                    919-760-9623
                  </p>
                </div>

                <div className="hidden md:block w-px bg-neutral-content/20 mx-4 self-stretch"></div>
                <div className="md:hidden h-px w-full bg-neutral-content/20 my-2"></div>

                <div className="flex-1 flex flex-col justify-center text-center p-4 rounded-md hover:bg-white/5 transition-colors">
                  <p className="text-xs uppercase font-bold tracking-widest mb-2 text-neutral-content/60">
                    Email
                  </p>
                  <a
                    href="mailto:feoafoundation@gmail.com"
                    className="text-lg font-bold link link-hover text-accent break-all"
                  >
                    feoafoundation@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}