"use client"

import { useEffect } from "react";

export default function NavigationTracker() {
  useEffect(() => {
    // Clean up stale sessionStorage keys from the old BackButton implementation.
    // These are no longer read anywhere, but old clients may still have them cached.
    try {
      sessionStorage.removeItem("prevPath");
      sessionStorage.removeItem("currentPath");
    } catch (e) {
      console.warn("sessionStorage is not available", e);
    }
  }, []); // run once on first mount

  return null;
}
