import Hero from "./components/Hero";
import { Metadata } from "next";
import Services from "./services/page";
import Events from "./events/page";
import RecentSponsors from "./components/RecentSponsors";
import who from "./assets/latest_events/we.jpeg";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Future Entrepreneurs Of America Foundation",
  description: "...",
};

export default function Home() {
  return (
    <div>
      <Hero />

      {/* Sections */}
      <div>
        <div className="flex flex-col items-center py-24">
          <h2 className="font-bold text-2xl p-2 bg-primary text-primary-content mb-4 w-full text-center">
            Who we are?
          </h2>
          <p className="max-w-4xl text-center mb-12">
            At Future Entrepreneurs Of America Foundation, we focus on building
            and creating young entrepreneurs by providing age-appropriate
            business training, guidance and funding for young kids, 9-17 years
            old.
          </p>
          <Image alt="Test" src={who} className="w-auto h-96 mx-auto rounded-xl" />
        </div>

        <div>
          <Services />
        </div>
        <div>
          <div
            className={`flex items-center justify-center relative h-screen mb-12 bg-fixed bg-center bg-cover bg-[url(./assets/latest_events/gala.JPEG)]`}
          >
            <div className="absolute top-0 left-0 h-full w-full backdrop-brightness-25 backdrop-blur-md">
              <div className="absolute top-0">
                <Events />
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-center text-2xl font-bold bg-success p-4 text-success-content mb-4">
            Sponsors
          </h2>
          <RecentSponsors />
        </div>
      </div>
    </div>
  );
}
