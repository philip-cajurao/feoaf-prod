"use client"

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// --- Static Asset Imports ---
import fhGrowthFundLogo from "@/app/assets/partners/fhGrowthFund.png";
import fortuneLogo from "@/app/assets/sponsors/fts-full-black.png";
import qr from "../assets/qr/donateQR.png";

// --- Data Definitions ---

const programs = [
  {
    title: "Youth Entrepreneurship Bootcamps",
    description: "Kids showcase their products and services in a festival type event. There would be various event vendors and would be expecting around 500 attendees.",
    image: "/events/summer_bootcamp_2025/IMG_0084.JPEG",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
  },
  {
    title: "Entrepreneurship Funding Program",
    description: "Various Successful Business Owners, Bankers, and Community Leaders get to speak and train the kids in different aspects of business and teach them entrepreneurship skills.",
    image: "/events/holiday/IMG_4364.JPEG",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.438 4.438 0 002.946 2.946 4.493 4.493 0 004.306-1.758q.161-.253.298-.521" />
      </svg>
    ),
  },
  {
    title: "Community Outreach Programs",
    description: "It’s a community event wherein we invite our sponsors to mingle and socialize with our community and have some fun in a little “Community Auction Fundraising”",
    image: "/events/outreach images/DSC08222.JPG",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    title: "Academic Scholarship Program",
    description: "It’s the year end event to celebrate with the kids and recognize their accomplishments for the year. As a sponsor, you will be invited to be one of the participants in the “SHARKTANK”.",
    image: "/events/academics/IMG_5544.JPEG",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
  },
  {
    title: "Sports Scholarship Program",
    description: "This gala celebrates our mission, honors the individuals who make our work possible, and raises vital support. Together, we gather to celebrate progress and show appreciation to our sponsors.",
    image: "/events/sports/IMG_5376.JPEG",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M18.75 4.236c.982.143 1.954.317 2.916.52A6.003 6.003 0 0116.27 9.728m-8.54-5.492a46.327 46.327 0 005.418 0M12 11.25v.375m-7.166 3.9c.33.328.675.642 1.034.93M20.166 15.525c-.33.328-.675.642-1.034.93" />
      </svg>
    ),
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
      "Mentioned in all marketing materials including social media, event flyers, and take home brochures",
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
  <svg className="h-5 w-5 shrink-0 mr-3 mt-0.5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
  </svg>
);

const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-accent shrink-0 mt-1 mr-2">
    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
  </svg>
);

export default function SponsorshipOpportunities() {
  const [activeTab, setActiveTab] = useState<"sponsors" | "packages">("sponsors");

  // Reconfigured partners object array to support typography logos dynamically
  const partners = [
    { name: "FH Growth Fund", logo: fhGrowthFundLogo, isPlaceholder: false, url: "https://invest.fortunehomesteam.com/" },
    { name: "Roberts", logo: null, isPlaceholder: true },
    { name: "Fortune Tech Solutions", logo: fortuneLogo, isPlaceholder: false, url: "https://www.fortunetechsolutions.net/" }
  ];

  return (
    <div className="text-base-content bg-base-200 font-sans min-h-screen">
      
      {/* Dynamic Tab Navigation Bar Container */}
      <div className={`pt-28 pb-8 flex justify-center ${activeTab === "sponsors" ? "bg-neutral" : "bg-neutral/98"}`}>
        <div className="tabs tabs-boxed bg-black/30 border border-white/10 p-1.5 rounded-xl flex gap-1">
          
          {/* Sponsors Tab */}
          <button 
            onClick={() => setActiveTab("sponsors")}
            className={`tab tab-md sm:tab-lg font-black uppercase tracking-widest px-8 h-12 !rounded-lg transition-all duration-150 ${
              activeTab === "sponsors" 
                ? "tab-active !bg-accent !text-black shadow-md" 
                : "!text-white/60 bg-transparent"
            }`}
          >
            Sponsors
          </button>

          {/* Partner with Us Tab */}
          <button 
            onClick={() => setActiveTab("packages")}
            className={`tab tab-md sm:tab-lg font-black uppercase tracking-widest px-8 h-12 !rounded-lg transition-all duration-150 ${
              activeTab === "packages" 
                ? "tab-active !bg-accent !text-black shadow-md" 
                : "!text-white/60 bg-transparent"
            }`}
          >
            Partner with Us
          </button>

        </div>
      </div>

      {/* TAB CONDITION 1: PARTNER WITH US */}
      {activeTab === "packages" && (
        <>
          {/* Single Event Sponsorships */}
          <section className="py-20 bg-neutral/98 text-neutral-content">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <p className="font-bold text-xs sm:text-sm text-accent uppercase tracking-[0.2em] mb-2 drop-shadow-md">
                  Sponsorship Packages
                </p>
                <h2 className="text-2xl sm:text-5xl font-bold tracking-tight text-white">
                  Event Only Sponsorship
                </h2>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {singleEventTiers.map((tier, idx) => (
                  <div key={idx} className="card rounded-xl bg-white text-base-content shadow-xl border-t-[10px] border-accent border-x-2 border-b-2 border-neutral-focus hover:-translate-y-2 transition-transform duration-300 h-full">
                    <div className="card-body p-8">
                      <h3 className="card-title text-2xl font-black uppercase leading-tight">
                        {tier.name}
                      </h3>
                      <div className="my-4">
                        <p className="text-4xl font-black text-accent">{tier.price}</p>
                        <p className="text-xs text-base-content/60 font-bold uppercase mt-1">One-time payment</p>
                      </div>
                      <div className="divider before:bg-base-content/20 after:bg-base-content/20 my-2"></div>
                      <ul className="space-y-4 flex-1">
                        {tier.features.map((feature, fIdx) => (
                          <li key={fIdx} className="text-sm font-bold flex items-start leading-snug">
                            <StarIcon />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="card-actions mt-8">
                        <Link href={`/sponsors/sponsorships/single/${tier.slug}`} className="btn btn-block btn-neutral rounded-md font-bold text-white uppercase border-2 border-white/10">
                          Select Package
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Annual Sponsorship */}
          <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="text-center mb-24">
              <p className="font-bold text-xs sm:text-sm text-accent uppercase tracking-[0.2em] mb-2 drop-shadow-md">
                Sponsorship Packages
              </p>
              <h2 className="text-2xl sm:text-5xl font-bold tracking-tight text-neutral">
                Annual Sponsorship
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-stretch">
              {annualTiers.map((tier, idx) => (
                <div
                  key={idx}
                  className={`card rounded-xl h-full relative transition-all duration-300 ${tier.highlight
                    ? "bg-neutral/98 text-white shadow-2xl border-none scale-100 lg:scale-105 z-10"
                    : "bg-white text-base-content border-2 border-neutral/30 shadow-2xl hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(var(--tw-colors-accent),0.5)]"
                    }`}
                >
                  {tier.highlight && (
                    <div className="absolute top-0 inset-x-0 flex justify-center -translate-y-1/2">
                      <span className="badge badge-accent border-none font-black py-4 px-6 uppercase tracking-widest shadow-lg text-neutral">
                        Premier Choice
                      </span>
                    </div>
                  )}

                  <div className={`card-body p-8 lg:p-10 flex flex-col ${tier.highlight ? 'pt-12' : ''}`}>
                    <div className="mb-6 border-b-2 border-current pb-6 opacity-80">
                      <h3 className={`card-title text-2xl font-black mb-2 uppercase italic ${tier.highlight ? 'text-white' : 'text-neutral'}`}>
                        {tier.name}
                      </h3>
                      <p className={`text-sm tracking-wider font-bold min-h-[2.5rem] ${tier.highlight ? 'text-white/80' : 'text-base-content/80'}`}>
                        {tier.tagline}
                      </p>
                    </div>

                    <div className="mb-8 flex items-baseline">
                      <span className={`text-5xl font-black ${tier.highlight ? 'text-accent' : 'text-neutral'}`}>
                        {tier.price}
                      </span>
                      <span className={`font-black ml-2 uppercase text-sm ${tier.highlight ? 'text-white/60' : 'text-base-content/60'}`}>
                        {tier.period}
                      </span>
                    </div>

                    <ul className="space-y-4 mb-10 flex-1">
                      {tier.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start">
                          <CheckIcon />
                          <span className={`text-sm leading-snug font-bold ${tier.highlight ? 'text-white/90' : 'text-base-content/90'}`}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="card-actions mt-auto">
                      <Link
                        href={`/sponsors/sponsorships/annual/${tier.slug}`}
                        className={`btn btn-block rounded-md font-black uppercase text-base h-14 ${tier.highlight
                          ? "btn-accent shadow-[0_0_15px_rgba(var(--tw-colors-accent),0.4)] text-neutral hover:scale-[1.02]"
                          : "btn-outline btn-neutral text-neutral shadow-md hover:bg-accent hover:text-neutral hover:scale-[1.02]"
                          }`}
                      >
                        Choose Plan
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </>
      )}

      {/* TAB CONDITION 2: SPONSORS */}
      {activeTab === "sponsors" && (
        <>
          <section className="py-24 bg-neutral text-neutral-content relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
              
              <div className="mb-6 flex justify-center relative cursor-default group">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16 text-accent drop-shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:-translate-y-1">
                  <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                </svg>
              </div>

              <h2 className="text-3xl font-extrabold sm:text-5xl tracking-tight uppercase mb-4">
                <span className="text-accent">Our</span> <span className="text-white"> Sponsors</span>
              </h2>

              <p className="text-white/70 mb-16 font-bold leading-relaxed max-w-2xl mx-auto text-lg">
                We are incredibly grateful for the dynamic support of our active corporate sponsors who empower our future leaders.
              </p>

              <div className="flex flex-wrap justify-center gap-6 sm:gap-10 mb-24">
                {partners.map((partner, i) => {
                  const content = (
                    <>
                      <div className="w-16 h-16 relative bg-white rounded-lg overflow-hidden shrink-0 shadow-sm flex items-center justify-center select-none">
                        {partner.isPlaceholder ? (
                          /* High-contrast geometric letter tile layout matching your brand styles */
                          <div className="w-full h-full bg-neutral text-accent font-black text-2xl flex items-center justify-center tracking-tighter">
                            R
                          </div>
                        ) : (
                          <Image
                            src={partner.logo!}
                            alt={`${partner.name} logo`}
                            fill
                            className="object-contain p-2"
                            unoptimized
                          />
                        )}
                      </div>
                      <span className="font-black text-white leading-tight text-xl group-hover/logo:text-accent transition-colors">
                        {partner.name}
                      </span>
                    </>
                  );

                  return partner.url ? (
                    <Link href={partner.url} key={i} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-white/5 backdrop-blur-sm p-4 pr-6 rounded-xl border border-white/10 transition-all hover:border-accent hover:bg-white/10 group/logo">
                      {content}
                    </Link>
                  ) : (
                    <div key={i} className="flex items-center gap-4 bg-white/5 backdrop-blur-sm p-4 pr-6 rounded-xl border border-white/10 transition-all group/logo">
                      {content}
                    </div>
                  );
                })}
              </div>

              {/* Bottom Call to Action and Integrated QR Code */}
              <div className="max-w-md mx-auto border border-white/20 bg-white/5 backdrop-blur-md rounded-3xl p-8 sm:p-12 shadow-2xl flex flex-col items-center gap-8 text-left">
                <div className="flex-1">
                  <h3 className="text-2xl font-black text-white uppercase tracking-wide mb-2">
                    Partner With Us
                  </h3>
                </div>
                <div className="w-36 h-36 bg-white rounded-2xl p-2 flex items-center justify-center shadow-lg shrink-0 border-4 border-accent relative overflow-hidden">
                  <Image 
                    src={qr} 
                    alt="Sponsorship Registration QR Code" 
                    fill 
                    className="object-contain p-1"
                  />
                </div>
              </div>

            </div>
          </section>
        </>
      )}

      {/* Global Programs You Support Section */}
      <section className="py-24 bg-base-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold sm:text-5xl tracking-tight text-neutral uppercase">
              Programs You Support
            </h2>
            <div className="h-1.5 w-24 bg-accent mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {programs.map((program, index) => (
              <div
                key={index}
                className="group card rounded-3xl bg-white shadow-2xl shadow-black/40 hover:shadow-xl transition-all duration-500 border border-black/40 hover:-translate-y-2 overflow-hidden flex flex-col h-full"
              >
                <figure className="relative h-56 w-full overflow-hidden bg-neutral">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 group-hover:rotate-1 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral/90 via-neutral/20 to-transparent"></div>

                  <div className="absolute bottom-4 left-6 w-12 h-12 bg-accent text-neutral rounded-xl flex items-center justify-center shadow-lg transform group-hover:-translate-y-1 transition-transform duration-300">
                    {program.icon}
                  </div>
                </figure>

                <div className="card-body p-6 sm:p-8 flex-1">
                  <h3 className="card-title text-2xl font-black mb-2 text-neutral uppercase group-hover:text-accent transition-colors duration-300">
                    {program.title}
                  </h3>
                  <div className="w-12 h-1 bg-base-300 mb-4 rounded-full group-hover:bg-accent group-hover:w-16 transition-all duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}