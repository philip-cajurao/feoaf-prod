import Hero from "./components/Hero";
import { Metadata } from "next";
import RecentSponsors from "./components/RecentSponsors";
import who from "./assets/latest_events/we.jpg";
import Image from "next/image";
import ServicesCard from "./components/ServicesCard";
import SpringGala from "./components/SpringGala";

export const metadata: Metadata = {
  title: "Future Entrepreneurs Of America Foundation",
  description: "...",
  // icons: {
  //   icon: ["./favicon.ico"]
  // }
};

export default function Home() {
  return (
    <div className="relative">
      <Hero />

      {/* Sections */}
      <div>
        <div className="grid md:grid-cols-2 bg-[#f4f4f4]">
          <div className="flex flex-col items-center justify-center px-10">
            <h2 className="font-bold text-4xl mb-4 w-full">Who we are?</h2>
            <p className="max-w-4xl text-xl">
              At Future Entrepreneurs Of America Foundation, we focus on
              building and creating young entrepreneurs by providing
              age-appropriate business training, guidance and funding for young
              kids, 9-17 years old.
            </p>
          </div>
          <div className="px-4 py-10 sm:px-8">
            <div className="rounded-xl border shadow-xl border-accent border-8 overflow-hidden mx-auto">
              <Image
                alt="Test"
                placeholder="blur"
                loading="lazy"
                src={who}
                className="w-auto h-auto"
              />
            </div>
          </div>
        </div>

        <div className="py-16">
          <div className="grid place-items-center">
            <div>
              <p className="font-bold text-2xl">Our</p>
              <h2 className="font-bold text-5xl ml-4">Services</h2>
            </div>
          </div>
          <ServicesCard />
        </div>
        <div>
          <div
            className={`flex items-center justify-center relative h-[calc(100svh*2)] md:h-svh bg-fixed bg-center bg-cover bg-[url(./assets/latest_events/gala.JPEG)]`}
          >
            <div className="absolute top-0 left-0 h-full w-full backdrop-brightness-75 backdrop-blur-[3px]">
              <div className="absolute top-0 h-full">
                <SpringGala />
              </div>
            </div>
          </div>
        </div>
        <div className="pb-24">
          <h2 className="text-4xl font-bold text-accent text-center -mb-20 mt-24">
            Sponsors
          </h2>
          <RecentSponsors />
        </div>
      </div>
    </div>
  );
}
