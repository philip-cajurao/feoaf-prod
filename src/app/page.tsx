import Hero from "./components/Hero";
import { Metadata } from "next";
import RecentSponsors from "./components/RecentSponsors";
import who from "./assets/latest_events/we.jpg";
import Image from "next/image";
import ServicesCard from "./components/ProgramsCard";
import SpringGala from "./components/SpringGala";

export const metadata: Metadata = {
  title: "Future Entrepreneurs Of America Foundation",
  description:
    "Join us, as we value young entrepreneurs of tomorrow.",
  icons: {
    icon: ["/favicon.ico", "/logo.png"],
  },
  keywords: [
    "Future Entrepreneurs of America Foundation",
    "Future Entrepreneurs of America",
    "young entrepreneurs",
    "youth entrepreneurship",
    "kids business training",
    "teen entrepreneurship",
    "business education for kids",
    "entrepreneurship for youth",
    "nonprofit for young entrepreneurs",
    "entrepreneurship foundation",
    "business programs for kids ages 9-17",
    "business training for teens",
    "real world business exposure for kids",
    "online business event for children",
    "teach kids about business",
    "business education not taught in schools",
    "entrepreneurship programs for kids",
    "pandemic inspired youth programs",
    "age-appropriate entrepreneurship training",
    "virtual business programs for children",
    "legacy building for youth",
    "develop the next generation of entrepreneurs",
    "entrepreneurship outside academic settings",
    "business exposure for youth",
    "helping kids become successful",
    "guidance and funding for kids in business",
    "virtual learning alternatives for kids",
    "kids educational foundation",
    "empowering young minds",
    "youth business empowerment",
    "kids and teen development programs",
    "computer-free activities for children",
  ],
  facebook: {
    appId: "61573876332746",
  },
  metadataBase: new URL("https://feoaf.org"),
  openGraph: {
    title: "Future Entrepreneurs of America Foundation", 
    description: "Join our expanding organization that values young entrepreneurs future.",
    url: "https://feoaf.org",
    siteName: "Future Entrepreneurs of America Foundation",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Future Entrepreneurs of America Foundation", 
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function Home() {
  return (
    <div className="relative">
      <Hero />

      {/* Sections */}
      <div>
        <div className="grid md:grid-cols-2 py-8 bg-[#f4f4f4]">
          <div className="flex flex-col items-center justify-center px-10 pt-14 lg:pt-0">
            <h2 className="font-bold text-4xl mb-4 w-full max-w-4xl">
              Who we are?
            </h2>
            <p className="max-w-4xl text-xl">
              Future Entrepreneurs of America Foundation is focus on developing,
              guiding and mentoring young entrepreneurs ages 9-17 years old by
              providing age appropriate training and activities to motivate them
              to become successful entrepreneurs in the future.
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
            className={`flex relative h-full md:h-[calc(100svh-4rem)] bg-fixed bg-center bg-cover bg-[url(./assets/latest_events/gala.JPEG)]`}
          >
            <div className="md:absolute top-0 left-0 h-fullw-full backdrop-brightness-75 backdrop-blur-[3px]">
              <SpringGala />
            </div>
          </div>
        </div>

        <div className="py-24 border">
          <h2 className="text-4xl font-bold text-accent text-center -mb-20">
            Sponsors
          </h2>
          <div className="mt-16">
            <RecentSponsors />
          </div>
        </div>
      </div>
    </div>
  );
}
