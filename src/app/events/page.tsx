
import { Metadata } from "next";
import EventsBanner from "../components/banners/EventsBanner";
// import SpringGala from "../components/SpringGala";
import SummerBootCampImg from "../assets/events/summerBootCamp2025/summerBootCamp.png";
// import SpringGalaImg from "../assets/events/springGala2025/springgala.png";
import Image from "next/image";
import CountDown from "../components/CountDown";
import Link from "next/link";


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

      <CountDown />

      <div className="py-8 px-8 flex flex-col gap-10 justify-center items-center">
        <div className="flex justify-center items-stretch space-x-8">



          <div className="card w-full max-w-3xl bg-base-100 shadow-2xl overflow-hidden rounded-3xl group transition-all duration-300 hover:shadow-3xl border border-base-200">


            <div
              className="relative p-8 sm:p-10 pb-16 bg-radial-[at_0%_0%] from-black via-black to-accent to-140%"
            >

              {/* Title & Subtitle */}
              <div className="relative max-w-2xl">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-2 tracking-tight">
                  Future Entrepreneurs Of America Foundation
                </h2>
                {/* Divider */}
                <div className="h-1.5 w-24 bg-accent rounded-full my-4"></div>
                <span className="text-xl sm:text-2xl text-white/90 font-semibold tracking-wide">
                  Annual Holiday Event
                </span>
              </div>
            </div>

            {/* Content Section */}
            <div className="relative px-8 pb-8 sm:px-10 sm:pb-10 pt-0">

              {/* Floating Date Badge - Positioned to bridge Header & Body */}
              <div className="absolute right-8 sm:right-10 -top-16 card bg-white p-4 rounded-2xl shadow-xl text-center min-w-[110px] transform -rotate-10 hover:rotate-0 hover:scale-110 transition-transform duration-300 border border-base-200">
                <div className="text-sm font-bold text-accent uppercase tracking-wider">Dec</div>
                <div className="text-5xl font-black text-base-content leading-none my-1">06</div>
                <div className="text-base font-medium text-base-content/60">2025</div>
              </div>

              <div className="pt-12 sm:pt-8 md:pt-16 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-end">

                {/* Left Side: Details */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div>
                      <p className="text-lg font-bold text-base-content">9:30 AM – 12:30 PM</p>
                      <p className="text-sm font-medium text-base-content/60">Please arrive 15 mins early</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div>
                      <p className="text-lg font-bold text-base-content">Hampton Inn Gainesville</p>
                      <p className="text-sm font-medium text-base-content/60 leading-snug">7300 Atlas Walkway, Gainesville, VA</p>
                    </div>
                  </div>
                </div>


                <div className="flex gap-3 items-center">
                  {/* RSVP Button (Primary) */}
                  <button className="btn btn-accent flex-1 text-neutral border-neutral h-auto py-4 min-h-0 rounded-2xl text-lg font-bold shadow-xl shadow-black/10 hover:shadow-black/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300">
                    RSVP Now
                  </button>

                  {/* Get Directions Icon (Secondary) */}
                  <Link href={"https://maps.app.goo.gl/Lf49zsDfTvVDt9S29"} target="__blank">
                  <button className="btn btn-neutral w-16 h-full min-h-[60px] rounded-2xl flex items-center justify-center hover:scale-[1.05] active:scale-[0.95] transition-all duration-300">
                    <svg className="w-14 h-14 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z" clipRule="evenodd" />
                    </svg>
                  </button>
                  </Link>
                </div>

              </div>
            </div>
          </div>

          {/* <div className="card bg-base-300 px-4 rounded-lg w-full max-w-md shadow-sm hover:shadow-xl hover:-translate-y-1 duration-300 p-8 transition-all">
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
          </div> */}
        </div>




        <div className="w-full min-h-screen mt-16 bg-base-100 py-10 px-4 font-sans">
          <div className="max-w-5xl mx-auto">

            {/* Header - Simple text, no gradients */}
            <div className="text-center mb-10">
              <h1 className="text-3xl sm:text-5xl font-bold text-base-content mb-3">
                Our Exciting Previous Events
              </h1>
              <p className="text-lg text-base-content/70">
                Take a look back at our memorable moments
              </p>
            </div>

            <div className="card max-w-md mx-auto bg-base-300 px-4 rounded-lg w-full shadow-sm hover:shadow-xl hover:-translate-y-1 duration-300 p-8 transition-all">
            <figure>
              <Image
                src={SummerBootCampImg}
                className="w-sm rounded-lg border"
                alt="Summer Bootcamp Logo"
              />
            </figure>
            <div className="card-body px-0 mx-auto max-w-md">
              <h2 className="card-title text-sm sm:text-xl">
                Kids Entrepreneurship Bootcamp
              </h2>
              <p className="text-xs sm:text-sm">
                Listen and learn to successful entrepreneurs as they share their
                success stories.
              </p>
            </div>
          </div>

            {/* User Provided UI Structure */}
            <div className="my-8 w-full">
              <h2 className="font-bold text-lg sm:text-2xl text-center mb-6">
                Spring Gala
              </h2>

              <div className="grid md:grid-cols-2 gap-10 my-6 w-full">
                {/* Box 1 - Preserved structure (adjusted h-82 to h-80 for valid height) */}
                <div className="border border-4 rounded-lg border-accent w-auto h-80 bg-black">
                  <iframe
                    className="rounded w-full h-full"
                    src="https://www.youtube.com/embed/w6UiWqXI_lo?si=88ikSQ3ajUw2kaPA&controls=0"
                    title="Intoducing FEOAF Students"
                    allow="autoplay; clipboard-write; encrypted-media; gyroscope; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>

                {/* Box 2 */}
                <div className="border border-4 rounded-lg border-accent w-auto h-80 bg-black">
                  <iframe
                    className="rounded w-full h-full"
                    src="https://www.youtube.com/embed/SVMYB5t8QSk?si=tsDp3CaFEKrEQjg7&controls=0"
                    title="Spring Gala Opening Ceremony"
                    allow="autoplay; clipboard-write; encrypted-media; gyroscope; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>

          </div>
        </div>


      </div>

      {/* <SpringGala /> */}
    </div>
  );
}
