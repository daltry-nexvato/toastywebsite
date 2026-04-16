"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { NAV_ITEMS, SITE } from "@/lib/constants";
import MobileNav from "./MobileNav";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 10);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky z-40 w-full bg-white transition-shadow duration-300 ${
          scrolled ? "shadow-md" : "shadow-none"
        }`}
        style={{ top: "var(--announcement-height, 0px)", height: "100px" }}
      >
        <div className="container flex items-center justify-between h-full">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <img
              src="/images/logo/toasty-logo.webp"
              alt={`${SITE.name} logo`}
              className="w-16 h-16 md:w-24 md:h-24"
            />
          </Link>

          {/* Desktop nav */}
          <nav
            className="hidden lg:flex items-center gap-10"
            aria-label="Main navigation"
          >
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="nav-link relative text-base font-bold uppercase tracking-wide text-black hover:text-orange transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-4">
            {/* Search icon */}
            <Link
              href="/products"
              aria-label="Search products"
              className="hidden md:flex items-center justify-center w-10 h-10 text-black hover:text-orange transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </Link>

            {/* User icon */}
            <a
              href={SITE.shopUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="My account"
              className="hidden md:flex items-center justify-center w-10 h-10 text-black hover:text-orange transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </a>

            {/* Shop Now CTA */}
            <a
              href={SITE.shopUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center bg-orange text-white text-base font-bold rounded-full hover:bg-orange-dark transition-colors"
              style={{ padding: "14px 36px" }}
            >
              Shop Now
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className="lg:hidden flex flex-col items-center justify-center gap-1.5 w-10 h-10"
            >
              <span className="block w-6 h-0.5 bg-black transition-transform" />
              <span className="block w-6 h-0.5 bg-black transition-opacity" />
              <span className="block w-6 h-0.5 bg-black transition-transform" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay nav */}
      <MobileNav isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
