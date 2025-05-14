// import Hero from "./components/Hero";
import { Metadata } from "next";
import RecentSponsors from "./components/RecentSponsors";
import who from "./assets/latest_events/we.jpg";
import Image from "next/image";
import ServicesCard from "./components/ProgramsCard";
// import SpringGala from "./components/SpringGala";
import SummerBootCampTicket from "./assets/events/summerBootCamp2025/bootCampTicket.png";
import SummerBootCampImg from "./assets/events/summerBootCamp2025/summerBootCamp.png";
import SpringGalaImg from "./assets/events/springGala2025/springgala.png";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Future Entrepreneurs Of America Foundation",
  description: "Join us, as we value young entrepreneurs of tomorrow.",
  icons: {
    icon: ["/logo.png", "/favicon.ico"],
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
    description:
      "Join our expanding organization that values young entrepreneurs future.",
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
      <div className="hero bg-base-200 h-auto md:h-[calc(100svh-4rem)]">
        <div className="hero-content flex-col lg:flex-row gap-x-16 mx-10">
          <Image
            src={SummerBootCampTicket}
            className="w-92 rounded-lg shadow-2xl rounded-lg"
            alt="Summer Boot Camp ticket"
          />
          <div>
            <h1 className="text-5xl font-bold">Kids Summer Bootcamp</h1>
            <p className="py-6">
              Elevate your journey and unlock new possibilities at our exclusive
              3-day event! Dive into insightful sessions led by successful
              entrepreneurs covering topics like negotiation, product ideation,
              marketing, and more. Your success story starts here—join us and
              make it happen!
            </p>
            <Link href="/kids-bootcamp"><button className="btn btn-accent btn-xl rounded-lg">Join</button></Link>
          </div>
        </div>
      </div>
      {/* <Hero /> */}

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
            <div className="md:absolute top-0 left-0 h-full w-full backdrop-brightness-75 backdrop-blur-[3px]">
              {/* <SpringGala /> */}
              <div className="py-16 px-8 flex flex-col sm:flex-row gap-10 justify-center items-center my-auto h-full border">
                <div className="card bg-base-300 rounded-lg sm:w-lg shadow-sm hover:shadow-xl hover:-translate-y-1 duration-300 p-8 transition-all">
                  <figure>
                    <Image
                      src={SummerBootCampImg}
                      className="w-sm rounded-lg border"
                      alt="Summer Bootcamp Logo"
                    />
                  </figure>
                  <div className="card-body px-0">
                    <h2 className="card-title">Kids Summer Bootcamp</h2>
                    <p>
                      Listen and learn to successful entrepreneurs as they share
                      their success stories.
                    </p>
                  </div>
                  <p className="text-xs">
                    <span className="badge badge-xs">Upcoming event</span>
                  </p>
                </div>

                <div className="card bg-base-300 rounded-lg sm:w-lg shadow-sm hover:shadow-xl hover:-translate-y-1 duration-300 p-8 transition-all">
                  <figure>
                    <Image
                      src={SpringGalaImg}
                      className="w-sm rounded-lg border"
                      alt="Summer Bootcamp Logo"
                    />
                  </figure>
                  <div className="card-body px-0">
                    <h2 className="card-title">Spring Gala 2025</h2>
                    <p>
                      Step into a night of innovation, creativity, and
                      inspiration as we celebrate the bright minds shaping
                      tomorrow.
                    </p>
                  </div>
                </div>
              </div>
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
