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
  const [targetPath, setTargetPath] = useState<string | null>(null);

  useEffect(() => {
    try {
      const prevPath = sessionStorage.getItem("prevPath");
      if (prevPath) {
        setTargetPath(prevPath);
      } else if (href) {
        setTargetPath(href);
      }
    } catch (e) {
      console.warn("sessionStorage is not available", e);
      if (href) {
        setTargetPath(href);
      }
    }
  }, [href]);

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

  if (targetPath) {
    return (
      <Link href={targetPath} className={combinedClassName}>
        {content}
      </Link>
    );
  }

  return (
    <button className={combinedClassName} onClick={() => router.back()}>
      {content}
    </button>
  );
}
