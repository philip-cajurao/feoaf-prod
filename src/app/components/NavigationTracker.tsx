"use client"

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function NavigationTracker() {
  const pathname = usePathname();

  useEffect(() => {
    // Save previous path when pathname changes
    try {
      const currentStored = sessionStorage.getItem("currentPath");
      if (currentStored && currentStored !== pathname) {
        sessionStorage.setItem("prevPath", currentStored);
      }
      sessionStorage.setItem("currentPath", pathname);
    } catch (e) {
      console.warn("sessionStorage is not available", e);
    }
  }, [pathname]);

  return null;
}
