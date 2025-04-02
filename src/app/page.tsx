import Hero from "./components/Hero";
import { Metadata } from "next";
import Services from "./services/page";
import Events from "./events/page";
import RecentSponsors from "./components/RecentSponsors";
import who from "./assets/latest_events/we.jpg";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Future Entrepreneurs Of America Foundation",
  description: "...",
  // icons: {
  //   icon: ["./favicon.ico"]
  // }
};

export default function Home() {
  return (
    <div>
      <Hero />

      {/* Sections */}
      <div>
        <div className="grid md:grid-cols-2">
          <div className="flex flex-col items-center justify-center bg-primary py-24 px-10">
            <h2 className="font-bold dark:text-neutral-content text-4xl p-2 text-primary-content mb-4 w-full">
              Who we are?
            </h2>
            <p className="max-w-4xl mb-12 text-xl">
              At Future Entrepreneurs Of America Foundation, we focus on
              building and creating young entrepreneurs by providing
              age-appropriate business training, guidance and funding for young
              kids, 9-17 years old.
            </p>
          </div>
          <div className="py-24 px-4 sm:px-8">
            <Image
              alt="Test"
              src={who}
              className="w-auto h-auto mx-auto rounded-xl"
            />
          </div>
        </div>

        <div>
          <Services />
        </div>
        <div>
          <div
            className={`flex items-center justify-center relative h-[calc(100svh*2)] md:h-svh bg-fixed bg-center bg-cover bg-[url(./assets/latest_events/gala.JPEG)]`}
          >
            <div className="absolute top-0 left-0 h-full w-full backdrop-brightness-75 backdrop-blur-[3px]">
              <div className="absolute top-0 h-full">
                <Events />
              </div>
            </div>
          </div>
        </div>
        <div>
          <RecentSponsors />
        </div>
      </div>
    </div>
  );
}
