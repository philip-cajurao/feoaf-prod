import React from "react";
import Link from "next/link";
import { Sparkles, Users, TrendingUp, ArrowRight, Ticket } from "lucide-react";

interface GalaVideoTeaserDesign2Props {
  id?: string;
  theme?: "dark" | "light";
  showTicketCta?: boolean;
  detailsLinkHref?: string;
  detailsLinkLabel?: string;
}

export default function GalaVideoTeaserDesign2({
  id = "gala-video-promo",
  theme = "dark",
  showTicketCta = true,
  detailsLinkHref = "#sponsorship-packages",
  detailsLinkLabel = "View Sponsorship Packages",
}: GalaVideoTeaserDesign2Props) {
  const isDark = theme === "dark";

  return (
    <section
      id={id}
      className={`w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 transition-colors ${
        isDark
          ? "bg-neutral text-neutral-content border-t border-b border-white/10"
          : "bg-base-100 text-base-content border-t border-b border-base-200"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* ── Left Column: Compelling Story & Key Highlights (5 cols) ── */}
          <div className="lg:col-span-5 flex flex-col text-left space-y-6">
            
            {/* Elegant Badge */}
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/20 border border-accent/40 text-accent font-black uppercase tracking-[0.2em] text-[11px] shadow-sm">
                <Sparkles className="w-3.5 h-3.5" />
                Official Gala Preview
              </span>
            </div>

            {/* Main Headline */}
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight leading-[1.1] text-white">
                An Evening of <span className="text-accent">Elegance &amp; Purpose</span>
              </h2>
              <p className="text-white/80 text-sm sm:text-base mt-3 leading-relaxed font-medium">
                Step inside the Black-Tie Gala. Watch the teaser to see how our community gathers to celebrate, mentor, and support the next generation of youth leaders.
              </p>
            </div>

            {/* Feature Highlights Grid / List (Generalized & Evergreen) */}
            <div className="space-y-3.5 pt-2">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-accent/40 transition-colors">
                <div className="p-2 rounded-lg bg-accent/20 text-accent shrink-0 mt-0.5">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white leading-tight">Empowering Young Entrepreneurs</h4>
                  <p className="text-xs text-white/70 mt-0.5 leading-snug">
                    Nurturing the mindset, skills, and confidence for youth to succeed in business and life.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-accent/40 transition-colors">
                <div className="p-2 rounded-lg bg-accent/20 text-accent shrink-0 mt-0.5">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white leading-tight">Community &amp; Mentorship</h4>
                  <p className="text-xs text-white/70 mt-0.5 leading-snug">
                    Uniting families, leaders, and mentors dedicated to supporting the next generation.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-accent/40 transition-colors">
                <div className="p-2 rounded-lg bg-accent/20 text-accent shrink-0 mt-0.5">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white leading-tight">Building Lasting Impact</h4>
                  <p className="text-xs text-white/70 mt-0.5 leading-snug">
                    Creating meaningful opportunities and resources for aspiring young leaders.
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {showTicketCta && (
                <Link
                  href="https://givebutter.com/c/X0GXZ6?source=qr&version=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-accent btn-md px-6 font-bold shadow-lg hover:scale-105 transition-transform text-neutral flex items-center gap-2"
                >
                  <Ticket className="w-4 h-4" />
                  Get Tickets
                </Link>
              )}
              {detailsLinkHref.startsWith("#") ? (
                <a
                  href={detailsLinkHref}
                  className="btn btn-outline btn-accent btn-md px-6 font-bold text-white hover:text-white shadow-md flex items-center gap-2 group"
                >
                  <span>{detailsLinkLabel}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              ) : (
                <Link
                  href={detailsLinkHref}
                  className="btn btn-outline btn-accent btn-md px-6 font-bold text-white hover:text-white shadow-md flex items-center gap-2 group"
                >
                  <span>{detailsLinkLabel}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              )}
            </div>

          </div>

          {/* ── Right Column: Video Container with Ambient Glow (7 cols) ── */}
          <div className="lg:col-span-7 relative">
            
            {/* Ambient Background Glow Effect */}
            <div className="absolute -inset-2 bg-gradient-to-r from-accent/30 via-amber-500/20 to-accent/10 rounded-3xl blur-2xl opacity-70 -z-10" />

            {/* Video Player Card */}
            <div className="relative w-full rounded-2xl overflow-hidden bg-black border-2 border-accent/40 shadow-2xl">
              
              {/* Top Bar Decoration */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-neutral-900/90 border-b border-white/10 text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 animate-pulse" />
                  <span className="font-bold text-white/90 uppercase tracking-wider text-[10px]">
                    FEOAF Black-Tie Gala 2026
                  </span>
                </div>
                <span className="text-[10px] text-accent font-semibold tracking-wider uppercase">
                  October 17 • Gainesville, VA
                </span>
              </div>

              {/* 16:9 Video Embed */}
              <div className="w-full aspect-video bg-black">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/4tPXa0VMqN4?autoplay=1&playsinline=1&rel=0&si=D9vfo9SZz_IKi_LS"
                  title="A Glimpse Into the Black-Tie Gala Experience"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>

              {/* Bottom Caption Strip */}
              <div className="p-3 bg-neutral-900/90 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-white/70">
                <p className="font-medium truncate">
                  ★ Heritage Hunt Golf &amp; Country Club • 6:30 PM – 11:00 PM
                </p>
                <span className="text-accent font-bold shrink-0">
                  100% of proceeds empower youth
                </span>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
