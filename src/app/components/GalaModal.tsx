"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface GalaModalProps {
  onClose: () => void;
}

export default function GalaModal({ onClose }: GalaModalProps) {

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <>
      <style>{`
        @keyframes modal-pop { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }
        .animate-modal { animation: modal-pop 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards; }
      `}</style>

      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto"
        onClick={onClose}
      >
        {/* Card */}
        <div
          className="relative w-full max-w-6xl bg-base-100 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row my-auto animate-modal items-stretch"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            className="btn btn-circle btn-sm absolute top-4 right-4 z-50 border-none bg-black/50 hover:bg-black/80 text-white"
            onClick={onClose}
          >
            ✕
          </button>

          {/* Flyer — left panel */}
          <div className="w-full md:w-auto md:max-w-[45%] shrink-0 border-b md:border-b-0 md:border-r border-base-200 bg-base-100 flex">
            <Image
              src="/events/gala-to-remember.png"
              alt="A Gala to Remember flyer"
              width={600}
              height={850}
              className="w-full md:w-auto h-auto block max-h-[60vh] md:max-h-[90vh] object-contain object-left"
              priority
            />
          </div>

          {/* Story — right panel */}
          <div className="w-full flex-1 relative bg-base-100">
            <div className="md:absolute md:inset-0 p-8 md:p-12 flex flex-col overflow-y-auto">

              <div>
                <div className="badge badge-accent badge-lg font-bold uppercase tracking-wider mb-4 border-none text-white shadow-md">
                  October 17, 2026 &nbsp;·&nbsp; Black-Tie Gala
                </div>

                <h3 className="text-3xl sm:text-4xl font-extrabold text-base-content leading-tight mb-2">
                  One Opportunity Can Change a Life
                </h3>
                <div className="h-1 w-16 bg-accent rounded-full mb-6" />
              </div>

              <div className="text-base text-base-content/80 leading-relaxed flex flex-col gap-3 mb-8">
                <p>
                  A few years ago, a young student attended one of our entrepreneurship&apos;s
                  programs feeling unsure of their future. Like many young people, they had dreams
                  but didn&apos;t know where to start. They had never learned about business,
                  leadership, money management, or how to turn an idea into reality.
                </p>
                <p>
                  Through mentorship, hands-on activities, and encouragement, that student
                  discovered something powerful:{" "}
                  <strong className="text-accent uppercase tracking-wide">Confidence</strong>
                </p>
                <p>
                  They learned that their ideas mattered. They learned how entrepreneurs solve
                  problems, create opportunities, and make a difference in their communities.
                </p>
                <p>Today, hundreds of young people are waiting for the same opportunity.</p>
                <p>
                  Some come from families that can easily afford enrichment programs. Others
                  cannot. Yet, every child deserves the chance to discover their potential, build
                  confidence, and learn skills that schools do not teach.
                </p>
                <p className="font-bold text-base-content">
                  That is why the Future Entrepreneurs of America Foundation exists.
                </p>
                <p>
                  The Black-Tie Gala Event is more than a gala. It is an investment in the next
                  generation of leaders, innovators and entrepreneurs.
                </p>
                <p>
                  When you attend, sponsor, or donate, you help provide scholarships,
                  entrepreneurship, education, mentorship, and life-changing experiences for youth
                  who are eager to learn and grow.
                </p>

                <div className="flex flex-col gap-0.5 border-l-4 border-accent pl-4 font-bold text-base-content">
                  <span>One seat at a gala.</span>
                  <span>One sponsorship.</span>
                  <span>One donation.</span>
                </div>

                <p className="font-bold text-base-content">
                  Can create one opportunity that changes a young person&apos;s life forever.
                </p>
                <p>
                  Join us at the{" "}
                  <strong>Black-Tie Gala Event: Celebrating Tomorrow&apos;s Leaders</strong>{" "}
                  and help us empower the next generation of entrepreneurs and leaders. Together
                  we can turn dreams into opportunities, and opportunities into success!!!
                </p>
              </div>

              {/* CTAs */}
              <div className="mt-auto pt-6 border-t border-base-200 flex flex-wrap gap-3">
                <Link
                  href="https://givebutter.com/c/X0GXZ6?source=qr&version=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="gala-modal-tickets-btn"
                  className="btn btn-accent flex-1 py-4 h-auto rounded-2xl text-lg font-bold text-white shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                  onClick={onClose}
                >
                  Get Tickets
                </Link>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
