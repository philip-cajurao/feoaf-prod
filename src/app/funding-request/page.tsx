// import { Metadata } from "next";
// import Link from "next/link";
// import Image from "next/image";
// import YouthFundingBG from "../assets/youth-funding-bg1.jpeg";

// export const metadata: Metadata = {
//   title: "Funding Request | Future Entrepreneurs Of America Foundation",
//   description: "Youth Business Loan Program and Application.",
// };

// export default function FundingRequest() {
//   return (
//     <div className="min-h-screen w-full bg-gray-50 font-sans selection:bg-yellow-200 selection:text-black">
      
//       {/* =========================================================
//           1. HEADER SECTION (60vh)
//       ========================================================= */}
//       <div className="relative w-full h-[60vh] min-h-[500px] flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-black">
        
//         {/* Background Image */}
//         <div className="absolute inset-0 z-0">
//             <Image
//                 src={YouthFundingBG}
//                 alt="Background"
//                 fill
//                 priority
//                 placeholder="blur"
//                 className="object-cover opacity-60"
//                 style={{ objectPosition: "50% 25%" }} 
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/60"></div>
//         </div>

//         {/* Header Content */}
//         <div className="relative z-10 max-w-4xl space-y-7 -mt-16">
            
//             <div className="flex justify-center gap-3">
//                 <div className="w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.8)]"></div>
//                 <div className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_12px_rgba(239,68,68,0.8)]"></div>
//                 <div className="w-3 h-3 rounded-full bg-yellow-400 shadow-[0_0_12px_rgba(250,204,21,0.8)]"></div>
//                 <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_12px_rgba(34,197,94,0.8)]"></div>
//             </div>

//             <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tighter text-white drop-shadow-2xl">
//                 Youth Funding.
//             </h1>
            
//             <p className="text-xl text-gray-200 font-medium max-w-2xl mx-auto leading-relaxed">
//                 Turning students into founders with interest-free loans and real-world education.
//             </p>

//             <div className="flex justify-center gap-10 pt-3">
//                 <div className="text-center">
//                     <span className="block text-3xl font-black text-white">0%</span>
//                     <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Interest</span>
//                 </div>
//                 <div className="w-px h-10 bg-white/20"></div>
//                 <div className="text-center">
//                     <span className="block text-3xl font-black text-white">8-18</span>
//                     <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Ages</span>
//                 </div>
//             </div>
//         </div>
//       </div>


//       {/* =========================================================
//           2. FLOATING ACTION GRID (Compact Cards + Full Titles)
//       ========================================================= */}
//       <main className="relative z-20 px-6 pb-24">
        
//         <div className="-mt-28 w-full max-w-4xl mx-auto">
            
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                
//                 {/* --- CARD 1: APPLY --- */}
//                 <Link href="/funding-request/apply" className="group relative w-full h-full">
//                     <div className="relative h-full bg-white p-8 rounded-[2rem] shadow-2xl shadow-black/20 border border-white/20 flex flex-col justify-between overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-yellow-500/20">
                        
//                         <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

//                         <div className="relative z-10">
//                             <div className="w-12 h-12 rounded-2xl bg-black text-white flex items-center justify-center mb-6 group-hover:bg-yellow-500 transition-colors duration-300 shadow-lg">
//                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
//                                     <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
//                                 </svg>
//                             </div>
                            
//                             {/* RESTORED FULL TITLE */}
//                             <h2 className="text-2xl font-bold text-black group-hover:text-yellow-600 transition-colors">
//                                 Youth Business <br className="hidden md:block" /> Loan Application
//                             </h2>
//                             <p className="mt-3 text-base text-gray-500 leading-relaxed">
//                                 Ready to build? Submit your business idea, budget, and funding request here.
//                             </p>
//                         </div>

//                         <div className="relative z-10 mt-6 flex items-center text-xs font-bold uppercase tracking-widest text-black group-hover:gap-2 transition-all">
//                             Begin Now <span className="ml-2">→</span>
//                         </div>
//                     </div>
//                 </Link>

//                 {/* --- CARD 2: GUIDELINES --- */}
//                 <Link href="/funding-request/business-loan-program" className="group relative w-full h-full">
//                     <div className="relative h-full bg-white p-8 rounded-[2rem] shadow-2xl shadow-black/20 border border-white/20 flex flex-col justify-between overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-yellow-500/20">
                        
//                         <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

//                         <div className="relative z-10">
//                             <div className="w-12 h-12 rounded-2xl bg-black text-white flex items-center justify-center mb-6 group-hover:bg-yellow-500 transition-colors duration-300 shadow-lg">
//                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
//                                     <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
//                                 </svg>
//                             </div>
                            
//                             {/* RESTORED FULL TITLE */}
//                             <h2 className="text-2xl font-bold text-black group-hover:text-yellow-600 transition-colors">
//                                 Youth Business <br className="hidden md:block" /> Loan Program
//                             </h2>
//                             <p className="mt-3 text-base text-gray-500 leading-relaxed">
//                                 Review eligibility requirements, loan terms, and educational prerequisites.
//                             </p>
//                         </div>

//                         <div className="relative z-10 mt-6 flex items-center text-xs font-bold uppercase tracking-widest text-black group-hover:gap-2 transition-all">
//                             Read First <span className="ml-2">→</span>
//                         </div>
//                     </div>
//                 </Link>

//             </div>

//             {/* Support Link */}
//             <div className="mt-12 text-center">
//                  <Link href="#" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-gray-200 text-sm font-bold text-gray-600 hover:bg-black hover:text-white hover:border-black transition-all shadow-sm">
//                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
//                         <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
//                     </svg>
//                     Need Help? Contact Support
//                  </Link>
//             </div>

//         </div>
//       </main>
//     </div>
//   );
// }



import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import YouthFundingBG from "../assets/youth-funding-bg1.jpeg";

export const metadata: Metadata = {
  title: "Funding Request | Future Entrepreneurs Of America Foundation",
  description: "Youth Business Loan Program and Application.",
};

export default function FundingRequest() {
  return (
    <div className="min-h-screen w-full grid grid-cols-1 lg:grid-cols-2 bg-white font-sans selection:bg-yellow-200 selection:text-black">
      
      {/* =========================================================
          LEFT COLUMN: IMAGE & TEXT CONTENT
      ========================================================= */}
      <div className="relative flex flex-col justify-center p-8 sm:p-12 lg:p-20 overflow-hidden min-h-[600px] lg:min-h-screen">
        
        <div className="absolute inset-0 z-0">
            <Image
                src={YouthFundingBG}
                alt="Background"
                fill
                priority
                placeholder="blur"
                className="object-cover"
                style={{ 
                    objectPosition: "50% 30%", 
                }} 
            />
            <div className="absolute inset-0 bg-black/70 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-black/45"></div>
        </div>

        <div className="relative z-10 space-y-12 max-w-xl">
            
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] text-white">
                Youth <br/>
                Funding.
            </h1>

            <div className="space-y-6">
                <div className="flex gap-3 pb-2">
                    <div className="w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)]"></div>
                    <div className="w-4 h-4 rounded-full bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.8)]"></div>
                    <div className="w-4 h-4 rounded-full bg-yellow-400 shadow-[0_0_15px_rgba(250,204,21,0.8)]"></div>
                    <div className="w-4 h-4 rounded-full bg-green-500 shadow-[0_0_15px_rgba(34,197,94,0.8)]"></div>
                </div>

                <p className="text-3xl sm:text-4xl leading-tight font-bold text-white">
                    Turning students <br /> into founders.
                </p>
                <p className="text-lg leading-relaxed text-gray-300 font-medium max-w-md">
                    The Youth Business Loan Program is an interest-free, education-first initiative supporting ages 8–18 in real-world entrepreneurship.
                </p>
            </div>

            <div className="flex gap-12 pt-8 border-t border-white/20">
                <div>
                    <span className="text-4xl font-black text-white">0%</span>
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mt-1">Interest</p>
                </div>
                <div>
                    <span className="text-4xl font-black text-white">8-18</span>
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mt-1">Ages</p>
                </div>
            </div>
        </div>
      </div>


      {/* =========================================================
          RIGHT COLUMN: LINKS / ACTION CARDS
      ========================================================= */}
      <div className="flex flex-col justify-center items-center p-6 sm:p-12 lg:p-20 bg-gray-50/50">
        
        <div className="w-full max-w-lg lg:max-w-xl space-y-8">
            
            <Link href="/funding-request/apply" className="group relative w-full block">
                <div className="relative bg-white border border-gray-200 p-8 sm:p-12 rounded-[2.5rem] flex items-center justify-between gap-6 transition-all duration-300 hover:border-yellow-500 hover:shadow-2xl hover:shadow-yellow-500/15 hover:-translate-y-1 overflow-hidden shadow-xl shadow-gray-200/50">
                    
                    <div className="absolute right-12 top-10 w-2 h-2 rounded-full bg-red-500 opacity-0 group-hover:opacity-100 group-hover:-translate-y-4 transition-all duration-500"></div>
                    <div className="absolute right-20 bottom-10 w-2 h-2 rounded-sm bg-blue-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-4 transition-all duration-500 delay-75"></div>
                    <div className="absolute right-8 bottom-16 w-3 h-3 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 group-hover:-translate-x-2 transition-all duration-500 delay-100"></div>

                    <div className="relative z-10">
                        <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3 block group-hover:text-yellow-600 transition-colors">
                            Start Here
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-bold text-black leading-tight">
                            Youth Business <br className="hidden md:block" /> Loan Application
                        </h2>
                        <p className="mt-3 text-base text-gray-500 max-w-[240px] group-hover:text-black transition-colors">
                            Submit your business idea.
                        </p>
                    </div>

                    <div className="relative z-10 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-black border-2 border-transparent flex items-center justify-center group-hover:bg-yellow-500 group-hover:border-yellow-200 transition-all duration-300 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 sm:w-7 sm:h-7 text-white group-hover:text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                    </div>
                </div>
            </Link>

            {/* Card 2: Read First */}
            <Link href="/funding-request/business-loan-program" className="group relative w-full block">
                <div className="relative bg-white border border-gray-200 p-8 sm:p-12 rounded-[2.5rem] flex items-center justify-between gap-6 transition-all duration-300 hover:border-yellow-500 hover:shadow-2xl hover:shadow-yellow-500/15 hover:-translate-y-1 overflow-hidden shadow-xl shadow-gray-200/50">
                    
                    <div className="absolute right-12 top-10 w-2 h-2 rounded-full bg-blue-600 opacity-0 group-hover:opacity-100 group-hover:-translate-y-4 transition-all duration-500"></div>
                    <div className="absolute right-20 bottom-10 w-2 h-2 rounded-sm bg-green-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-4 transition-all duration-500 delay-75"></div>
                    <div className="absolute right-8 bottom-16 w-3 h-3 rounded-full bg-red-500 opacity-0 group-hover:opacity-100 group-hover:-translate-x-2 transition-all duration-500 delay-100"></div>

                    <div className="relative z-10">
                        <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3 block group-hover:text-yellow-600 transition-colors">
                            Read First
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-bold text-black leading-tight">
                            Youth Business <br className="hidden md:block" /> Loan Program
                        </h2>
                        <p className="mt-3 text-base text-gray-500 max-w-[240px] group-hover:text-black transition-colors">
                            Rules & Eligibility.
                        </p>
                    </div>

                    <div className="relative z-10 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-black border-2 border-transparent flex items-center justify-center group-hover:bg-yellow-500 group-hover:border-yellow-200 transition-all duration-300 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 sm:w-7 sm:h-7 text-white group-hover:text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                    </div>
                </div>
            </Link>

            <div className="pt-8 text-center">
                <p className="text-sm text-gray-400 font-medium">
                    Have questions? <a href="#" className="text-black underline decoration-yellow-400 decoration-2 underline-offset-2 hover:bg-yellow-100 transition-colors">Contact Support</a>
                </p>
            </div>

        </div>
      </div>
    </div>
  );
}





// import { Metadata } from "next";
// import Link from "next/link";
// import Image from "next/image";
// import YouthFundingBG from "../assets/youth-funding-bg1.jpeg";

// export const metadata: Metadata = {
//   title: "Funding Request | Future Entrepreneurs Of America Foundation",
//   description: "Youth Business Loan Program and Application.",
// };

// export default function FundingRequest() {
//   return (
//     <div className="min-h-screen w-full bg-white text-black font-sans selection:bg-yellow-200 selection:text-black">
      
//       {/* --- HERO BANNER SECTION --- */}
//       <div className="relative w-full h-[250px] flex items-center justify-center overflow-hidden bg-black">
        
//         {/* Background Image */}
//         <div className="absolute inset-0 w-full h-full">
//             <Image
//                 src={YouthFundingBG}
//                 alt="Background"
//                 fill
//                 priority
//                 placeholder="blur"
//                 className="object-cover"
//                 style={{ 
//                     objectPosition: "50% 20%", 
//                     // transform: "scale(0.85)" 
//                 }} 
//             />
//             {/* Overlays */}
//             <div className="absolute inset-0 bg-black/80"></div>
//         </div>

//         {/* Content: Just the Title now */}
//         <div className="relative z-10 w-full max-w-6xl mx-auto px-6 flex flex-col items-center justify-center h-full text-center">
//             <h1 className="text-5xl sm:text-6xl font-black tracking-tighter leading-none text-white drop-shadow-lg">
//                 Youth Funding.
//             </h1>
//         </div>
//       </div>


//       {/* --- MAIN CONTENT SECTION --- */}
//       <main className="w-full max-w-6xl mx-auto px-6 py-16">
        
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
//           {/* LEFT COLUMN */}
//           <div className="lg:col-span-5 flex flex-col justify-start space-y-8 lg:pt-4">
                
//                 <div className="space-y-6">
                    
//                     {/* --- MOVED DOTS HERE --- */}
//                     <div className="flex gap-3 pb-2">
//                         <div className="w-4 h-4 rounded-full bg-blue-600"></div>
//                         <div className="w-4 h-4 rounded-full bg-red-500"></div>
//                         <div className="w-4 h-4 rounded-full bg-yellow-400"></div>
//                         <div className="w-4 h-4 rounded-full bg-green-500"></div>
//                     </div>
//                     {/* ----------------------- */}

//                     <p className="text-3xl leading-tight font-black text-black">
//                         Turning students <br /> into founders.
//                     </p>
//                     <p className="text-lg leading-relaxed text-gray-600 font-medium">
//                         The Youth Business Loan Program is an interest-free, education-first initiative supporting ages 8–18 in real-world entrepreneurship.
//                     </p>
//                 </div>

//                 <div className="flex gap-12 pt-8 border-t border-gray-200">
//                     <div>
//                         <span className="text-4xl font-black text-black">0%</span>
//                         <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mt-1">Interest</p>
//                     </div>
//                     <div>
//                         <span className="text-4xl font-black text-black">8-18</span>
//                         <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mt-1">Ages</p>
//                     </div>
//                 </div>

//           </div>

//           {/* RIGHT COLUMN */}
//           <div className="lg:col-span-7 flex flex-col justify-center gap-6">
            
//             <Link href="/funding-request/apply" className="group relative w-full">
//                 <div className="relative bg-white border border-gray-200 p-8 sm:p-10 rounded-[2.5rem] flex items-center justify-between gap-6 transition-all duration-300 hover:border-yellow-500 hover:shadow-2xl hover:shadow-yellow-500/15 hover:-translate-y-1 overflow-hidden shadow-lg shadow-gray-100">
//                     <div className="absolute right-12 top-10 w-2 h-2 rounded-full bg-red-500 opacity-0 group-hover:opacity-100 group-hover:-translate-y-4 transition-all duration-500"></div>
//                     <div className="absolute right-20 bottom-10 w-2 h-2 rounded-sm bg-blue-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-4 transition-all duration-500 delay-75"></div>
//                     <div className="absolute right-8 bottom-16 w-3 h-3 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 group-hover:-translate-x-2 transition-all duration-500 delay-100"></div>

//                     <div className="relative z-10">
//                         <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 block group-hover:text-yellow-600 transition-colors">
//                             Start Here
//                         </span>
//                         <h2 className="text-3xl font-bold text-black leading-tight">
//                             Youth Business <br className="hidden md:block" /> Loan Application
//                         </h2>
//                         <p className="mt-2 text-gray-500 max-w-sm group-hover:text-black transition-colors">
//                             Submit your business idea and funding request.
//                         </p>
//                     </div>

//                     <div className="relative z-10 w-16 h-16 rounded-full bg-black border-2 border-transparent flex items-center justify-center group-hover:bg-yellow-500 group-hover:border-yellow-200 transition-all duration-300 flex-shrink-0">
//                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 text-white group-hover:text-white">
//                             <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
//                         </svg>
//                     </div>
//                 </div>
//             </Link>

//             <Link href="/funding-request/business-loan-program" className="group relative w-full">
//                 <div className="relative bg-white border border-gray-200 p-8 sm:p-10 rounded-[2.5rem] flex items-center justify-between gap-6 transition-all duration-300 hover:border-yellow-500 hover:shadow-2xl hover:shadow-yellow-500/15 hover:-translate-y-1 overflow-hidden shadow-lg shadow-gray-100">
//                     <div className="absolute right-12 top-10 w-2 h-2 rounded-full bg-blue-600 opacity-0 group-hover:opacity-100 group-hover:-translate-y-4 transition-all duration-500"></div>
//                     <div className="absolute right-20 bottom-10 w-2 h-2 rounded-sm bg-green-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-4 transition-all duration-500 delay-75"></div>
//                     <div className="absolute right-8 bottom-16 w-3 h-3 rounded-full bg-red-500 opacity-0 group-hover:opacity-100 group-hover:-translate-x-2 transition-all duration-500 delay-100"></div>

//                     <div className="relative z-10">
//                         <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 block group-hover:text-yellow-600 transition-colors">
//                             Read First
//                         </span>
//                         <h2 className="text-3xl font-bold text-black leading-tight">
//                             Youth Business <br className="hidden md:block" /> Loan Program
//                         </h2>
//                         <p className="mt-2 text-gray-500 max-w-sm group-hover:text-black transition-colors">
//                             Understand the rules, eligibility, and process.
//                         </p>
//                     </div>

//                     <div className="relative z-10 w-16 h-16 rounded-full bg-black border-2 border-transparent flex items-center justify-center group-hover:bg-yellow-500 group-hover:border-yellow-200 transition-all duration-300 flex-shrink-0">
//                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 text-white group-hover:text-white">
//                             <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
//                         </svg>
//                     </div>
//                 </div>
//             </Link>

//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }





// import { Metadata } from "next";
// import Link from "next/link";
// import Image from "next/image";
// import YouthFundingBG from "../assets/youth-funding-bg.jpeg";

// export const metadata: Metadata = {
//   title: "Funding Request | Future Entrepreneurs Of America Foundation",
//   description: "Youth Business Loan Program and Application.",
// };

// export default function FundingRequest() {
//   return (
//     // Changed bg-white to bg-black, text-black to text-white
//     <div className="relative isolate min-h-screen w-full bg-black text-white font-sans flex flex-col justify-center selection:bg-yellow-500 selection:text-black overflow-hidden">
      
//       {/* --- BACKGROUND IMAGE & DARK OVERLAY START --- */}
//       <div className="absolute inset-0 -z-10 h-full w-full">
//         <Image
//           src={YouthFundingBG}
//           alt="Background"
//           fill
//           priority
//           placeholder="blur"
//           className="object-cover object-top opacity-60" // Lowered opacity slightly for dark mode
//         />
        
//         {/* Dark Overlays */}
//         <div className="absolute inset-0 bg-black/70"></div>
//         {/* <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/70"></div> */}
//       </div>
//       {/* --- BACKGROUND IMAGE & DARK OVERLAY END --- */}

//       <main className="w-full max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center relative">
          
//         <div className="lg:col-span-5 flex flex-col justify-center space-y-8">
          
//           <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] text-white">
//             Youth <br/>
//             Funding.
//           </h1>

//           <div className="flex gap-4 pt-2">
//              <div className="w-4 h-4 rounded-full bg-blue-600 shadow-sm shadow-blue-900/50"></div>
//              <div className="w-4 h-4 rounded-full bg-red-500 shadow-sm shadow-red-900/50"></div>
//              <div className="w-4 h-4 rounded-full bg-yellow-400 shadow-sm shadow-yellow-900/50"></div>
//              <div className="w-4 h-4 rounded-full bg-green-500 shadow-sm shadow-green-900/50"></div>
//           </div>

//           <div className="space-y-6 max-w-md pt-4">
//             <p className="text-2xl leading-relaxed font-bold text-white">
//               Turning students into founders.
//             </p>
//             {/* Changed text-gray-600 to text-gray-400 */}
//             <p className="text-lg leading-relaxed text-gray-400 font-medium">
//               The Youth Business Loan Program is an interest-free, education-first initiative supporting ages 8–18 in real-world entrepreneurship.
//             </p>
//           </div>

//           {/* Changed border-gray-100 to border-white/10 */}
//           <div className="flex gap-12 pt-8 border-t border-white/10">
//               <div>
//                   <span className="text-4xl font-black text-white">0%</span>
//                   <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mt-1">Interest</p>
//               </div>
//               <div>
//                   <span className="text-4xl font-black text-white">8-18</span>
//                   <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mt-1">Ages</p>
//               </div>
//           </div>
//         </div>

//         <div className="lg:col-span-7 flex flex-col justify-center gap-6">
          
//           <Link href="/funding-request/apply" className="group relative w-full">
//               {/* Dark Card: bg-zinc-900/50, border-white/10 */}
//               <div className="relative bg-zinc-900/50 backdrop-blur-md border border-white/10 p-8 sm:p-10 rounded-[2.5rem] flex items-center justify-between gap-6 transition-all duration-300 hover:border-yellow-500 hover:shadow-xl hover:shadow-yellow-500/10 hover:-translate-y-1 overflow-hidden">
                  
//                   <div className="absolute right-12 top-10 w-2 h-2 rounded-full bg-red-500 opacity-0 group-hover:opacity-100 group-hover:-translate-y-4 transition-all duration-500"></div>
//                   <div className="absolute right-20 bottom-10 w-2 h-2 rounded-sm bg-blue-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-4 transition-all duration-500 delay-75"></div>
//                   <div className="absolute right-8 bottom-16 w-3 h-3 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 group-hover:-translate-x-2 transition-all duration-500 delay-100"></div>

//                   <div className="relative z-10">
//                       <span className="text-xs font-bold uppercase tracking-widest text-white/70 mb-2 block group-hover:text-yellow-400 transition-colors">
//                           Start Here
//                       </span>
//                       <h2 className="text-3xl font-bold text-white leading-tight">
//                           Youth Business <br className="hidden md:block" /> Loan Application
//                       </h2>
//                       <p className="mt-2 text-gray-400 max-w-sm group-hover:text-white transition-colors">
//                           Submit your business idea and funding request.
//                       </p>
//                   </div>

//                   {/* Icon Container: border-white/20, group-hover:bg-yellow-500 */}
//                   <div className="relative z-10 w-16 h-16 rounded-full bg-white/5 border-2 border-white/10 flex items-center justify-center group-hover:bg-yellow-500 group-hover:border-yellow-400 group-hover:text-black transition-all duration-300 flex-shrink-0">
//                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 text-white group-hover:text-black transition-colors">
//                           <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
//                       </svg>
//                   </div>
//               </div>
//           </Link>

//           <Link href="/funding-request/business-loan-program" className="group relative w-full">
//               <div className="relative bg-zinc-900/50 backdrop-blur-md border border-white/10 p-8 sm:p-10 rounded-[2.5rem] flex items-center justify-between gap-6 transition-all duration-300 hover:border-yellow-500 hover:shadow-xl hover:shadow-yellow-500/10 hover:-translate-y-1 overflow-hidden">
                  
//                   <div className="absolute right-12 top-10 w-2 h-2 rounded-full bg-blue-600 opacity-0 group-hover:opacity-100 group-hover:-translate-y-4 transition-all duration-500"></div>
//                   <div className="absolute right-20 bottom-10 w-2 h-2 rounded-sm bg-green-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-4 transition-all duration-500 delay-75"></div>
//                   <div className="absolute right-8 bottom-16 w-3 h-3 rounded-full bg-red-500 opacity-0 group-hover:opacity-100 group-hover:-translate-x-2 transition-all duration-500 delay-100"></div>

//                   <div className="relative z-10">
//                       <span className="text-xs font-bold uppercase tracking-widest text-white/70 mb-2 block group-hover:text-yellow-400 transition-colors">
//                           Read First
//                       </span>
//                       <h2 className="text-3xl font-bold text-white leading-tight">
//                           Youth Business <br className="hidden md:block" /> Loan Program
//                       </h2>
//                       <p className="mt-2 text-gray-400 max-w-sm group-hover:text-white transition-colors">
//                           Understand the rules, eligibility, and process.
//                       </p>
//                   </div>

//                   <div className="relative z-10 w-16 h-16 rounded-full bg-white/5 border-2 border-white/10 flex items-center justify-center group-hover:bg-yellow-500 group-hover:border-yellow-400 group-hover:text-black transition-all duration-300 flex-shrink-0">
//                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 text-white group-hover:text-black transition-colors">
//                           <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
//                       </svg>
//                   </div>
//               </div>
//           </Link>

//         </div>
//       </main>
//     </div>
//   );
// }