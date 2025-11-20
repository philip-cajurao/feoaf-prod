import { Metadata } from "next";
import React from "react";
import EventsBanner from "../components/banners/EventsBanner";
// import SpringGala from "../components/SpringGala";
import SummerBootCampImg from "../assets/events/summerBootCamp2025/summerBootCamp.png";
// import SpringGalaImg from "../assets/events/springGala2025/springgala.png";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Events | Future Entrepreneurs Of America Foundation",
  description:
    "Discover exciting youth-focused events like our recent Spring Gala, where young entrepreneurs showcase their creativity and business ideas. The Future Entrepreneurs of America Foundation hosts inspiring gatherings that celebrate innovation, growth, and the power of the next generation.",
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

      <div className="py-16 px-8 flex flex-col gap-10 justify-center items-center">
        <div className="flex justify-center items-stretch space-x-8">

          <div className="card bg-base-300 px-4 rounded-lg w-full max-w-md shadow-sm hover:shadow-xl hover:-translate-y-1 duration-300 p-8 transition-all">
            <figure>
              <img
                src="https://feoaf.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2.4922cd3e.png&w=1920&q=75"
                className="w-sm rounded-lg shadow bg-black p-2"
                alt="Summer Bootcamp Logo"
              />
            </figure>
            <div className="card-body px-0">
              <h2 className="card-title text-sm sm:text-xl">
                Future Entrepreneurs Of America Foundation Annual Holiday Event
              </h2>
              <p className="text-xs sm:text-sm">
                December 6, 2025
                <br />
                9:30a-12:30p
                <br />
                Hampton Inn Gainesville
                <br />
                7300 Atlas Walkway, Gainesville, VA


              </p>
            </div>
          </div>

          <div className="card bg-base-300 px-4 rounded-lg w-full max-w-md shadow-sm hover:shadow-xl hover:-translate-y-1 duration-300 p-8 transition-all">
            <figure>
              <Image
                src={SummerBootCampImg}
                className="w-sm rounded-lg border"
                alt="Summer Bootcamp Logo"
              />
            </figure>
            <div className="card-body px-0">
              <h2 className="card-title text-sm sm:text-xl">
                Kids Entrepreneurship Bootcamp
              </h2>
              <p className="text-xs sm:text-sm">
                Listen and learn to successful entrepreneurs as they share their
                success stories.
              </p>
            </div>
          </div>
        </div>


        {/* <div className="card bg-base-300 rounded-lg w-xl shadow-sm hover:shadow-xl hover:-translate-y-1 duration-300 p-8 transition-all">
          <figure>
            <Image
              src={SpringGalaImg}
              className="w-sm rounded-lg border"
              alt="Summer Bootcamp Logo"
            />
          </figure>
          <div className="card-body px-0">
            <h2 className="card-title">Spring Gala</h2>
            <p>
              Step into a night of innovation, creativity, and inspiration as we
              celebrate the bright minds shaping tomorrow.
            </p>
          </div>
        </div> */}

        <div className="my-8 w-full">
          <h2 className="font-bold text-lg sm:text-2xl text-center">
            Spring Gala
          </h2>

          <div className="grid md:grid-cols-2 gap-10 my-6 w-full">
            <div className="border border-4 rounded-lg border-accent w-auto h-82">
              <iframe
                className="rounded w-full h-full"
                src="https://www.youtube.com/embed/w6UiWqXI_lo?si=88ikSQ3ajUw2kaPA&amp;controls=0"
                title="Intoducing FEOAF Students"
                allow="autoplay; clipboard-write; encrypted-media; gyroscope; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <div className="border border-4 rounded-lg border-accent w-auto h-82">
              <iframe
                className="rounded w-full h-full"
                src="https://www.youtube.com/embed/SVMYB5t8QSk?si=tsDp3CaFEKrEQjg7&amp;controls=0"
                title="Spring Gala Opening Ceremony"
                allow="autoplay; clipboard-write; encrypted-media; gyroscope; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* <SpringGala /> */}
    </div>
  );
}
