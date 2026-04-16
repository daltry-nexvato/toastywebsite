"use client";

import { useEffect } from "react";
import Link from "next/link";
import { NAV_ITEMS, SITE } from "@/lib/constants";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <nav
        className={`fixed inset-0 z-50 flex flex-col bg-white transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Mobile navigation"
        role="dialog"
        aria-modal="true"
      >
        {/* Top bar with close button */}
        <div className="flex items-center justify-end h-[100px] px-6">
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="relative flex items-center justify-center w-10 h-10"
          >
            <span className="block w-6 h-0.5 bg-black rotate-45 absolute" />
            <span className="block w-6 h-0.5 bg-black -rotate-45 absolute" />
          </button>
        </div>

        {/* Links */}
        <div className="flex flex-col items-center gap-2 flex-1 pt-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="text-2xl font-heading font-bold uppercase tracking-wide text-black hover:text-orange transition-colors py-3 px-6"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="p-8 pb-12">
          <a
            href={SITE.shopUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="block w-full text-center bg-orange text-white text-lg font-bold py-4 rounded-full hover:bg-orange-dark transition-colors"
          >
            Shop Now
          </a>
        </div>
      </nav>
    </>
  );
}
