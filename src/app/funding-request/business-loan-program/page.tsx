import { Metadata } from "next";
import Link from "next/link";
// 1. Import the font from Google
import { Inter } from "next/font/google";

// 2. Configure the font
const mainFont = Inter({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Program Details | Youth Business Loan Program",
  description: "Interest-free, educational micro-loans for youth ages 8-18.",
};

export default function BusinessLoanProgram() {
  return (
    // 3. Apply the font className to the wrapper div
    <div className={`min-h-screen w-full bg-white text-black ${mainFont.className} selection:bg-yellow-200 selection:text-black pb-24`}>
      
      <div className="max-w-6xl mx-auto px-6 pt-12 md:pt-20">
        
        <Link href="/funding-request" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-black transition-colors mb-8 group">
          <span className="group-hover:-translate-x-1 transition-transform">←</span> Back
        </Link>

        {/* Tightened the tracking (letter-spacing) for the big header to make it look cleaner */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] mb-6">
          Program <br className="hidden md:block"/>
          Details.
        </h1>
      </div>

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

        {/* LEFT COLUMN: MAIN CONTENT */}
        <div className="lg:col-span-8 space-y-16">

          {/* 1. PROGRAM SUMMARY */}
          <section>
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 tracking-tight">
              <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
              Program Summary
            </h2>
            <div className="prose prose-lg text-gray-600 leading-relaxed">
              <p className="mb-4">
                The <strong className="text-black">Youth Business Loan Program</strong> operated by the Future Entrepreneurs of America Foundation (FEOAF) is an interest-free, education-based micro-loan initiative designed to support youth ages 8–18 in developing entrepreneurship and financial literacy skills through guided, real-world application.
              </p>
              <p>
                The program provides small, supervised, and age-appropriate loans to youth participants to support approved business or project ideas. Unlike traditional lending, this program is not designed for profit or financial return; rather, it serves as a charitable educational tool that promotes responsibility, planning, and economic understanding among youth.
              </p>
            </div>
          </section>

          {/* 2. COMMUNITY NEED */}
          <section className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
             <h3 className="text-xl font-bold mb-4 tracking-tight">Community Need & Rationale</h3>
             <p className="text-gray-600 mb-6 leading-relaxed">
               Many young people, particularly from underserved or economically diverse households—lack early exposure to:
             </p>
             <ul className="space-y-3 mb-6">
                {[
                  "Financial literacy education",
                  "Entrepreneurial skill development",
                  "Safe access to startup capital",
                  "Mentorship and real-world learning opportunities"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700 font-medium">
                    <span className="text-yellow-500 mt-1">➤</span>
                    {item}
                  </li>
                ))}
             </ul>
             <p className="text-gray-600 leading-relaxed">
               Financial institutions and foundations recognize that early financial education is critical to long-term economic stability and workforce readiness. FEOAF’s Youth Business Loan Program addresses this need by combining financial education, mentorship, and supervised capital access in a controlled nonprofit setting.
             </p>
          </section>

          {/* 3. PROGRAM DESIGN */}
          <section>
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 tracking-tight">
              <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
              Program Design & Structure
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                {/* Cards */}
                <div className="p-6 rounded-3xl border border-gray-200 hover:border-yellow-400 transition-colors duration-300">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Loan Type</h3>
                    <p className="text-lg font-bold">Interest-free micro-loans</p>
                </div>

                <div className="p-6 rounded-3xl border border-gray-200 hover:border-yellow-400 transition-colors duration-300">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Interest & Fees</h3>
                    <p className="text-lg font-bold">None (0% interest, no fees)</p>
                </div>

                <div className="p-6 rounded-3xl border border-gray-200 hover:border-yellow-400 transition-colors duration-300">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Loan Amounts</h3>
                    <p className="text-lg font-bold leading-tight">Small, youth-appropriate amounts determined by project scope</p>
                </div>

                <div className="p-6 rounded-3xl border border-gray-200 hover:border-yellow-400 transition-colors duration-300">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Eligible Uses</h3>
                    <p className="text-lg font-bold leading-tight">Startup supplies, materials, equipment, and youth-led project expenses</p>
                </div>

                <div className="p-6 rounded-3xl border border-gray-200 hover:border-yellow-400 transition-colors duration-300">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Eligibility</h3>
                    <p className="text-lg font-bold leading-tight">Active FEOAF members meeting program participation criteria</p>
                </div>

                <div className="p-6 rounded-3xl border border-gray-200 hover:border-yellow-400 transition-colors duration-300">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Duration</h3>
                    <p className="text-lg font-bold leading-tight">Short-term, education-based repayment timelines</p>
                </div>
            </div>
            <p className="mt-6 text-sm text-gray-400 italic font-medium">
              *All loans are issued as part of a structured learning process, not as consumer or commercial credit.
            </p>
          </section>

          {/* 4. EDUCATIONAL OVERSIGHT */}
          <section>
             <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 tracking-tight">
              <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
              Educational Oversight & Safeguards
            </h2>
            <div className="bg-black rounded-[2.5rem] p-8 md:p-10 text-white">
                <p className="mb-8 text-gray-300 text-lg">
                    To ensure responsible use of funds and grant compliance, FEOAF implements the following safeguards:
                </p>
                <ul className="space-y-4">
                    {[
                        "Parent/guardian awareness and acknowledgment",
                        "Age-appropriate project or business plan submission",
                        "Budget planning guidance and approval",
                        "Ongoing mentoring and program check-ins",
                        "Clear spending guidelines and documentation",
                        "Educational repayment expectations"
                    ].map((item, i) => (
                        <li key={i} className="flex items-start gap-4">
                            <div className="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-black">
                                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <span className="font-semibold text-gray-100">{item}</span>
                        </li>
                    ))}
                </ul>
                <div className="mt-10 pt-8 border-t border-gray-800">
                      <p className="text-sm font-medium text-gray-400 leading-relaxed">
                        FEOAF does not report to credit bureaus, does not charge interest or fees, and does not pursue collections. The program emphasizes learning outcomes over financial performance.
                      </p>
                </div>
            </div>
          </section>

          {/* 5. USE OF FUNDS & OUTCOMES */}
          <section className="space-y-12">
            
            {/* Use of Grant Funds */}
            <div>
              <h2 className="text-2xl font-bold mb-4 tracking-tight">Use of Grant Funds</h2>
              <p className="text-gray-600 mb-4 font-medium">Grant funding from banks or foundations will be used to:</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    "Capitalize the interest-free youth loan pool",
                    "Support financial education materials and tools",
                    "Provide program oversight and mentoring",
                    "Sustain a revolving loan model that reinvests repayments into future youth participants"
                  ].map((item, i) => (
                    <li key={i} className="bg-gray-50 p-4 rounded-xl text-sm font-bold text-gray-700 border border-gray-100 shadow-sm">
                       {item}
                    </li>
                  ))}
              </ul>
              <p className="mt-4 text-sm text-gray-500 italic font-medium">
                All funds are used exclusively for charitable, programmatic purposes consistent with nonprofit and grantor guidelines.
              </p>
            </div>

            {/* Outcomes */}
            <div>
                <h2 className="text-2xl font-bold mb-4 tracking-tight">Expected Outcomes</h2>
                <div className="bg-yellow-50 rounded-3xl p-8 border border-yellow-100">
                    <p className="font-bold mb-4 text-lg">Through participation in the Youth Business Loan Program, youth will:</p>
                    <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-800 font-medium">
                        <li>Gain foundational financial literacy and budgeting skills</li>
                        <li>Learn responsible money management</li>
                        <li>Develop confidence and problem-solving abilities</li>
                        <li>Experience real-world entrepreneurship in a safe environment</li>
                    </ul>
                    <p className="text-sm font-bold text-yellow-800 bg-yellow-100 inline-block px-3 py-1 rounded-lg">
                        Annually, FEOAF expects to support 15–20 youth entrepreneurs, depending on funding availability.
                    </p>
                </div>
            </div>

            {/* Alignment */}
            <div>
                <h2 className="text-2xl font-bold mb-4 tracking-tight">Alignment with Priorities</h2>
                <p className="text-gray-600 mb-4 font-medium">This program aligns strongly with common funding priorities, including:</p>
                <div className="flex flex-wrap gap-2">
                    {[
                        "Youth financial literacy",
                        "Economic empowerment",
                        "Workforce readiness",
                        "Entrepreneurship education",
                        "Community development"
                    ].map((tag, i) => (
                        <span key={i} className="px-4 py-2 rounded-full border border-gray-200 bg-white text-gray-700 text-sm font-bold shadow-sm">
                            {tag}
                        </span>
                    ))}
                </div>
                <p className="mt-8 text-lg font-bold text-black leading-snug">
                    The Youth Business Loan Program provides a measurable, responsible, and replicable model for early financial education with long-term community impact.
                </p>
            </div>

          </section>

        </div>

        {/* RIGHT COLUMN: SIDEBAR */}
        <div className="lg:col-span-4 relative">
            <div className="sticky top-24 space-y-6">
                
                <div className="p-8 rounded-[2.5rem] bg-black text-white relative overflow-hidden group">
                    <h3 className="text-2xl font-bold mb-2 tracking-tight">Ready to Start?</h3>
                    <p className="text-gray-400 mb-8 text-sm font-medium">
                        If you have a business idea and are ready to learn, apply for funding today.
                    </p>
                    <Link href="/funding-request/apply" className="w-full btn bg-white text-black hover:bg-yellow-400 hover:text-black border-none h-14 rounded-full text-lg font-bold flex items-center justify-center gap-2 transition-all duration-300">
                        Apply Now
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                    </Link>
                </div>

                <div className="p-6 rounded-3xl border border-gray-100 bg-gray-50">
                    <h4 className="font-bold text-xs uppercase tracking-widest text-gray-400 mb-2">Compliance Statement</h4>
                    <p className="text-xs text-gray-500 leading-relaxed font-medium">
                        The FEOAF Youth Business Loan Program operates as a charitable educational initiative, consistent with nonprofit best practices. Funds are monitored, documented, and reinvested to maximize community benefit and youth development.
                    </p>
                </div>

            </div>
        </div>

      </div>
    </div>
  );
}