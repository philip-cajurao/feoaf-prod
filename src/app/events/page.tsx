import { Metadata } from "next";
import EventsBanner from "../components/banners/EventsBanner";
import Image from "next/image";
import CountDown from "../components/CountDown";

export const metadata: Metadata = {
  title: "Events | Future Entrepreneurs Of America Foundation",
  description:
    "Discover exciting youth-focused events like our recent Spring Gala, where young entrepreneurs showcase their creativity and business ideas.",
  icons: {
    icon: ["/logo.png", "/favicon.ico"],
  },
  facebook: {
    appId: "61573876332746",
  },
};

export default function Events() {
  return (
    <div className="flex flex-col justify-center relative">
      <EventsBanner />

      <CountDown />

      <div className="px-6 py-24 flex flex-col items-center w-full">
        
        {/* --- Section Header --- */}
        <div className="text-center mb-32 max-w-3xl">
          <h1 className="text-5xl sm:text-6xl font-black text-neutral uppercase tracking-tighter mb-6">
            Previous <span className="text-accent">Events</span>
          </h1>
          <p className="text-xl text-base-content/60 leading-relaxed">
            Take a look back at our memorable moments and upcoming gatherings designed to empower the next generation.
          </p>
          <div className="h-1.5 w-20 bg-accent mx-auto mt-8 rounded-full"></div>
        </div>

        {/* --- Event List --- */}
        <div className="w-full max-w-6xl space-y-40">

          {/* 1. CCWRC Outreach */}
          <section className="flex flex-col lg:flex-row items-center gap-12 group">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-64 rounded-3xl overflow-hidden shadow-xl transform group-hover:-translate-y-2 transition-transform duration-500">
                  <Image src="/events/church/IMG_3778.JPEG" alt="Outreach" fill className="object-cover" />
                </div>
                <div className="relative h-64 mt-8 rounded-3xl overflow-hidden shadow-xl transform group-hover:translate-y-2 transition-transform duration-500">
                  <Image src="/events/church/IMG_3795.JPEG" alt="Community Support" fill className="object-cover" />
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 order-1 lg:order-2 text-center lg:text-left">
              <span className="text-accent font-bold uppercase tracking-widest text-sm">February 2026</span>
              <h2 className="text-4xl font-black mt-3 mb-6 leading-tight text-neutral">Christian Center of World Restoration Outreach</h2>
              <p className="text-base-content/70 text-lg leading-relaxed">
                A community-focused initiative bridging the gap between local resources and youth potential, fostering growth through faith and entrepreneurship.
              </p>
            </div>
          </section>

          {/* 2. Spring Gala (Alternating side) */}
          <section className="flex flex-col lg:flex-row items-center gap-24 group">
            <div className="lg:w-1/2 text-center lg:text-right">
              <span className="text-accent font-bold uppercase tracking-widest text-sm">April 2025</span>
              <h2 className="text-4xl font-black mt-3 mb-6 leading-tight text-neutral">Spring Gala Event</h2>
              <p className="text-base-content/70 text-lg leading-relaxed mb-8">
                Watch our students take the stage. Our flagship gala combines student showcases with high-energy networking and business pitches.
              </p>
            </div>
            <div className="lg:w-1/2">
              <div className="grid gap-6">
                <div className="aspect-video relative rounded-3xl overflow-hidden shadow-2xl border-b-4 border-accent">
                  <iframe className="w-full h-full" src="https://www.youtube.com/embed/w6UiWqXI_lo" allowFullScreen></iframe>
                </div>
                <div className="aspect-video relative rounded-3xl overflow-hidden shadow-2xl border-b-4 border-accent lg:-ml-12">
                   <iframe className="w-full h-full" src="https://www.youtube.com/embed/SVMYB5t8QSk" allowFullScreen></iframe>
                </div>
              </div>
            </div>
          </section>

          {/* 3. Summer Bootcamp */}
          <section className="flex flex-col lg:flex-row items-center gap-12 group">
            <div className="lg:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-72 rounded-[2rem] overflow-hidden shadow-xl border-2 border-base-200">
                   <Image src="/events/church/IMG_3795.JPEG" alt="Kids Learning" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="relative h-72 rounded-[2rem] overflow-hidden shadow-xl">
                   <Image src="/events/church/IMG_3795.JPEG" alt="Kids Learning" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 text-center lg:text-left">
              <span className="text-accent font-bold uppercase tracking-widest text-sm">June 2025</span>
              <h2 className="text-4xl font-black mt-3 mb-6 leading-tight text-neutral">Summer Bootcamp</h2>
              <p className="text-base-content/70 text-lg leading-relaxed">
                An intensive experience where successful business owners, bankers, and community leaders train kids in entrepreneurship and professional skills.
              </p>
            </div>
          </section>

          {/* 4. Holiday Event (Now unified and styled like others) */}
          <section className="flex flex-col lg:flex-row items-center gap-12 group">
            <div className="lg:w-1/2 text-center lg:text-right order-1 lg:order-1">
              <span className="text-accent font-bold uppercase tracking-widest text-sm">2024 - 2026 Tradition</span>
              <h2 className="text-4xl font-black mt-3 mb-6 leading-tight text-neutral">Annual Holiday Event</h2>
              <p className="text-base-content/70 text-lg leading-relaxed">
                The year-end celebration where kids recognize their accomplishments. Includes the signature "SHARKTANK" competition where sponsors participate as judges.
              </p>
            </div>
            <div className="lg:w-1/2 order-2 lg:order-2">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-64 rounded-3xl overflow-hidden shadow-xl transform group-hover:rotate-2 transition-all duration-500">
                  <Image src="/events/holiday/IMG_4627.jpg" alt="Holiday 2024" fill className="object-cover" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                </div>
                <div className="relative h-64 mt-8 rounded-3xl overflow-hidden shadow-xl transform group-hover:-rotate-2 transition-all duration-500">
                  <Image src="/events/holiday/IMG_4364.JPEG" alt="Holiday 2025/26" fill className="object-cover" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}