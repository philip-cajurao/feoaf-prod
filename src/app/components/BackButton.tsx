"use client"

import { useRouter } from "next/navigation";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface BackButtonProps {
  href?: string;
  className?: string;
  label?: string;
  children?: React.ReactNode;
}

export default function BackButton({ href, className, label = "Back", children }: BackButtonProps) {
  const router = useRouter();
  // null = loading, true = has browser history, false = no history (direct/new tab)
  const [hasBrowserHistory, setHasBrowserHistory] = useState<boolean | null>(null);

  useEffect(() => {
    // window.history.length is 1 when the page is the first (or only) entry —
    // i.e., opened directly, in a new tab, or from an external link.
    // When > 1 the user navigated here from somewhere, so router.back() is safe.
    setHasBrowserHistory(window.history.length > 1);
  }, []);

  const defaultContent = (
    <>
      <svg
        className="w-6 h-6 text-gray-800"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 12h14M5 12l4-4m-4 4 4 4"
        />
      </svg>
      <span>{label}</span>
    </>
  );

  const content = children || defaultContent;
  const combinedClassName = className || "flex items-center gap-x-1 cursor-pointer";

  // While determining history state, render nothing to avoid flicker
  if (hasBrowserHistory === null) {
    return null;
  }

  // Has real browser history → go back (respects the actual page the user came from)
  if (hasBrowserHistory) {
    return (
      <button className={combinedClassName} onClick={() => router.back()}>
        {content}
      </button>
    );
  }

  // No browser history (direct navigation / new tab) → use the fallback href
  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {content}
      </Link>
    );
  }

  // Last resort: try router.back() anyway
  return (
    <button className={combinedClassName} onClick={() => router.back()}>
      {content}
    </button>
  );
}
