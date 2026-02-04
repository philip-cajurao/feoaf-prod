import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Program Details | Youth Business Loan Program",
  description: "Interest-free, educational micro-loans for youth ages 8-18.",
};

export default function BusinessLoanProgram() {
  return (
    <div className="min-h-screen w-full bg-white text-black font-sans selection:bg-yellow-200 selection:text-black pb-24">
      
      <div className="max-w-6xl mx-auto px-6 pt-12 md:pt-20">
        
        <Link href="/funding-request" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-black transition-colors mb-8 group">
          <span className="group-hover:-translate-x-1 transition-transform">←</span> Back
        </Link>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.95] mb-6">
          Program <br className="hidden md:block"/>
          Details.
        </h1>

        {/* The Signature Dots */}
        {/* <div className="flex gap-4 mb-12 border-b border-gray-100 pb-12">
             <div className="w-4 h-4 rounded-full bg-blue-600"></div>
             <div className="w-4 h-4 rounded-full bg-red-500"></div>
             <div className="w-4 h-4 rounded-full bg-yellow-400"></div>
             <div className="w-4 h-4 rounded-full bg-green-500"></div>
        </div> */}
      </div>

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

        <div className="lg:col-span-8 space-y-16">

          <section>
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
              Program Summary
            </h2>
            <div className="prose prose-lg text-gray-600 leading-relaxed">
              <p className="mb-4">
                The <strong>Youth Business Loan Program</strong> operated by the Future Entrepreneurs of America Foundation (FEOAF) is an interest-free, education-based micro-loan initiative designed to support youth ages 8–18 in developing entrepreneurship and financial literacy skills through guided, real-world application.
              </p>
              <p>
                The program provides small, supervised, and age-appropriate loans to youth participants to support approved business or project ideas. Unlike traditional lending, this program is not designed for profit or financial return; rather, it serves as a charitable educational tool that promotes responsibility, planning, and economic understanding among youth.
              </p>
            </div>
          </section>

          

          {/* 2. PROGRAM DESIGN (Grid Cards) */}
          <section>
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              {/* Changed to yellow */}
              <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
              Structure & Design
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Card 1 */}
                <div className="p-6 rounded-3xl border border-gray-200 hover:border-yellow-400 transition-colors duration-300">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Loan Type</h3>
                    <p className="text-lg font-bold">Interest-free micro-loans</p>
                </div>

                {/* Card 2 */}
                <div className="p-6 rounded-3xl border border-gray-200 hover:border-yellow-400 transition-colors duration-300">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Interest & Fees</h3>
                    <p className="text-lg font-bold">None (0% interest, no fees)</p>
                </div>

                {/* Card 3 */}
                <div className="p-6 rounded-3xl border border-gray-200 hover:border-yellow-400 transition-colors duration-300">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Eligibility</h3>
                    <p className="text-lg font-bold">Active FEOAF members (Ages 8-18)</p>
                </div>

                {/* Card 4 */}
                <div className="p-6 rounded-3xl border border-gray-200 hover:border-yellow-400 transition-colors duration-300">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Eligible Uses</h3>
                    <p className="text-lg font-bold">Supplies, materials, equipment</p>
                </div>
            </div>
            <p className="mt-4 text-sm text-gray-400 italic">
              *All loans are issued as part of a structured learning process, not as consumer or commercial credit.
            </p>
          </section>

          {/* 3. OVERSIGHT & SAFEGUARDS */}
          <section>
             <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
              Oversight & Safeguards
            </h2>
            <div className="bg-gray-50 rounded-[2.5rem] p-8 md:p-10">
                <p className="mb-6 text-gray-600">
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
                        <li key={i} className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-white">
                                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <span className="font-medium text-gray-800">{item}</span>
                        </li>
                    ))}
                </ul>
                <div className="mt-8 pt-8 border-t border-gray-200">
                      <p className="text-sm font-medium text-gray-500">
                        FEOAF does not report to credit bureaus, does not charge interest, and does not pursue collections. The program emphasizes learning outcomes over financial performance.
                      </p>
                </div>
            </div>
          </section>

          {/* 4. OUTCOMES & IMPACT */}
          <section>
             <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              {/* Changed to yellow */}
              <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
              Outcomes & Alignment
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                    Through participation in the Youth Business Loan Program, youth will gain foundational financial literacy, learn responsible money management, and experience real-world entrepreneurship in a safe environment.
                </p>
                <div>
                    <h3 className="font-bold text-black mb-3">Community Need & Rationale</h3>
                    <p>
                        Many young people lack early exposure to financial literacy and safe access to startup capital. FEOAF addresses this by combining education, mentorship, and supervised capital access.
                    </p>
                </div>
                <div>
                      <h3 className="font-bold text-black mb-3">Use of Grant Funds</h3>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Capitalize the interest-free youth loan pool</li>
                        <li>Support financial education materials and tools</li>
                        <li>Provide program oversight and mentoring</li>
                        <li>Sustain a revolving loan model</li>
                      </ul>
                </div>
            </div>
          </section>

        </div>

        <div className="lg:col-span-4 relative">
            <div className="sticky top-24 space-y-6">
                
                <div className="p-8 rounded-[2.5rem] bg-black text-white relative overflow-hidden group">
                    
                    <h3 className="text-2xl font-bold mb-2">Ready to Start?</h3>
                    <p className="text-gray-400 mb-8 text-sm">
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
                    <p className="text-xs text-gray-500 leading-relaxed">
                        The FEOAF Youth Business Loan Program operates as a charitable educational initiative. Funds are monitored, documented, and reinvested to maximize community benefit.
                    </p>
                </div>

            </div>
        </div>

      </div>
    </div>
  );
}