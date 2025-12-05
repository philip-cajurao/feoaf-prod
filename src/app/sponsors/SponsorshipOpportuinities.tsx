import React from "react";
import Link from "next/link";
// import logo from "../assets/feoaf.png"; // Uncomment if needed

// --- Data Definitions ---

const programs = [
  {
    title: "Spring Festival",
    description:
      "Kids showcase their products and services in a festival type event. There would be various event vendors and would be expecting around 500 attendees.",
  },
  {
    title: "Summer Bootcamp",
    description:
      "Various Successful Business Owners, Bankers, and Community Leaders get to speak and train the kids in different aspects of business and teach them entrepreneurship skills.",
  },
  {
    title: "Cocktail for A Cause",
    description:
      "It’s a community event wherein we invite our sponsors to mingle and socialize with our community and have some fun in a little “Community Auction Fundraising”",
  },
  {
    title: "Holiday Event",
    description:
      "It’s the year end event to celebrate with the kids and recognize their accomplishments for the year. As a sponsor, you will be invited to be one of the participants in the “SHARKTANK” (the famous part of the Future Entrepreneurs Events).",
  },
  {
    title: "Fall Gala Event",
    description:
      "This gala celebrates our mission, honors the individuals who make our work possible, and raises vital support to continue creating meaningful impact in our community. Together, we gather not only to celebrate progress, but to strengthen our ability to serve, empower, and uplift those who need us most. This event is also to recognize and show appreciation to our sponsors.",
  },
];

const annualTiers = [
  {
    name: "PLATINUM SPONSOR",
    slug: "platinum-sponsor",
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
    slug: "gold-sponsor",
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
    slug: "silver-sponsor",
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
    slug: "bronze-sponsor",
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
    slug: "community-support",
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
    slug: "platinum-sponsor",
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
    slug: "gold-sponsor",
    price: "$500",
    features: [
      "Everything in Bronze Sponsorship Package",
      "A table to display your items and marketing materials",
      "2 VIP Event Tickets",
    ],
  },
  {
    name: "Bronze Sponsorship",
    slug: "bronze-sponsor",
    price: "$250",
    features: [
      "As a Bronze Sponsor for one of our major events, you will be mentioned in all our marketing materials including social media, event flyers, and the take home thank you brochures",
      "Recognition in the actual program",
      "1 VIP Event Ticket",
    ],
  },
  {
    name: "Community Friends",
    slug: "community-support",
    price: "Any Amount",
    features: [
      "A thank you mention of your name/business during the event",
      "We are always grateful for any amount that you can help us make the event possible for the kids",
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
      {/* 1. Single Event Sponsorships */}
      <section className="py-24 bg-neutral text-neutral-content">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold tracking-tight text-white">
              Event Only Sponsorship
            </h2>
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
                    <Link
                      href={`/sponsors/sponsorships/single/${tier.slug}`}
                      className="btn btn-outline btn-accent btn-sm btn-block rounded-md"
                    >
                      Select
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Annual Sponsorships */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold tracking-tight">
            Annual Sponsorship
          </h2>
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
                  <Link
                    href={`/sponsors/sponsorships/annual/${tier.slug}`}
                    className={`btn btn-block rounded-md ${
                      tier.highlight ? "btn-accent" : "btn-outline btn-accent"
                    }`}
                  >
                    Choose Plan
                  </Link>
                </div>
              </div>
            </div>
          ))}

          {/* --- NEW IMPROVED INSTALLMENT CARD --- */}
          <div className="card rounded-md bg-base-100 border-2 border-dashed border-base-300 h-full hover:border-accent transition-colors duration-300 group">
            <div className="card-body p-8 flex flex-col justify-center items-center text-center">
              {/* Icon Top */}
              <div className="mb-4 text-accent/80 group-hover:text-accent transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-16 h-16"
                >
                  <path d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
                  <path
                    fillRule="evenodd"
                    d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>

              <h3 className="card-title text-2xl font-bold mb-4 text-base-content">
                Need Flexibility?
              </h3>
              <p className="text-base-content/70 mb-8 leading-relaxed">
                For <strong className="text-accent">Platinum</strong> and{" "}
                <strong className="text-accent">Gold</strong> sponsorships, we
                offer convenient installment plans.
                <br />
                <span className="font-bold text-base-content block mt-2">
                  Contact us for more info.
                </span>
              </p>

              <div className="w-full space-y-3">
                {/* Email Link */}
                <a
                  href="mailto:feoafoundation@gmail.com"
                  className="flex items-center p-3 rounded-lg hover:bg-base-200 transition-all group/link text-left"
                >
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent mr-3 shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                      <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest opacity-50">
                      Email Us
                    </p>
                    <p className="font-bold text-sm sm:text-base break-all group-hover/link:text-accent transition-colors text-nowrap">
                      feoafoundation@gmail.com
                    </p>
                  </div>
                </a>

                {/* Phone Link */}
                <a
                  href="tel:9197609623"
                  className="flex items-center p-3 rounded-lg hover:bg-base-200 transition-all group/link text-left"
                >
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent mr-3 shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 5.25V4.5Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest opacity-50">
                      Call Us
                    </p>
                    <p className="font-bold text-sm sm:text-base group-hover/link:text-accent transition-colors">
                      919-760-9623
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Programs Context */}
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
    </div>
  );
}