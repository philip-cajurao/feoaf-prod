import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Funding Request | Future Entrepreneurs Of America Foundation",
  description: "Youth Business Loan Program and Application.",
};

export default function FundingRequest() {
  return (
    <div className="min-h-screen w-full bg-white text-black font-sans flex flex-col justify-center selection:bg-yellow-200 selection:text-black">
      
      {/* --- MAIN CONTENT --- */}
      <main className="w-full max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          
        {/* --- LEFT COLUMN: Narrative --- */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-8">
          
          {/* Headline */}
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] text-black">
            Youth <br/>
            Funding.
          </h1>

          {/* THE SIGNATURE: 4 Google Dots (Static now) */}
          <div className="flex gap-4 pt-2">
             <div className="w-4 h-4 rounded-full bg-blue-600"></div>
             <div className="w-4 h-4 rounded-full bg-red-500"></div>
             <div className="w-4 h-4 rounded-full bg-yellow-400"></div>
             <div className="w-4 h-4 rounded-full bg-green-500"></div>
          </div>

          <div className="space-y-6 max-w-md pt-4">
            <p className="text-2xl leading-relaxed font-bold text-gray-900">
              Turning students into founders.
            </p>
            <p className="text-lg leading-relaxed text-gray-500 font-medium">
              The Youth Business Loan Program is an interest-free, education-first initiative supporting ages 8–18 in real-world entrepreneurship.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="flex gap-12 pt-8 border-t border-gray-100">
              <div>
                  <span className="text-4xl font-black text-black">0%</span>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mt-1">Interest</p>
              </div>
              <div>
                  <span className="text-4xl font-black text-black">8-18</span>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mt-1">Ages</p>
              </div>
          </div>
        </div>


        {/* --- RIGHT COLUMN: Playful Cards --- */}
        <div className="lg:col-span-7 flex flex-col justify-center gap-6">
          
          {/* CARD 1: Application (Default Black -> Hover Blue) */}
          <Link href="#" className="group relative w-full">
              <div className="relative bg-white border border-gray-200 p-8 sm:p-10 rounded-[2.5rem] flex items-center justify-between gap-6 transition-all duration-300 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 overflow-hidden">
                  
                  {/* HOVER CONFETTI: Tiny shapes that appear on hover */}
                  <div className="absolute right-12 top-10 w-2 h-2 rounded-full bg-red-500 opacity-0 group-hover:opacity-100 group-hover:-translate-y-4 transition-all duration-500"></div>
                  <div className="absolute right-20 bottom-10 w-2 h-2 rounded-sm bg-yellow-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-4 transition-all duration-500 delay-75"></div>
                  <div className="absolute right-8 bottom-16 w-3 h-3 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 group-hover:-translate-x-2 transition-all duration-500 delay-100"></div>

                  <div className="relative z-10">
                      {/* Eyebrow: Black Default -> Blue Hover */}
                      <span className="text-xs font-bold uppercase tracking-widest text-black mb-2 block group-hover:text-blue-600 transition-colors">
                          Start Here
                      </span>
                      <h2 className="text-3xl font-bold text-black leading-tight">
                          Youth Business <br className="hidden md:block" /> Loan Application
                      </h2>
                      <p className="mt-2 text-gray-500 max-w-sm group-hover:text-black transition-colors">
                          Submit your business idea and funding request.
                      </p>
                  </div>

                  {/* Icon: Black Default -> Blue Hover */}
                  <div className="relative z-10 w-16 h-16 rounded-full bg-black border-2 border-transparent flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-200 transition-all duration-300 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 text-white">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                      </svg>
                  </div>
              </div>
          </Link>

          {/* CARD 2: Program Details (Default Black -> Hover Red) */}
          <Link href="/funding-request/business-loan-program" className="group relative w-full">
              <div className="relative bg-white border border-gray-200 p-8 sm:p-10 rounded-[2.5rem] flex items-center justify-between gap-6 transition-all duration-300 hover:border-red-500 hover:shadow-xl hover:shadow-red-500/10 hover:-translate-y-1 overflow-hidden">
                  
                  {/* HOVER CONFETTI: Tiny shapes that appear on hover */}
                  <div className="absolute right-12 top-10 w-2 h-2 rounded-full bg-blue-600 opacity-0 group-hover:opacity-100 group-hover:-translate-y-4 transition-all duration-500"></div>
                  <div className="absolute right-20 bottom-10 w-2 h-2 rounded-sm bg-green-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-4 transition-all duration-500 delay-75"></div>
                  <div className="absolute right-8 bottom-16 w-3 h-3 rounded-full bg-yellow-400 opacity-0 group-hover:opacity-100 group-hover:-translate-x-2 transition-all duration-500 delay-100"></div>

                  <div className="relative z-10">
                      {/* Eyebrow: Black Default -> Red Hover */}
                      <span className="text-xs font-bold uppercase tracking-widest text-black mb-2 block group-hover:text-red-500 transition-colors">
                          Read First
                      </span>
                      <h2 className="text-3xl font-bold text-black leading-tight">
                          Youth Business <br className="hidden md:block" /> Loan Program
                      </h2>
                      <p className="mt-2 text-gray-500 max-w-sm group-hover:text-black transition-colors">
                          Understand the rules, eligibility, and process.
                      </p>
                  </div>

                  {/* Icon: Black Default -> Red Hover */}
                  <div className="relative z-10 w-16 h-16 rounded-full bg-black border-2 border-transparent flex items-center justify-center group-hover:bg-red-500 group-hover:border-red-200 transition-all duration-300 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 text-white">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                  </div>
              </div>
          </Link>

        </div>
      </main>
    </div>
  );
}