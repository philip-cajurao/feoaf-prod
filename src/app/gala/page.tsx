"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import GalaVideoTeaserDesign2 from "../components/GalaVideoTeaserDesign2";

const GALA_PHOTOS = [
  { url: "/events/gala/2025/_DSC6430.JPG", alt: "Black-Tie Gala Evening Showcase" },
  { url: "/events/gala/2025/_DSC6440.JPG", alt: "Gala Guest Celebration & Networking" },
  { url: "/events/gala/2025/_DSC6667.JPG", alt: "Youth Entrepreneur Stage Presentation" },
  { url: "/events/gala/2025/_DSC6669.JPG", alt: "Gala Dinner & Student Pitch Awards" },
  { url: "/events/gala/2025/_DSC6875.JPG", alt: "Sponsor Recognition & Gala Festivities" },
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

interface SponsorshipPackage {
  id: string;
  name: string;
  price: string;
  exclusive?: boolean;
  tagline?: string;
  benefits: string[];
  formUrl?: string;
}

const MAIN_SPONSORSHIPS: SponsorshipPackage[] = [
  {
    id: "presenting",
    name: "PRESENTING SPONSOR",
    price: "$10,000",
    exclusive: true,
    tagline: "Become the title sponsor of the evening.",
    formUrl: "/gala/presenting-sponsor",
    benefits: [
      'Exclusive "Presented by" recognition on all event materials',
      "Premier logo placement on event signage, website, and marketing",
      "Recognition during opening and closing remarks",
      "Opportunity to give a 5-minute welcome address",
      "VIP table for 10 guests",
      "Full-page premium ad in the gala program",
      "Promotional items included in guest swag bag",
      "Social media spotlight before and after the event",
      "Featured in press releases and media coverage",
      "Featured in FEOAF newsletter spotlight for 12 months",
      "Recognition as a Year-Round Community Partner",
    ],
  },
  {
    id: "diamond",
    name: "DIAMOND SPONSOR",
    price: "$5,000",
    formUrl: "/gala/diamond-sponsor",
    benefits: [
      "VIP table for 8 guests",
      "Prominent logo placement on event materials",
      "Full-page advertisement in the gala program",
      "Recognition during the event",
      "Company banner displayed at the venue",
      "Social media recognition",
      "Recognition on the FEOAF website",
      "Featured in FEOAF newsletter spotlight for 6 months",
      "Promotional item in guest gift bags",
    ],
  },
  {
    id: "platinum",
    name: "PLATINUM SPONSOR",
    price: "$2,500",
    formUrl: "/gala/platinum-sponsor",
    benefits: [
      "Reserved table for 8 guests",
      "Half-page advertisement in the gala program",
      "Logo on event signage and presentation",
      "Website recognition",
      "Social media recognition",
      "Verbal recognition during the event",
      "Featured in FEOAF newsletter spotlight for 4 months",
    ],
  },
  {
    id: "gold",
    name: "GOLD SPONSOR",
    price: "$1,500",
    formUrl: "/gala/gold-sponsor",
    benefits: [
      "Four (4) Gala Tickets",
      "Quarter-page advertisement in the program",
      "Logo displayed on sponsor recognition screen",
      "Website listing",
      "Featured in FEOAF newsletter spotlight for the month of November",
      "Social media recognition",
    ],
  },
  {
    id: "silver",
    name: "SILVER SPONSOR",
    price: "$750",
    formUrl: "/gala/silver-sponsor",
    benefits: [
      "Two (2) Gala Tickets",
      "Business name listed in the gala program",
      "Logo on sponsor presentation",
      "Website recognition",
    ],
  },
  {
    id: "bronze",
    name: "BRONZE SPONSOR",
    price: "$500",
    formUrl: "/gala/bronze-sponsor",
    benefits: [
      "Two (2) Gala Tickets",
      "Business name listed in the gala program",
      "Recognition on the event website",
    ],
  },
  {
    id: "community",
    name: "Community Sponsor",
    price: "$250",
    formUrl: "/gala/community-sponsor",
    benefits: [
      "Name listed in the gala program",
      "Recognition on the event website",
      "Thank you for recognition during the event",
    ],
  },
];

const NATIONAL_IMPACT_PARTNERS: SponsorshipPackage[] = [
  {
    id: "national-impact",
    name: "National Impact Partner",
    price: "$3,000",
    formUrl: "/gala/national-impact-partner",
    benefits: [
      "All benefits in National Community Partner plus stage company recognition, premium logo placement, featured newsletter spotlight for 6 editions, year-round recognition on the FEOAF website.",
    ],
  },
  {
    id: "national-community",
    name: "National Community Partner",
    price: "$1,000",
    formUrl: "/gala/national-community-partner",
    benefits: ["Logo on websites, social media recognition, digital program listing, certificate."],
  },
];

const SPECIALIZED_SPONSORSHIPS: SponsorshipPackage[] = [
  {
    id: "table-sponsor",
    name: "Table Sponsor",
    price: "$1,500",
    formUrl: "/gala/table-sponsor",
    benefits: [
      "Reserved table for 8 guests",
      "Company logo displayed at the sponsored table",
      "Recognition in the gala program and event presentation",
    ],
  },
  {
    id: "youth-scholarship",
    name: "Youth Scholarship Sponsor",
    price: "$1,000",
    formUrl: "/gala/youth-scholarship-sponsor",
    benefits: ["Help provide scholarships for youth to participate in entrepreneurship programs."],
  },
];

const PROGRAM_BOOK_SPONSORS = [
  { option: "Inside Front Cover", price: "$750" },
  { option: "Inside Back Cover", price: "$750" },
  { option: "Back Cover (Exclusive)", price: "$1,000" },
  { option: "Full Page", price: "$300" },
  { option: "Half Page", price: "$175" },
  { option: "Quarter Page", price: "$100" },
];

const HELPS_PROVIDE = [
  "Community Entrepreneurship Outreach Programs",
  "Youth Entrepreneurship Boot Camps",
  "Financial Literacy Education",
  "Micro-Loans For our Young Entrepreneurs",
  "Youth Business Pitch Competitions",
  "Interest-Free Youth Business Funding",
  "Entrepreneur Mentorship Programs",
  "Scholarships for Underserved Youth",
];

function SectionLabel({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 mb-2">
      <div className="h-px flex-1 bg-current opacity-20" />
      <span className="text-[10px] font-black uppercase tracking-[0.3em] opacity-50">{label}</span>
      <div className="h-px flex-1 bg-current opacity-20" />
    </div>
  );
}

export default function GalaLandingPage() {
  const router = useRouter();
  const targetDate = useMemo(() => new Date("2026-10-17T18:30:00"), []);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [selectedPackage, setSelectedPackage] = useState<SponsorshipPackage | null>(null);
  const [selectedPhoto, setSelectedPhoto] = useState<{ url: string; alt: string } | null>(null);

  const handleSelectPackage = (pkg: SponsorshipPackage) => {
    if (pkg.formUrl) {
      router.push(pkg.formUrl);
    } else {
      setSelectedPackage(pkg);
    }
  };

  useEffect(() => {
    const checkTime = () => setTimeLeft(getTimeLeft(targetDate));
    checkTime();
    const timer = setInterval(checkTime, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  useEffect(() => {
    document.body.style.overflow = selectedPackage || selectedPhoto ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [selectedPackage, selectedPhoto]);

  return (
    <div className="w-full flex flex-col">
      <style>{`
        @keyframes fade-in { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: translateY(0); } }
        .fade-in { animation: fade-in 0.9s ease-out forwards; opacity: 0; }
        @keyframes modal-pop { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }
        .animate-modal { animation: modal-pop 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards; }
      `}</style>

      {/* ─── SECTION 1: COUNTDOWN ─── white background */}
      <section className="w-full bg-base-100 pt-12 pb-14 px-4 sm:px-6 flex flex-col items-center gap-6 fade-in">
        <div className="flex flex-col items-center">
          <h2 className="font-extrabold text-4xl sm:text-6xl text-neutral text-center tracking-tight mb-8">
            SAVE<span className="text-accent"> THE DATE</span>!
          </h2>
          <div className="grid grid-flow-col gap-4 sm:gap-5 text-center auto-cols-max">
            {Object.entries(timeLeft).map(([label, value]) => (
              <div key={label} className="flex flex-col p-3 sm:p-4 bg-neutral rounded-2xl text-neutral-content shadow-lg min-w-[70px] sm:min-w-[90px]">
                <span className="countdown font-mono text-4xl sm:text-5xl">
                  <span style={{ "--value": value } as React.CSSProperties}></span>
                </span>
                <span className="text-xs font-bold uppercase tracking-wider mt-1 text-neutral-content/70">{label.slice(0, 3)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ─── SECTION 2: HERO CARD ─── very light tint */}
      <section className="w-full bg-base-200/30 py-16 px-6 sm:px-10 lg:px-16 flex flex-col items-center fade-in">
        <div className="card w-full max-w-4xl bg-base-100 shadow-2xl overflow-hidden rounded-3xl border border-base-200">
          <div className="relative p-6 sm:p-12 pb-16 sm:pb-20 overflow-hidden min-h-[240px] sm:min-h-[280px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/events/gala/2025/_DSC6430.JPG" alt="FEOAF Gala" className="absolute inset-0 w-full h-full object-cover object-center" />
            <div className="absolute inset-0 bg-black/80" />
            <div className="relative z-10 max-w-2xl flex flex-col items-start">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent sm:bg-accent sm:border-none backdrop-blur-sm text-white sm:text-neutral font-black uppercase tracking-wider text-[10px] sm:text-xs mb-3 shadow-lg">
                Future Entrepreneurs of America Foundation
              </span>
              <h1 className="text-2xl sm:text-5xl font-black text-white leading-tight mb-2 sm:mb-3">
                Black-Tie Gala Sponsorship Opportunities
              </h1>
              <div className="h-1 w-16 sm:h-1.5 sm:w-24 bg-accent rounded-full mb-3 sm:mb-5" />
              <span className="text-base sm:text-2xl text-white/90 font-semibold tracking-wide italic font-serif">
                &ldquo;Together, we&apos;re building tomorrow&apos;s entrepreneurs—one young leader at a time.&rdquo;
              </span>
            </div>
          </div>

          <div className="relative px-6 pb-6 sm:px-10 sm:pb-10 pt-0">
            {/* Floating date badge — desktop only */}
            <div className="hidden sm:block absolute right-10 -top-16 card bg-white p-4 rounded-2xl shadow-xl text-center min-w-[110px] transform -rotate-6 border border-base-200 z-20">
              <div className="text-sm font-bold text-accent uppercase tracking-wider">Oct</div>
              <div className="text-5xl font-black text-base-content leading-none my-1">17</div>
              <div className="text-base font-medium text-base-content/60">2026</div>
            </div>

            <div className="pt-5 sm:pt-14 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 items-end">
              {/* Left column — info */}
              <div className="space-y-4">
                <div>
                  <p className="text-base sm:text-lg font-bold text-base-content">October 17, 2026</p>
                  <p className="text-xs sm:text-sm font-medium text-base-content/60">Gala Evening Event</p>
                </div>
                <div>
                  <p className="text-base sm:text-lg font-bold text-base-content">Heritage Hunt Golf &amp; Country Club</p>
                  <p className="text-xs sm:text-sm font-medium text-base-content/60">Gainesville, Virginia</p>
                </div>
                <div className="p-3 sm:p-4 bg-amber-50 rounded-2xl border border-amber-200">
                  <p className="text-xs font-bold text-amber-900 uppercase tracking-wider mb-0.5">Sponsorship Deadline</p>
                  <p className="text-xs sm:text-sm font-bold text-amber-800 leading-snug">
                    Secure Your Brand Exposure by August 27, 2026. To ensure your company receives maximum marketing exposure across our event promotions, website, social media, printed materials, gala program, and event signage.
                  </p>
                </div>
              </div>

              {/* Right column — buttons */}
              <div className="flex flex-col gap-3">
                <Link href="https://givebutter.com/c/X0GXZ6?source=qr&version=1" target="_blank" rel="noopener noreferrer" className="w-full">
                  <button className="btn btn-accent text-neutral font-black w-full h-12 sm:h-14 rounded-2xl text-sm sm:text-base shadow-xl flex items-center justify-center gap-2 uppercase tracking-widest hover:brightness-105 transition-all">
                    Get Tickets
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </button>
                </Link>
                <a href="#sponsorship-packages" className="w-full">
                  <button className="btn btn-accent text-neutral font-black w-full h-12 sm:h-14 rounded-2xl text-sm sm:text-base shadow-xl flex items-center justify-center gap-2 uppercase tracking-widest hover:brightness-105 transition-all">
                    Be A Sponsor
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 2.5: PROMOTIONAL VIDEO & EVENT PREVIEW (Option 2 Design) ─── */}
      <GalaVideoTeaserDesign2
        id="gala-teaser"
        theme="dark"
        showTicketCta={true}
        detailsLinkHref="#sponsorship-packages"
        detailsLinkLabel="View Sponsorship Packages"
      />

      {/* ─── SECTION 3: PAST GALA HIGHLIGHTS ─── dark neutral band */}
      <section className="w-full bg-neutral text-neutral-content py-20 px-4 sm:px-6 flex flex-col items-center gap-10 fade-in">
        <div className="w-full max-w-7xl flex flex-col items-center gap-8">
          <div className="text-center">
            <SectionLabel label="Event Showcase" />
            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter leading-none mb-3">
              Past Gala <span className="text-accent">Highlights</span>
            </h2>
            <div className="h-1.5 w-24 bg-accent rounded-full mx-auto mb-3" />
            <p className="text-neutral-content/70 text-base sm:text-lg max-w-2xl mx-auto font-medium">
              Take a look at unforgettable moments, guest showcases, and student awards from our Gala celebrations.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 w-full">
            {GALA_PHOTOS.map((photo) => (
              <div
                key={photo.url}
                onClick={() => setSelectedPhoto(photo)}
                className="group cursor-pointer relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-white/10 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={photo.url} alt={photo.alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-xs text-white font-bold">Click to view 🔍</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* ─── SECTION 5: MAIN SPONSORSHIP TIERS ─── soft tinted band */}
      <section id="sponsorship-packages" className="w-full bg-base-200/50 py-20 px-4 sm:px-6 flex flex-col items-center gap-10 fade-in">
        <div className="w-full max-w-7xl flex flex-col items-center gap-10">
          <div className="text-center">
            <SectionLabel label="Sponsorship Opportunities" />
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-neutral uppercase">
              Black-Tie Gala <span className="text-accent">Sponsorships</span>
            </h2>
            <div className="h-1.5 w-24 bg-accent rounded-full mx-auto mt-4" />
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-stretch w-full">
            {MAIN_SPONSORSHIPS.map((pkg) => (
              <div
                key={pkg.id}
                className={`card rounded-xl h-full relative transition-all duration-300 ${pkg.exclusive
                  ? "bg-neutral/98 text-white shadow-2xl border-none scale-100 lg:scale-105 z-10"
                  : "bg-white text-base-content border-2 border-neutral/30 shadow-2xl hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(var(--tw-colors-accent),0.5)]"}`}
              >
                {pkg.exclusive && (
                  <div className="absolute top-0 inset-x-0 flex justify-center -translate-y-1/2">
                    <span className="badge badge-accent border-none font-black py-4 px-6 uppercase tracking-widest shadow-lg text-neutral">Exclusive Title Sponsor</span>
                  </div>
                )}
                <div className={`card-body p-8 lg:p-10 flex flex-col ${pkg.exclusive ? "pt-12" : ""}`}>
                  <div className="mb-6 border-b-2 border-current pb-6 opacity-80">
                    <h3 className={`card-title text-2xl font-black mb-2 uppercase italic ${pkg.exclusive ? "text-white" : "text-neutral"}`}>{pkg.name}</h3>
                    {pkg.tagline && (
                      <p className={`text-sm tracking-wider font-bold min-h-[2.5rem] ${pkg.exclusive ? "text-white/80" : "text-base-content/80"}`}>{pkg.tagline}</p>
                    )}
                  </div>
                  <div className="mb-8 flex items-baseline">
                    <span className={`text-5xl font-black ${pkg.exclusive ? "text-accent" : "text-neutral"}`}>{pkg.price}</span>
                  </div>
                  <ul className="space-y-4 mb-10 flex-1">
                    {pkg.benefits.map((f, i) => (
                      <li key={i} className="flex items-start">
                        <CheckIcon />
                        <span className={`text-sm leading-snug font-bold ${pkg.exclusive ? "text-white/90" : "text-base-content/90"}`}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="card-actions mt-auto">
                    <button
                      onClick={() => handleSelectPackage(pkg)}
                      className={`btn btn-block rounded-md font-black uppercase text-base h-14 ${pkg.exclusive
                        ? "btn-accent shadow-[0_0_15px_rgba(var(--tw-colors-accent),0.4)] text-neutral hover:scale-[1.02]"
                        : "btn-outline btn-neutral text-neutral shadow-md hover:bg-accent hover:text-neutral hover:scale-[1.02]"}`}
                    >
                      Select Package
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 6: NATIONAL IMPACT PARTNERS ─── dark neutral band */}
      <section className="w-full bg-neutral text-neutral-content py-20 px-4 sm:px-6 flex flex-col items-center gap-10 fade-in">
        <div className="w-full max-w-7xl flex flex-col items-center gap-10">
          <div className="text-center">
            <SectionLabel label="Additional Sponsorship Opportunities" />
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight uppercase">
              NATIONAL IMPACT <span className="text-accent">PARTNERS</span>
            </h2>
            <div className="h-1.5 w-24 bg-accent rounded-full mx-auto mt-4" />
            <p className="text-sm sm:text-base font-semibold max-w-3xl mx-auto text-neutral-content/70 mt-4 leading-relaxed">
              National Impact Partners are mission-driven organizations and individuals whose leadership-level support empowers FEOAF to create lasting, nationwide impact by investing in tomorrow&apos;s entrepreneurs and changemakers.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 max-w-5xl w-full items-stretch">
            {NATIONAL_IMPACT_PARTNERS.concat(SPECIALIZED_SPONSORSHIPS).map((pkg) => (
              <div key={pkg.id} className="card rounded-xl bg-white text-base-content border-2 border-neutral/30 shadow-2xl hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(var(--tw-colors-accent),0.5)] transition-all duration-300 h-full flex flex-col">
                <div className="card-body p-8 lg:p-10 flex flex-col">
                  <div className="mb-6 border-b-2 border-current pb-6 opacity-80">
                    <h3 className="card-title text-2xl font-black mb-2 uppercase italic text-neutral">{pkg.name}</h3>
                  </div>
                  <div className="mb-8 flex items-baseline">
                    <span className="text-5xl font-black text-neutral">{pkg.price}</span>
                  </div>
                  <ul className="space-y-4 mb-10 flex-1">
                    {pkg.benefits.map((f, i) => (
                      <li key={i} className="flex items-start">
                        <CheckIcon />
                        <span className="text-sm leading-snug font-bold text-base-content/90">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="card-actions mt-auto">
                    <button onClick={() => handleSelectPackage(pkg)} className="btn btn-block btn-accent text-neutral shadow-md hover:brightness-105 hover:scale-[1.02] rounded-md font-black uppercase text-base h-14">
                      Select Package
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION DIVIDER */}
      <div className="w-full h-1 bg-accent opacity-60" />

      {/* ─── SECTION 7: PROGRAM BOOK SPONSOR ─── white */}
      <section className="w-full min-h-screen bg-base-100 py-20 px-4 sm:px-6 flex flex-col items-center justify-center gap-8 fade-in">
        <div className="w-full max-w-3xl flex flex-col items-center gap-10">
          <div className="text-center">
            <SectionLabel label="Print Exposure" />
            <h2 className="text-3xl sm:text-4xl font-black text-neutral uppercase tracking-tighter leading-none mb-3">
              Program Book <span className="text-accent">Sponsor</span>
            </h2>
            <div className="h-1 w-16 bg-accent rounded-full mx-auto mb-3" />
            <p className="text-sm text-base-content/50 font-medium max-w-xs mx-auto">
              Secure your placement in the official Black-Tie Gala program book.
            </p>
          </div>

          <div className="w-full rounded-2xl border border-base-200 overflow-hidden shadow-sm">
            {PROGRAM_BOOK_SPONSORS.map((ad, i) => (
              <div
                key={ad.option}
                className={`flex items-center justify-between px-6 py-4 gap-4 ${i !== PROGRAM_BOOK_SPONSORS.length - 1 ? "border-b border-base-200" : ""} hover:bg-base-200/40 transition-colors`}
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-lg text-accent text-xs font-black flex items-center justify-center shrink-0">{i + 1}</span>
                  <span className="text-sm sm:text-base font-bold text-neutral">{ad.option}</span>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-lg sm:text-xl font-black text-accent">{ad.price}</span>
                  <Link
                    href="/gala/program-book-sponsor"
                    className="btn btn-accent btn-sm text-neutral font-black uppercase tracking-wide rounded-lg px-4"
                  >
                    Select
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 8: YOUR SPONSORSHIP HELPS PROVIDE ─── soft tinted band */}
      <section className="w-full min-h-screen bg-base-200/50 py-20 px-4 sm:px-6 flex flex-col items-center justify-center gap-8 fade-in">
        <div className="w-full max-w-6xl flex flex-col items-center gap-8">
          <div className="text-center">
            <SectionLabel label="Impact" />
            <h2 className="text-4xl sm:text-5xl font-black text-neutral uppercase tracking-tighter leading-none mb-2">
              Your sponsorship <span className="text-accent">helps provide:</span>
            </h2>
            <div className="h-1.5 w-24 bg-accent rounded-full mx-auto mb-4" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 w-full py-4">
            {HELPS_PROVIDE.map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <span className="w-10 h-10 min-w-[40px] min-h-[40px] aspect-square rounded-full bg-accent text-neutral font-black text-base flex items-center justify-center shrink-0 shadow-md ring-4 ring-accent/20">
                  {i + 1}
                </span>
                <span className="text-sm sm:text-base font-extrabold text-neutral leading-snug flex-1">{item}</span>
              </div>
            ))}
          </div>
          <div className="w-full flex flex-col items-center text-center pt-4 pb-2">
            <blockquote className="text-xl sm:text-3xl font-serif italic text-neutral leading-relaxed max-w-3xl px-4">
              "Together, we&apos;re building tomorrow&apos;s entrepreneurs—one young leader at a time."
            </blockquote>
            <div className="flex items-center gap-4 mt-2">
              <div className="h-px w-12 bg-accent/40 rounded-full" />
              <p className="text-xs font-black uppercase tracking-[0.25em] text-neutral/50">
                Future Entrepreneurs of America Foundation
              </p>
              <div className="h-px w-12 bg-accent/40 rounded-full" />
            </div>
          </div>
        </div>
      </section>



      {/* ─── SPONSORSHIP MODAL ─── */}
      {selectedPackage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto" onClick={() => setSelectedPackage(null)}>
          <div className="relative w-full max-w-5xl bg-base-100 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row my-auto animate-modal items-stretch" onClick={(e) => e.stopPropagation()}>
            <button className="btn btn-circle btn-sm absolute top-4 right-4 z-50 border-none bg-black/50 hover:bg-black/80 text-white" onClick={() => setSelectedPackage(null)}>✕</button>
            <div className="w-full md:w-auto md:max-w-[45%] shrink-0 border-b md:border-b-0 md:border-r border-base-200 bg-neutral p-8 flex flex-col justify-between text-neutral-content">
              <div>
                <span className="badge badge-accent badge-lg font-black uppercase tracking-wider mb-4 border-none text-neutral shadow-md">October 17, 2026</span>
                <h3 className="text-3xl font-black text-white leading-tight mb-2">{selectedPackage.name}</h3>
                <p className="text-4xl font-black text-accent my-3">{selectedPackage.price}</p>
                {selectedPackage.tagline && <p className="text-xs font-semibold text-neutral-content/70 italic mb-6">{selectedPackage.tagline}</p>}
                <div className="h-1 w-16 bg-accent rounded-full mb-6" />
              </div>
              <div className="text-xs text-neutral-content/60 font-medium">Future Entrepreneurs of America Foundation Gala</div>
            </div>
            <div className="w-full flex-1 relative bg-base-100">
              <div className="md:absolute md:inset-0 p-8 md:p-10 flex flex-col overflow-y-auto">
                <h4 className="text-xs font-black text-accent uppercase tracking-widest mb-3">Package Benefits:</h4>
                <ul className="space-y-3 mb-8 flex-1">
                  {selectedPackage.benefits.map((b, i) => (
                    <li key={i} className="text-sm font-semibold text-base-content/85 flex items-start gap-2.5 leading-snug">
                      <span className="text-accent font-black shrink-0 mt-0.5">✓</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-6 border-t border-base-200 flex flex-col gap-3">
                  {selectedPackage.name.startsWith("Program Book Sponsor") ? (
                    <>
                      <a
                        href={`mailto:feoafoundation@gmail.com?subject=Program Book Sponsorship Inquiry: ${encodeURIComponent(selectedPackage.name)}`}
                        className="w-full"
                      >
                        <button className="btn btn-accent w-full py-4 h-auto rounded-2xl text-base font-black text-neutral uppercase tracking-wider shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5">
                          Contact FEOAF
                        </button>
                      </a>
                      <p className="text-xs text-center text-base-content/60 font-medium">
                        Email <a href="mailto:feoafoundation@gmail.com" className="text-accent underline font-bold">feoafoundation@gmail.com</a> or call <span className="font-bold text-neutral">(919) 760-9623</span> to secure your placement.
                      </p>
                    </>
                  ) : (
                    <>
                      {selectedPackage.formUrl ? (
                        <Link href={selectedPackage.formUrl} className="w-full">
                          <button className="btn btn-accent w-full py-4 h-auto rounded-2xl text-base font-black text-neutral uppercase tracking-wider shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5">
                            Register & Pay via Form
                          </button>
                        </Link>
                      ) : (
                        <Link href="https://givebutter.com/c/X0GXZ6?source=qr&version=1" target="_blank" className="w-full">
                          <button className="btn btn-accent w-full py-4 h-auto rounded-2xl text-base font-black text-neutral uppercase tracking-wider shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5">
                            Pay Online via Givebutter
                          </button>
                        </Link>
                      )}
                      <a href={`mailto:feoafoundation@gmail.com?subject=Sponsorship Inquiry: ${encodeURIComponent(selectedPackage.name)}`} className="w-full">
                        <button className="btn btn-neutral w-full py-3.5 h-auto rounded-2xl text-sm font-bold text-white uppercase tracking-wider">
                          Request Invoice via Email
                        </button>
                      </a>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ─── PHOTO MODAL ─── */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm cursor-pointer" onClick={() => setSelectedPhoto(null)}>
          <div className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center">
            <button onClick={() => setSelectedPhoto(null)} className="btn btn-circle btn-sm border-none bg-black/60 text-white hover:bg-black absolute -top-12 right-0 font-bold">✕</button>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={selectedPhoto.url} alt={selectedPhoto.alt} className="max-h-[85vh] w-auto object-contain rounded-2xl shadow-2xl border border-base-300" />
            {selectedPhoto.alt && (
              <p className="text-white text-xs font-semibold mt-3 text-center bg-black/60 px-4 py-1.5 rounded-full border border-white/20">{selectedPhoto.alt}</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
