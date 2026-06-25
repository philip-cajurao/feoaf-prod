"use client";

import { useState } from "react";
import { newsletters, Newsletter } from "@/data/newsletters";

// ─── Individual Newsletter Modal ──────────────────────────────────────────────
function NewsletterModal({
  item,
  onClose,
}: {
  item: Newsletter;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)" }}
      onClick={onClose}
    >
      <div
        className="bg-base-100 rounded-xl shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal header */}
        <div className="sticky top-0 bg-base-100 border-b border-base-300 px-8 py-5 flex items-start justify-between gap-4">
          <div>
            <span className="text-xs font-semibold text-accent uppercase tracking-widest">
              {item.month}
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-base-content mt-1">
              {item.title}
            </h2>
            {item.tags && item.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="badge badge-accent badge-sm font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
          <button
            onClick={onClose}
            className="btn btn-ghost btn-sm btn-circle mt-1 shrink-0"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {/* Modal body */}
        <div className="px-8 py-6 space-y-4 text-base-content leading-relaxed">
          {item.body.length > 0 ? (
            item.body.map((paragraph, i) => (
              <p key={i} className="text-sm sm:text-base">
                {paragraph}
              </p>
            ))
          ) : (
            <p className="italic text-base-content/50">
              Full edition coming soon — check back later!
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Newsletter Card ──────────────────────────────────────────────────────────
function NewsletterCard({
  item,
  onClick,
}: {
  item: Newsletter;
  onClick: () => void;
}) {
  return (
    <div
      className="group relative bg-base-100 border border-base-300 rounded-xl overflow-hidden
                 hover:border-accent hover:shadow-xl hover:-translate-y-1
                 transition-all duration-300 cursor-pointer flex flex-col"
      onClick={onClick}
    >
      {/* Top accent bar */}
      <div className="h-1 w-full bg-base-300 group-hover:bg-accent transition-colors duration-300" />

      <div className="p-6 flex flex-col flex-1">
        {/* Month label + Latest badge */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-bold text-accent uppercase tracking-widest">
            {item.month}
          </span>
          {item.isLatest && (
            <span className="badge badge-accent badge-sm font-bold">Latest</span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-base sm:text-lg font-black text-base-content leading-snug mb-2">
          {item.title}
        </h3>

        {/* Excerpt */}
        <p className="text-xs sm:text-sm text-base-content/70 leading-relaxed flex-1">
          {item.excerpt}
        </p>

        {/* Tags */}
        {item.tags && item.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-4">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="badge badge-outline badge-sm text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Read CTA */}
        <div className="mt-5 flex items-center gap-2 text-accent text-xs font-bold uppercase tracking-wider group-hover:gap-3 transition-all duration-300">
          Read Edition
          <svg
            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────
export default function NewsletterSection() {
  const [activeNewsletter, setActiveNewsletter] = useState<Newsletter | null>(
    null
  );

  return (
    <>
      {/* Modal */}
      {activeNewsletter && (
        <NewsletterModal
          item={activeNewsletter}
          onClose={() => setActiveNewsletter(null)}
        />
      )}

      <section className="py-24 border-t border-base-300">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section heading */}
          <div className="text-center mb-14">
            <span className="text-xs font-bold text-accent uppercase tracking-widest mb-3 block">
              Monthly Updates
            </span>
            <div className="relative inline-block">
              <h2 className="font-black text-3xl sm:text-5xl tracking-tight text-base-content">
                Our <span className="text-accent">Newsletter</span>
              </h2>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-accent rounded-full" />
            </div>
            <p className="text-sm sm:text-base text-base-content/60 max-w-xl mx-auto mt-7">
              Stay in the loop with monthly updates on programs, events,
              scholarships, and community stories from FEOAF.
            </p>
          </div>

          {/* Cards grid — or empty state */}
          {newsletters.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center gap-4">
              <svg
                className="w-14 h-14 text-base-content/20"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 20H5a2 2 0 01-2-2V7a2 2 0 012-2h4l2-2h4l2 2h2a2 2 0 012 2v11a2 2 0 01-2 2z"
                />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 11v4M12 17h.01" />
              </svg>
              <p className="text-lg font-bold text-base-content/40">
                No editions yet
              </p>
              <p className="text-sm text-base-content/30 max-w-xs">
                Our first newsletter is on its way — check back soon!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {newsletters.map((item) => (
                <NewsletterCard
                  key={item.id}
                  item={item}
                  onClick={() => setActiveNewsletter(item)}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
