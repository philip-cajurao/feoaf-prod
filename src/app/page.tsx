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
    <div>
      <Hero />

      {/* Sections */}
      <div>
        <div className="grid md:grid-cols-2">
          <div className="flex flex-col items-center justify-center py-24 px-10">
            <div className="relative border">
              <svg
              className="absolute"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                viewBox="0 0 800 800"
                opacity="1"
              >
                <g
                  strokeWidth="4"
                  stroke="hsl(216.36 100% 57.99999999999999%)"
                  fill="none"
                  strokeLinecap="round"
                  transform="matrix(1,0,0,1,-5,338.56208992004395)"
                >
                  <path d="M10,10C31.726190476190478,10.625,68.75,16.958333333333332,114.28571428571429,13C159.82142857142858,9.041666666666668,180.95238095238096,-10.875,228.57142857142858,-9C276.1904761904762,-7.125,295.2380952380953,21.375,342.8571428571429,22C390.4761904761905,22.625,409.5238095238095,-7.25,457.14285714285717,-6C504.7619047619048,-4.75,523.8095238095239,27.166666666666668,571.4285714285714,28C619.047619047619,28.833333333333332,638.0952380952382,-2.833333333333333,685.7142857142858,-2C733.3333333333334,-1.1666666666666667,776.1904761904761,24.916666666666664,800,32"></path>
                  <path
                    d="M10,10C31.726190476190478,10.625,68.75,16.958333333333332,114.28571428571429,13C159.82142857142858,9.041666666666668,180.95238095238096,-10.875,228.57142857142858,-9C276.1904761904762,-7.125,295.2380952380953,21.375,342.8571428571429,22C390.4761904761905,22.625,409.5238095238095,-7.25,457.14285714285717,-6C504.7619047619048,-4.75,523.8095238095239,27.166666666666668,571.4285714285714,28C619.047619047619,28.833333333333332,638.0952380952382,-2.833333333333333,685.7142857142858,-2C733.3333333333334,-1.1666666666666667,776.1904761904761,24.916666666666664,800,32"
                    transform="matrix(1,0,0,1,0,100)"
                  ></path>
                  <path
                    d="M10,10C31.726190476190478,10.625,68.75,16.958333333333332,114.28571428571429,13C159.82142857142858,9.041666666666668,180.95238095238096,-10.875,228.57142857142858,-9C276.1904761904762,-7.125,295.2380952380953,21.375,342.8571428571429,22C390.4761904761905,22.625,409.5238095238095,-7.25,457.14285714285717,-6C504.7619047619048,-4.75,523.8095238095239,27.166666666666668,571.4285714285714,28C619.047619047619,28.833333333333332,638.0952380952382,-2.833333333333333,685.7142857142858,-2C733.3333333333334,-1.1666666666666667,776.1904761904761,24.916666666666664,800,32"
                    transform="matrix(1,0,0,1,0,90)"
                  ></path>
                  <path
                    d="M10,10C31.726190476190478,10.625,68.75,16.958333333333332,114.28571428571429,13C159.82142857142858,9.041666666666668,180.95238095238096,-10.875,228.57142857142858,-9C276.1904761904762,-7.125,295.2380952380953,21.375,342.8571428571429,22C390.4761904761905,22.625,409.5238095238095,-7.25,457.14285714285717,-6C504.7619047619048,-4.75,523.8095238095239,27.166666666666668,571.4285714285714,28C619.047619047619,28.833333333333332,638.0952380952382,-2.833333333333333,685.7142857142858,-2C733.3333333333334,-1.1666666666666667,776.1904761904761,24.916666666666664,800,32"
                    transform="matrix(1,0,0,1,0,80)"
                  ></path>
                  <path
                    d="M10,10C31.726190476190478,10.625,68.75,16.958333333333332,114.28571428571429,13C159.82142857142858,9.041666666666668,180.95238095238096,-10.875,228.57142857142858,-9C276.1904761904762,-7.125,295.2380952380953,21.375,342.8571428571429,22C390.4761904761905,22.625,409.5238095238095,-7.25,457.14285714285717,-6C504.7619047619048,-4.75,523.8095238095239,27.166666666666668,571.4285714285714,28C619.047619047619,28.833333333333332,638.0952380952382,-2.833333333333333,685.7142857142858,-2C733.3333333333334,-1.1666666666666667,776.1904761904761,24.916666666666664,800,32"
                    transform="matrix(1,0,0,1,0,70)"
                  ></path>
                  <path
                    d="M10,10C31.726190476190478,10.625,68.75,16.958333333333332,114.28571428571429,13C159.82142857142858,9.041666666666668,180.95238095238096,-10.875,228.57142857142858,-9C276.1904761904762,-7.125,295.2380952380953,21.375,342.8571428571429,22C390.4761904761905,22.625,409.5238095238095,-7.25,457.14285714285717,-6C504.7619047619048,-4.75,523.8095238095239,27.166666666666668,571.4285714285714,28C619.047619047619,28.833333333333332,638.0952380952382,-2.833333333333333,685.7142857142858,-2C733.3333333333334,-1.1666666666666667,776.1904761904761,24.916666666666664,800,32"
                    transform="matrix(1,0,0,1,0,60)"
                  ></path>
                  <path
                    d="M10,10C31.726190476190478,10.625,68.75,16.958333333333332,114.28571428571429,13C159.82142857142858,9.041666666666668,180.95238095238096,-10.875,228.57142857142858,-9C276.1904761904762,-7.125,295.2380952380953,21.375,342.8571428571429,22C390.4761904761905,22.625,409.5238095238095,-7.25,457.14285714285717,-6C504.7619047619048,-4.75,523.8095238095239,27.166666666666668,571.4285714285714,28C619.047619047619,28.833333333333332,638.0952380952382,-2.833333333333333,685.7142857142858,-2C733.3333333333334,-1.1666666666666667,776.1904761904761,24.916666666666664,800,32"
                    transform="matrix(1,0,0,1,0,50)"
                  ></path>
                  <path
                    d="M10,10C31.726190476190478,10.625,68.75,16.958333333333332,114.28571428571429,13C159.82142857142858,9.041666666666668,180.95238095238096,-10.875,228.57142857142858,-9C276.1904761904762,-7.125,295.2380952380953,21.375,342.8571428571429,22C390.4761904761905,22.625,409.5238095238095,-7.25,457.14285714285717,-6C504.7619047619048,-4.75,523.8095238095239,27.166666666666668,571.4285714285714,28C619.047619047619,28.833333333333332,638.0952380952382,-2.833333333333333,685.7142857142858,-2C733.3333333333334,-1.1666666666666667,776.1904761904761,24.916666666666664,800,32"
                    transform="matrix(1,0,0,1,0,40)"
                  ></path>
                  <path
                    d="M10,10C31.726190476190478,10.625,68.75,16.958333333333332,114.28571428571429,13C159.82142857142858,9.041666666666668,180.95238095238096,-10.875,228.57142857142858,-9C276.1904761904762,-7.125,295.2380952380953,21.375,342.8571428571429,22C390.4761904761905,22.625,409.5238095238095,-7.25,457.14285714285717,-6C504.7619047619048,-4.75,523.8095238095239,27.166666666666668,571.4285714285714,28C619.047619047619,28.833333333333332,638.0952380952382,-2.833333333333333,685.7142857142858,-2C733.3333333333334,-1.1666666666666667,776.1904761904761,24.916666666666664,800,32"
                    transform="matrix(1,0,0,1,0,30)"
                  ></path>
                  <path
                    d="M10,10C31.726190476190478,10.625,68.75,16.958333333333332,114.28571428571429,13C159.82142857142858,9.041666666666668,180.95238095238096,-10.875,228.57142857142858,-9C276.1904761904762,-7.125,295.2380952380953,21.375,342.8571428571429,22C390.4761904761905,22.625,409.5238095238095,-7.25,457.14285714285717,-6C504.7619047619048,-4.75,523.8095238095239,27.166666666666668,571.4285714285714,28C619.047619047619,28.833333333333332,638.0952380952382,-2.833333333333333,685.7142857142858,-2C733.3333333333334,-1.1666666666666667,776.1904761904761,24.916666666666664,800,32"
                    transform="matrix(1,0,0,1,0,20)"
                  ></path>
                  <path
                    d="M10,10C31.726190476190478,10.625,68.75,16.958333333333332,114.28571428571429,13C159.82142857142858,9.041666666666668,180.95238095238096,-10.875,228.57142857142858,-9C276.1904761904762,-7.125,295.2380952380953,21.375,342.8571428571429,22C390.4761904761905,22.625,409.5238095238095,-7.25,457.14285714285717,-6C504.7619047619048,-4.75,523.8095238095239,27.166666666666668,571.4285714285714,28C619.047619047619,28.833333333333332,638.0952380952382,-2.833333333333333,685.7142857142858,-2C733.3333333333334,-1.1666666666666667,776.1904761904761,24.916666666666664,800,32"
                    transform="matrix(1,0,0,1,0,10)"
                  ></path>
                </g>
              </svg>

              <svg
              className="absolute"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                viewBox="0 0 800 800"
                opacity="1"
              >
                <g
                  strokeWidth="4"
                  stroke="oklch(63% 0.237 25.331)"
                  fill="none"
                  strokeLinecap="round"
                  transform="matrix(1,0,0,1,-5,338.56208992004395)"
                >
                  <path d="M10,10C31.726190476190478,10.625,68.75,16.958333333333332,114.28571428571429,13C159.82142857142858,9.041666666666668,180.95238095238096,-10.875,228.57142857142858,-9C276.1904761904762,-7.125,295.2380952380953,21.375,342.8571428571429,22C390.4761904761905,22.625,409.5238095238095,-7.25,457.14285714285717,-6C504.7619047619048,-4.75,523.8095238095239,27.166666666666668,571.4285714285714,28C619.047619047619,28.833333333333332,638.0952380952382,-2.833333333333333,685.7142857142858,-2C733.3333333333334,-1.1666666666666667,776.1904761904761,24.916666666666664,800,32"></path>
                  <path
                    d="M10,10C31.726190476190478,10.625,68.75,16.958333333333332,114.28571428571429,13C159.82142857142858,9.041666666666668,180.95238095238096,-10.875,228.57142857142858,-9C276.1904761904762,-7.125,295.2380952380953,21.375,342.8571428571429,22C390.4761904761905,22.625,409.5238095238095,-7.25,457.14285714285717,-6C504.7619047619048,-4.75,523.8095238095239,27.166666666666668,571.4285714285714,28C619.047619047619,28.833333333333332,638.0952380952382,-2.833333333333333,685.7142857142858,-2C733.3333333333334,-1.1666666666666667,776.1904761904761,24.916666666666664,800,32"
                    transform="matrix(1,0,0,1,0,100)"
                  ></path>
                  <path
                    d="M10,10C31.726190476190478,10.625,68.75,16.958333333333332,114.28571428571429,13C159.82142857142858,9.041666666666668,180.95238095238096,-10.875,228.57142857142858,-9C276.1904761904762,-7.125,295.2380952380953,21.375,342.8571428571429,22C390.4761904761905,22.625,409.5238095238095,-7.25,457.14285714285717,-6C504.7619047619048,-4.75,523.8095238095239,27.166666666666668,571.4285714285714,28C619.047619047619,28.833333333333332,638.0952380952382,-2.833333333333333,685.7142857142858,-2C733.3333333333334,-1.1666666666666667,776.1904761904761,24.916666666666664,800,32"
                    transform="matrix(1,0,0,1,0,90)"
                  ></path>
                  <path
                    d="M10,10C31.726190476190478,10.625,68.75,16.958333333333332,114.28571428571429,13C159.82142857142858,9.041666666666668,180.95238095238096,-10.875,228.57142857142858,-9C276.1904761904762,-7.125,295.2380952380953,21.375,342.8571428571429,22C390.4761904761905,22.625,409.5238095238095,-7.25,457.14285714285717,-6C504.7619047619048,-4.75,523.8095238095239,27.166666666666668,571.4285714285714,28C619.047619047619,28.833333333333332,638.0952380952382,-2.833333333333333,685.7142857142858,-2C733.3333333333334,-1.1666666666666667,776.1904761904761,24.916666666666664,800,32"
                    transform="matrix(1,0,0,1,0,80)"
                  ></path>
                  <path
                    d="M10,10C31.726190476190478,10.625,68.75,16.958333333333332,114.28571428571429,13C159.82142857142858,9.041666666666668,180.95238095238096,-10.875,228.57142857142858,-9C276.1904761904762,-7.125,295.2380952380953,21.375,342.8571428571429,22C390.4761904761905,22.625,409.5238095238095,-7.25,457.14285714285717,-6C504.7619047619048,-4.75,523.8095238095239,27.166666666666668,571.4285714285714,28C619.047619047619,28.833333333333332,638.0952380952382,-2.833333333333333,685.7142857142858,-2C733.3333333333334,-1.1666666666666667,776.1904761904761,24.916666666666664,800,32"
                    transform="matrix(1,0,0,1,0,70)"
                  ></path>
                  <path
                    d="M10,10C31.726190476190478,10.625,68.75,16.958333333333332,114.28571428571429,13C159.82142857142858,9.041666666666668,180.95238095238096,-10.875,228.57142857142858,-9C276.1904761904762,-7.125,295.2380952380953,21.375,342.8571428571429,22C390.4761904761905,22.625,409.5238095238095,-7.25,457.14285714285717,-6C504.7619047619048,-4.75,523.8095238095239,27.166666666666668,571.4285714285714,28C619.047619047619,28.833333333333332,638.0952380952382,-2.833333333333333,685.7142857142858,-2C733.3333333333334,-1.1666666666666667,776.1904761904761,24.916666666666664,800,32"
                    transform="matrix(1,0,0,1,0,60)"
                  ></path>
                  <path
                    d="M10,10C31.726190476190478,10.625,68.75,16.958333333333332,114.28571428571429,13C159.82142857142858,9.041666666666668,180.95238095238096,-10.875,228.57142857142858,-9C276.1904761904762,-7.125,295.2380952380953,21.375,342.8571428571429,22C390.4761904761905,22.625,409.5238095238095,-7.25,457.14285714285717,-6C504.7619047619048,-4.75,523.8095238095239,27.166666666666668,571.4285714285714,28C619.047619047619,28.833333333333332,638.0952380952382,-2.833333333333333,685.7142857142858,-2C733.3333333333334,-1.1666666666666667,776.1904761904761,24.916666666666664,800,32"
                    transform="matrix(1,0,0,1,0,50)"
                  ></path>
                  <path
                    d="M10,10C31.726190476190478,10.625,68.75,16.958333333333332,114.28571428571429,13C159.82142857142858,9.041666666666668,180.95238095238096,-10.875,228.57142857142858,-9C276.1904761904762,-7.125,295.2380952380953,21.375,342.8571428571429,22C390.4761904761905,22.625,409.5238095238095,-7.25,457.14285714285717,-6C504.7619047619048,-4.75,523.8095238095239,27.166666666666668,571.4285714285714,28C619.047619047619,28.833333333333332,638.0952380952382,-2.833333333333333,685.7142857142858,-2C733.3333333333334,-1.1666666666666667,776.1904761904761,24.916666666666664,800,32"
                    transform="matrix(1,0,0,1,0,40)"
                  ></path>
                  <path
                    d="M10,10C31.726190476190478,10.625,68.75,16.958333333333332,114.28571428571429,13C159.82142857142858,9.041666666666668,180.95238095238096,-10.875,228.57142857142858,-9C276.1904761904762,-7.125,295.2380952380953,21.375,342.8571428571429,22C390.4761904761905,22.625,409.5238095238095,-7.25,457.14285714285717,-6C504.7619047619048,-4.75,523.8095238095239,27.166666666666668,571.4285714285714,28C619.047619047619,28.833333333333332,638.0952380952382,-2.833333333333333,685.7142857142858,-2C733.3333333333334,-1.1666666666666667,776.1904761904761,24.916666666666664,800,32"
                    transform="matrix(1,0,0,1,0,30)"
                  ></path>
                  <path
                    d="M10,10C31.726190476190478,10.625,68.75,16.958333333333332,114.28571428571429,13C159.82142857142858,9.041666666666668,180.95238095238096,-10.875,228.57142857142858,-9C276.1904761904762,-7.125,295.2380952380953,21.375,342.8571428571429,22C390.4761904761905,22.625,409.5238095238095,-7.25,457.14285714285717,-6C504.7619047619048,-4.75,523.8095238095239,27.166666666666668,571.4285714285714,28C619.047619047619,28.833333333333332,638.0952380952382,-2.833333333333333,685.7142857142858,-2C733.3333333333334,-1.1666666666666667,776.1904761904761,24.916666666666664,800,32"
                    transform="matrix(1,0,0,1,0,20)"
                  ></path>
                  <path
                    d="M10,10C31.726190476190478,10.625,68.75,16.958333333333332,114.28571428571429,13C159.82142857142858,9.041666666666668,180.95238095238096,-10.875,228.57142857142858,-9C276.1904761904762,-7.125,295.2380952380953,21.375,342.8571428571429,22C390.4761904761905,22.625,409.5238095238095,-7.25,457.14285714285717,-6C504.7619047619048,-4.75,523.8095238095239,27.166666666666668,571.4285714285714,28C619.047619047619,28.833333333333332,638.0952380952382,-2.833333333333333,685.7142857142858,-2C733.3333333333334,-1.1666666666666667,776.1904761904761,24.916666666666664,800,32"
                    transform="matrix(1,0,0,1,0,10)"
                  ></path>
                </g>
              </svg>
            </div>

            

            <h2 className="font-bold text-4xl mb-4 w-full">Who we are?</h2>
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
              placeholder="blur"
              loading="lazy"
              src={who}
              className="w-auto h-auto mx-auto rounded-xl"
            />
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
        <div>
          <RecentSponsors />
        </div>
      </div>
    </div>
  );
}
