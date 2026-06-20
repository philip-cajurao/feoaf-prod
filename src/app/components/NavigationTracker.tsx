"use client"

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function NavigationTracker() {
  const pathname = usePathname();

  useEffect(() => {
    // Clean up stale sessionStorage keys from the old BackButton implementation.
    // These are no longer read anywhere, but old clients may still have them cached.
    try {
      sessionStorage.removeItem("prevPath");
      sessionStorage.removeItem("currentPath");
    } catch (e) {
      console.warn("sessionStorage is not available", e);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // run once on first mount

  // Suppress unused-variable warning — pathname kept for potential future use
  void pathname;

  return null;
}
