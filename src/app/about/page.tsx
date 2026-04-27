import { Metadata } from "next";
import React from "react";
import Link from "next/link";
import CompanyStory from "../components/CompanyStory";
import MissionVision from "../components/MissionVision";
import StoryBanner from "../components/banners/StoryBanner";
import { Lightbulb, Rocket, Target, TrendingUp, Users, Briefcase } from "lucide-react";

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
    color: "text-blue-600",
    description: "Visionary leader and founder of FEOAF, dedicated to empowering youth through entrepreneurship education, leadership development, and real-world business experiences."
  },
  {
    name: "Jenny He",
    slug: "jenny-he",
    role: "Secretary",
    image: "/board/jenny.png",
    color: "text-green-600",
    description: "Passionate advocate for youth development and entrepreneurship. Through Future Entrepreneurs of America Foundation (FEOAF), Jenny is dedicated to helping develop, guide, and mentor aspiring entrepreneurs, empowering young people with the confidence, creativity, and business mindset needed to pursue their ideas and build their futures."
  },
  {
    name: "Airi Ordinario",
    slug: "airi-ordinario",
    role: "Treasurer",
    image: "/board/airi-ordinario.jpg",
    color: "text-yellow-600",
    description: "Dedicated community supporter and advocate for youth development. As a board member of the Future Entrepreneurs of America Foundation (FEOAF), Airi brings valuable insight, leadership, and a passion for helping young people build confidence and entrepreneurial skills."
  }
];

const boardMembers = [
  {
    name: "Sylvia Steverson",
    slug: "sylvia-steverson",
    role: "Board Member",
    image: "/board/sylvia-steverson.jpeg",
    color: "text-red-500",
    description: "Supports organizational initiatives, fundraising efforts, and youth development programs. Contributes professional expertise and supports mission-driven initiatives for youth entrepreneurship."
  },
  {
    name: "Oanh Nguyen",
    slug: "oanh-nguyen",
    role: "Board Member",
    image: "/board/oanh-nguyen.png",
    color: "text-blue-500",
    description: "Provides strategic advice and community connections to help expand the impact of FEOAF. Contributes professional expertise and supports mission-driven initiatives for youth entrepreneurship."
  },
  {
    name: "Lydia Lui",
    slug: "lydia-lui",
    role: "Board Member",
    image: "/board/lydia-lui.jpeg",
    color: "text-purple-600",
    description: "A member of the US National Defense Corps and active community leader in the DMV area. Lydia balances her passion for community service with her entrepreneurship in the jewelry and beauty industries through Atomy."
  }
];

const BackgroundIcons = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none -z-40 opacity-20">
    <Rocket size={120} className="absolute top-40 left-10 text-blue-400 rotate-12" />
    <Lightbulb size={150} className="absolute top-96 right-20 text-yellow-400 -rotate-12" />
    <TrendingUp size={180} className="absolute top-[800px] left-32 text-green-400" />
    <Target size={140} className="absolute top-[1200px] right-32 text-red-400" />
    <Users size={160} className="absolute bottom-96 left-20 text-blue-300" />
    <Briefcase size={130} className="absolute bottom-40 right-10 text-green-500 rotate-6" />
  </div>
);

export default function About() {
  return (
    <div className="flex flex-col relative overflow-x-hidden">
      <StoryBanner />

      <div className="relative overflow-hidden pt-8 pb-16">
        <BackgroundIcons />
        <CompanyStory />
        <MissionVision />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">Board of Directors</h2>
            <h3 className="text-xl text-gray-600 font-medium">Future Entrepreneurs of America Foundation</h3>
          </div>

          {/* Executive Board */}
          <div className="mb-24">
            <h4 className="text-2xl font-bold text-center text-gray-800 mb-12 border-b pb-4 max-w-2xl mx-auto">Executive Board</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {executiveBoard.map((member, index) => (
                <Link 
                  href={`/about/board/${member.slug}`}
                  key={index} 
                  className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                >
                  <div className="w-40 h-40 rounded-full overflow-hidden mb-6 border-4 border-white shadow-md bg-gray-100">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-300 group-hover:scale-105"
                    />
                  </div>
                  <h5 className="text-xl font-bold text-gray-900 transition-colors">{member.name}</h5>
                  <span className={`${member.color} font-bold mb-4`}>{member.role}</span>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* Board Members */}
          <div className="mb-24">
            <h4 className="text-2xl font-bold text-center text-gray-800 mb-12 border-b pb-4 max-w-2xl mx-auto">Board Members</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {boardMembers.map((member, index) => (
                <Link 
                  href={`/about/board/${member.slug}`}
                  key={index} 
                  className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                >
                  <div className="w-36 h-36 rounded-full overflow-hidden mb-6 border-4 border-white shadow-md bg-gray-100">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-300 group-hover:scale-105"
                    />
                  </div>
                  <h5 className="text-xl font-bold text-gray-900 transition-colors">{member.name}</h5>
                  <span className={`${member.color} font-bold mt-1`}>{member.role}</span>
                  <p className="text-gray-600 text-sm leading-relaxed mt-4">{member.description}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* Youth Advisory Board */}
          <div className="mb-16 bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-100">
            <h4 className="text-2xl font-bold text-center text-gray-800 mb-4">Youth Advisory Board</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <h6 className="font-bold text-blue-600 mb-2 text-lg">Editor-in-Chief</h6>
                <ul className="text-gray-700 font-medium space-y-1">
                  <li>Aaron To</li>
                  <li>Trevyn Summey</li>
                </ul>
              </div>
              <div>
                <h6 className="font-bold text-green-600 mb-2 text-lg">Content Creators</h6>
                <ul className="text-gray-700 font-medium space-y-1">
                  <li>Alyana Lam</li>
                  <li>Sophie Severson</li>
                  <li>Marko Lam</li>
                  <li>Aiden To</li>
                </ul>
              </div>
              <div>
                <h6 className="font-bold text-yellow-600 mb-2 text-lg">Youth Program Leader</h6>
                <ul className="text-gray-700 font-medium space-y-1">
                  <li>Sol Sanchez</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}