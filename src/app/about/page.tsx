import { Metadata } from "next";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import CompanyStory from "../components/CompanyStory";
import MissionVision from "../components/MissionVision";
import StoryBanner from "../components/banners/StoryBanner";
import { Lightbulb, Rocket, Target, TrendingUp, Users, Briefcase, User } from "lucide-react";

export const metadata: Metadata = {
  title: "About | Future Entrepreneurs Of America Foundation",
  description:
    "Empowering youth ages 9–17 with real-world business training, the Future Entrepreneurs of America Foundation is a nonprofit dedicated to developing the next generation of entrepreneurs through age-appropriate guidance, funding, and hands-on experiences beyond the classroom.",
  icons: {
    icon: ["/logo.png", "/favicon.ico"],
  },
  facebook: {
    appId: "61573876332746",
  },
};

const executiveBoard = [
  {
    name: "Mary Rose Lam",
    slug: "mary-rose-lam",
    role: "President / Founder",
    image: "/board/mary-rose.jpeg",
    description: "Visionary leader and founder of FEOAF, dedicated to empowering youth through entrepreneurship education, leadership development, and real-world business experiences."
  },
  {
    name: "Jenny He",
    slug: "jenny-he",
    role: "Secretary",
    image: "/board/jenny.png",
    description: "Passionate advocate for youth development and entrepreneurship. Through Future Entrepreneurs of America Foundation (FEOAF), Jenny is dedicated to helping develop, guide, and mentor aspiring entrepreneurs, empowering young people with the confidence, creativity, and business mindset needed to pursue their ideas and build their futures."
  },
  {
    name: "Airi Ordinario",
    slug: "airi-ordinario",
    role: "Treasurer",
    image: "/board/airi-ordinario.jpg",
    description: "Dedicated community supporter and advocate for youth development. As a board member of the Future Entrepreneurs of America Foundation (FEOAF), Airi brings valuable insight, leadership, and a passion for helping young people build confidence and entrepreneurial skills."
  }
];

const boardMembers = [
  {
    name: "Sylvia Steverson",
    slug: "sylvia-steverson",
    role: "Board Member",
    image: "/board/sylvia-steverson.jpeg",
    description: "Supports organizational initiatives, fundraising efforts, and youth development programs. Contributes professional expertise and supports mission-driven initiatives for youth entrepreneurship."
  },
  {
    name: "Oanh Nguyen",
    slug: "oanh-nguyen",
    role: "Board Member",
    image: "/board/oanh-nguyen.png",
    description: "Provides strategic advice and community connections to help expand the impact of FEOAF. Contributes professional expertise and supports mission-driven initiatives for youth entrepreneurship."
  },
  {
    name: "Lydia Lui",
    slug: "lydia-lui",
    role: "Board Member",
    image: "/board/lydia-lui.jpeg",
    description: "A member of the US National Defense Corps and active community leader in the DMV area. Lydia balances her passion for community service with her entrepreneurship in the jewelry and beauty industries through Atomy."
  }
];

const BackgroundIcons = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-[0.15]">
    <Rocket size={120} className="absolute top-20 left-10 text-blue-500 rotate-12" />
    <Lightbulb size={150} className="absolute top-80 right-20 text-yellow-500 -rotate-12" />
    <TrendingUp size={180} className="absolute top-[800px] left-32 text-emerald-500" />
    <Target size={140} className="absolute top-[1300px] right-32 text-rose-500" />
    <Users size={160} className="absolute bottom-[600px] left-20 text-indigo-500" />
    <Briefcase size={130} className="absolute bottom-40 right-10 text-teal-500 rotate-6" />
  </div>
);

export default function About() {
  return (
    <div className="flex flex-col relative overflow-x-hidden bg-neutral-50 text-neutral-800 min-h-screen">
      
      <BackgroundIcons />
      
      <div className="relative z-10 pb-32">
        <StoryBanner />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          
          <section className="bg-white rounded-[2rem] shadow-sm border border-neutral/50 p-8 md:p-16 mb-24">
            <div className="mb-16">
              <CompanyStory />
            </div>
            
            <div className="flex items-center justify-center my-12">
              <div className="h-px bg-neutral-200 w-full max-w-3xl"></div>
            </div>
            
            <div>
              <MissionVision />
            </div>
          </section>

          <section>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-neutral-900 mb-3 tracking-tight">Board of Directors</h2>
              <h3 className="text-lg text-neutral-500 font-medium">Future Entrepreneurs of America Foundation</h3>
            </div>

            {/* Executive Board */}
            <div className="mb-20">
              <h4 className="text-xl font-bold text-accent uppercase tracking-widest text-center mb-10">Executive Board</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {executiveBoard.map((member, index) => (
                  <Link 
                    href={`/about/board/${member.slug}`}
                    key={index} 
                    className="bg-white p-8 rounded-3xl shadow-sm border-2 border-neutral/50 flex flex-col items-center text-center group hover:border-neutral-300 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="w-36 h-36 rounded-full overflow-hidden mb-6 border-4 border-neutral-50 bg-neutral-100">
                      <Image 
                        src={member.image} 
                        alt={member.name}
                        width={144}
                        height={144}
                        className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                    {/* Position: Larger and Darker */}
                    <span className="text-xl font-bold text-neutral-900 mb-1 tracking-tight">{member.role}</span>
                    {/* Name: Smaller and Grayed out */}
                    <h5 className="text-sm font-medium text-neutral-400 mb-4 uppercase tracking-wider">{member.name}</h5>
                    <p className="text-neutral text-sm leading-relaxed">{member.description}</p>
                  </Link>
                ))}
              </div>
            </div>

            {/* Board Members */}
            <div className="mb-20">
              <h4 className="text-xl font-bold text-accent uppercase tracking-widest text-center mb-10">Board Members</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {boardMembers.map((member, index) => (
                  <Link 
                    href={`/about/board/${member.slug}`}
                    key={index} 
                    className="bg-white p-8 rounded-3xl shadow-sm border-2 border-neutral/50 flex flex-col items-center text-center group hover:border-neutral-300 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-neutral-50 bg-neutral-100">
                      <Image 
                        src={member.image} 
                        alt={member.name}
                        width={128}
                        height={128}
                        className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                    {/* Position: Larger and Darker */}
                    <span className="text-lg font-bold text-neutral-900 mb-1 tracking-tight">{member.role}</span>
                    {/* Name: Smaller and Grayed out */}
                    <h5 className="text-xs font-medium text-neutral-400 mb-3 uppercase tracking-wider">{member.name}</h5>
                    <p className="text-neutral text-sm leading-relaxed">{member.description}</p>
                  </Link>
                ))}
              </div>
            </div>

            {/* Youth Advisory Board */}
            <div className="bg-white rounded-3xl p-10 shadow-sm border-2 border-neutral/50">
              <h4 className="text-2xl font-bold text-center text-neutral-900 mb-10">Youth Advisory Board</h4>
              
              {/* Sol Sanchez - Youth Program Leader Card */}
              <div className="flex flex-col md:flex-row items-center gap-8 bg-neutral-50 p-6 md:p-8 rounded-2xl border border-neutral/50 max-w-3xl mx-auto mb-10">
                <div className="flex flex-col md:flex-row items-center gap-8 w-full">
                  <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white bg-neutral-100 flex-shrink-0 flex items-center justify-center text-neutral-400">
                    <User className="w-12 h-12" />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <span className="text-lg font-bold text-neutral-900 mb-1 block">Youth Program Leader</span>
                    <h5 className="text-xs font-semibold text-neutral-400 mb-3 uppercase tracking-wider">Sol Sanchez</h5>
                    <p className="text-neutral text-sm leading-relaxed">Dedicated to developing future leaders, guiding creative projects, and coordinating youth workshops to help young people discover their potential beyond traditional academics.</p>
                  </div>
                </div>
              </div>

              {/* Newsletter / Content Team */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-neutral-200">
                <div className="pt-4 md:pt-0">
                  <h6 className="font-bold text-neutral-900 uppercase tracking-wider text-sm mb-4">Editor-in-Chief</h6>
                  <ul className="text-neutral-500 text-sm font-medium space-y-2">
                    <li>Aaron To</li>
                    <li>Jayden Flannigan</li>
                  </ul>
                </div>
                <div className="pt-4 md:pt-0 md:pl-8">
                  <h6 className="font-bold text-neutral-900 uppercase tracking-wider text-sm mb-4">Content Creators</h6>
                  <ul className="text-neutral-500 text-sm font-medium space-y-2">
                    <li>Alyana Lam</li>
                    <li>Sophie Severson</li>
                    <li>Marko Lam</li>
                    <li>Aiden To</li>
                    <li>Colin To</li>
                  </ul>
                </div>
              </div>
            </div>

          </section>

        </div>
      </div>
    </div>
  );
}