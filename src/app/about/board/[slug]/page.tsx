import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, User, Sparkles } from "lucide-react";

// You can move this data to a separate database or config file later!
const boardBios: Record<string, any> = {
  "mary-rose-lam": {
    name: "Mary Rose Lam",
    role: "Founder, President",
    image: "/board/mary-rose.jpeg",
    content: (
      <>
        <p className="mb-5">
          Mary Rose is the visionary founder of Future Entrepreneurs of America
          Foundation. She is married and originally from the Philippines, and a
          mother of five, she brings a strong heart for service and a deep
          passion for helping young people succeed.
        </p>
        <p className="mb-5">
          She is passionate about helping young people discover their potential
          beyond traditional academics—especially those who thrive through
          creativity, innovation, and hands-on learning. With a heart for
          community impact, Mary Rose has led initiatives such as youth
          entrepreneurship bootcamps.
        </p>
        <p>
          Her mission is to inspire the next generation to dream big, take
          initiative, and become confident leaders who can shape the future.
        </p>
      </>
    ),
  },
  "jenny-he": {
    name: "Jian (Jenny) He",
    role: "Member / Secretary",
    image: "/board/jenny.png",
    content: (
      <>
        <p className="mb-5">
          Jenny He is a passionate advocate for youth development and
          entrepreneurship. Through Future Entrepreneurs of America Foundation
          (FEOAF), Jenny is dedicated to helping develop, guide, and mentor
          aspiring entrepreneurs, empowering young people with the confidence,
          creativity, and business mindset needed to pursue their ideas and
          build their futures.
        </p>
        <p className="mb-5">
          As a mother of three, Jenny understands firsthand the importance of
          nurturing curiosity, resilience, and leadership in the next
          generation. Her commitment to Future Entrepreneurs of America
          Foundation is deeply rooted in her belief that entrepreneurship
          teaches young people valuable life skills—problem solving,
          accountability, teamwork, and perseverance—that extend far beyond
          business.
        </p>
        <p>
          She is delighted to be a part of the Future Entrepreneurs of America
          team where she can channel her professional discipline and personal
          passion into creating opportunities for young people to discover their
          potential. She believes that by equipping youth with entrepreneurial
          skills early in life, they can become confident leaders, innovators,
          and positive contributors to their communities.
        </p>
      </>
    ),
  },
  "airi-ordinario": {
    name: "Airi Ordinario",
    role: "Treasurer",
    image: "/board/airi-ordinario.jpg",
    content: (
      <p className="mb-5">
        Dedicated community supporter and advocate for youth development. As a
        board member of the Future Entrepreneurs of America Foundation (FEOAF),
        Airi brings valuable insight, leadership, and a passion for helping
        young people build confidence and entrepreneurial skills.
      </p>
    ),
  },
  "sylvia-steverson": {
    name: "Sylvia Steverson",
    role: "Member",
    image: "/board/sylvia-steverson.jpeg",
    content: (
      <p className="mb-5">
        Sylvia is a licensed attorney born in Hungary who is deeply committed to
        education, lifelong learning, and career development. Through her legal
        background and passion for helping others grow professionally, she
        brings thoughtful insight and perspective to her role as a board member.
        Sylvia is particularly interested in initiatives that expand educational
        opportunities and support individuals in planning meaningful careers.
        She is married and the proud mother of four children, and values the
        role of family, education, and service in strengthening communities.
      </p>
    ),
  },
  "oanh-nguyen": {
    name: "Oanh Nguyen",
    role: "Member",
    image: "/board/oanh-nguyen.png",
    content: (
      <>
        <p className="mb-5">
          Oanh is a dedicated business professional, real estate investor, and
          community advocate with a strong passion for empowering the next
          generation. She holds a Bachelor of Science degree in Computer
          Science, which provided her with a solid analytical and
          problem-solving foundation that has guided her diverse career.
        </p>
        <p className="mb-5">
          Over the course of more than 20 years, Oanh successfully owned and
          managed multiple retail businesses, gaining extensive experience in
          operations, financial management, and customer engagement. Her
          entrepreneurial journey has equipped her with practical insights into
          building and sustaining successful ventures across changing market
          conditions.
        </p>
        <p className="mb-5">
          Currently, Oanh focuses on real estate investment, where she continues
          to apply her business acumen and long-term strategic thinking. Her
          work in this field reflects her commitment to financial stewardship
          and sustainable growth.
        </p>
        <p>
          Beyond her professional achievements, Oanh is deeply committed to
          community service. She is especially passionate about supporting
          children and young people in developing entrepreneurial mindsets and
          practical skill sets. Through her role as a board director, she seeks
          to foster programs that inspire creativity, resilience, and
          independence in future generations.
        </p>
      </>
    ),
  },
  "lydia-lui": {
    name: "Lydia Lui",
    role: "Member",
    image: "/board/lydia-lui.jpeg",
    content: (
      <p>
        Lydia is from the Philippines and serves as a member in the US National
        Defense Corps and she is actively helping many organizations in the DMV
        area. She also has jewelry business and is a part of Atomy (beauty
        products in the networking industry). She loves to have fun while
        helping the community.
      </p>
    ),
  },
};

export default async function BoardMemberPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const member = boardBios[resolvedParams.slug];

  if (!member) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      {/* Decorative Hero Banner - Black with Uniform, Spaced Pattern */}
      <div className="w-full h-[350px] bg-black relative overflow-hidden">
        {/* Uniform Grid Pattern Layer */}
        <div className="absolute inset-0 opacity-10 flex flex-wrap justify-center content-start gap-16 p-8 pointer-events-none">
          {/* We create 50 invisible slots to fill the banner with logos */}
          {Array.from({ length: 50 }).map((_, i) => (
            <img
              key={i}
              src="/logo.png"
              alt=""
              /* Change w-20 h-20 to make the logo larger or smaller */
              className="w-20 h-20 object-contain select-none"
            />
          ))}
        </div>

        {/* Subtle gradient overlay to fade the pattern slightly towards the bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 pointer-events-none"></div>

        {/* Navigation Wrapper inside Banner */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 relative z-10">
          <Link
            href="/about"
            className="inline-flex items-center text-white/80 hover:text-white mb-8 font-medium transition-all duration-200 group bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10"
          >
            <ArrowLeft
              size={18}
              className="mr-2 group-hover:-translate-x-1 transition-transform"
            />
            Back to Leadership
          </Link>
        </div>
      </div>

      {/* Main Content Area (Overlapping the banner) */}
      <div className="flex-grow max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 -mt-40 relative z-20 pb-24">
        {/* Profile Card */}
        <div className="bg-white rounded-3xl shadow-2xl shadow-slate-900/10 overflow-hidden border border-gray-100 flex flex-col md:flex-row">
          {/* Left Column: Photo & Quick Info */}
          <div className="md:w-2/5 bg-gray-50/50 p-8 md:p-12 flex flex-col items-center border-r border-gray-100 relative">
            <div className="w-56 h-56 rounded-full overflow-hidden border-8 border-white shadow-xl mb-8 bg-gray-200 flex-shrink-0 relative group">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-2 tracking-tight">
              {member.name}
            </h1>

            {/* Accent colored badge */}
            <div className="inline-flex items-center justify-center px-4 py-1.5 bg-accent/10 text-accent rounded-full font-bold text-sm tracking-wide mt-2">
              <Sparkles size={16} className="mr-2" />
              {member.role}
            </div>

            {/* Accent colored divider line */}
            <div className="w-12 h-1 bg-accent rounded-full mt-8 mb-6"></div>

            <p className="text-gray-500 text-sm text-center font-medium">
              Future Entrepreneurs of America Foundation
            </p>
          </div>

          {/* Right Column: Full Biography */}
          <div className="md:w-3/5 p-8 md:p-12 lg:p-14 bg-white">
            <div className="flex items-center mb-8 pb-4 border-b border-gray-100">
              {/* Accent colored icon background */}
              <div className="bg-accent/10 p-3 rounded-xl mr-4">
                <User size={24} className="text-accent" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">
                About {member.name.split(" ")[0]}
              </h2>
            </div>

            {/* Biography Text */}
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed font-normal">
              {member.content}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
