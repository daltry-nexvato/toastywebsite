"use client";

import { useState, useEffect } from "react";

const STORAGE_KEY = "toasty_announcement_dismissed";

export default function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (sessionStorage.getItem(STORAGE_KEY) === "true") {
      setDismissed(true);
      document.documentElement.style.setProperty("--announcement-height", "0px");
    }
  }, []);

  function handleDismiss() {
    setDismissed(true);
    sessionStorage.setItem(STORAGE_KEY, "true");
    document.documentElement.style.setProperty("--announcement-height", "0px");
  }

  if (dismissed) return null;

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center bg-orange text-white"
      style={{ height: "var(--announcement-height, 40px)" }}
    >
      <p className="text-sm text-center">
        Free delivery on orders over $75! Use code{" "}
        <span className="font-bold">TOASTY75</span>
      </p>
      <button
        onClick={handleDismiss}
        aria-label="Dismiss announcement"
        className={`absolute right-4 flex items-center justify-center w-6 h-6 text-white/80 hover:text-white transition-colors ${
          !mounted ? "opacity-0" : "opacity-100"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
    </div>
  );
}
