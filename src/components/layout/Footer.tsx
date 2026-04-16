import Link from "next/link";
import { NAV_ITEMS, SITE, SOCIAL } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--bg-dark)] text-cream">
      {/* Main grid */}
      <div className="container py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Brand + Social */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <img
                src="/images/logo/toasty-logo.webp"
                alt={`${SITE.name} logo`}
                className="w-12 h-12"
              />
            </Link>
            <p className="text-cream/70 text-sm leading-relaxed mb-8 max-w-xs">
              {SITE.description}
            </p>
            <div className="flex items-center gap-4">
              {/* Instagram */}
              <a
                href={SOCIAL.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                className="flex items-center justify-center w-10 h-10 rounded-full border border-cream/20 text-cream/70 hover:bg-orange hover:border-orange hover:text-white transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              {/* Twitter / X */}
              <a
                href={SOCIAL.twitter.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on X"
                className="flex items-center justify-center w-10 h-10 rounded-full border border-cream/20 text-cream/70 hover:bg-orange hover:border-orange hover:text-white transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="font-heading text-lg font-bold text-orange mb-6">
              Useful Links
            </h3>
            <ul className="space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-2 text-sm text-cream/70 hover:text-orange transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="shrink-0 text-orange/60 group-hover:translate-x-1 transition-transform"
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-heading text-lg font-bold text-teal mb-6">
              Stay Toasty
            </h3>
            <p className="text-cream/70 text-sm mb-6">
              Get the latest deals, new drops, and delivery updates straight to
              your inbox.
            </p>
            <form
              action="#"
              className="flex gap-2"
            >
              <input
                type="email"
                placeholder="Your email"
                aria-label="Email address"
                className="flex-1 min-w-0 bg-white/10 border border-cream/20 rounded-full px-5 py-3 text-sm text-cream placeholder:text-cream/40 focus:outline-none focus:border-orange transition-colors"
              />
              <button
                type="submit"
                className="shrink-0 bg-orange text-white text-sm font-bold px-6 py-3 rounded-full hover:bg-orange-dark transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-cream/10">
        <div className="container py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream/50">
          <p>
            &copy; {year} {SITE.name}. All rights reserved.
          </p>
          <p>
            Must be 21+ to purchase. California cannabis delivery only.
          </p>
        </div>
      </div>
    </footer>
  );
}
