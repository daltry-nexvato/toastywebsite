import type { Metadata } from "next";
import { SITE, SOCIAL } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Toasty CA. Questions about delivery, products, or orders? We're here to help.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Banner */}
      <section
        style={{
          background: "#FAF5E4",
          paddingTop: "calc(var(--announcement-height, 0px) + 160px)",
          paddingBottom: 80,
        }}
      >
        <div className="container text-center">
          <SectionHeading
            label="Contact"
            title="Get In Touch"
            subtitle="Have a question, suggestion, or just want to say hi? We'd love to hear from you."
          />
        </div>
      </section>

      {/* Contact Content — 2-Column */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left — Contact Info */}
            <div>
              <h2
                className="font-heading font-bold text-3xl mb-8"
                style={{ color: "#1A1A1A" }}
              >
                Contact Info
              </h2>

              {/* Location */}
              <div className="flex items-start gap-4 mb-8">
                <div
                  className="flex items-center justify-center shrink-0 rounded-full"
                  style={{
                    width: 48,
                    height: 48,
                    background: "#E8953A12",
                    border: "1.5px solid #E8953A",
                    color: "#E8953A",
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-base mb-1" style={{ color: "#1A1A1A" }}>
                    Location
                  </h3>
                  <p className="text-base" style={{ color: "#6B6B6B" }}>
                    {SITE.location}
                  </p>
                  <p className="text-sm mt-1" style={{ color: "#6B6B6B" }}>
                    Delivery only — no physical storefront
                  </p>
                </div>
              </div>

              {/* Delivery Hours */}
              <div className="flex items-start gap-4 mb-8">
                <div
                  className="flex items-center justify-center shrink-0 rounded-full"
                  style={{
                    width: 48,
                    height: 48,
                    background: "#E8953A12",
                    border: "1.5px solid #E8953A",
                    color: "#E8953A",
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-base mb-1" style={{ color: "#1A1A1A" }}>
                    Delivery Hours
                  </h3>
                  <p className="text-base" style={{ color: "#6B6B6B" }}>
                    Monday - Sunday
                  </p>
                  <p className="text-sm mt-1" style={{ color: "#6B6B6B" }}>
                    Check toastyca.com for current hours
                  </p>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-start gap-4 mb-8">
                <div
                  className="flex items-center justify-center shrink-0 rounded-full"
                  style={{
                    width: 48,
                    height: 48,
                    background: "#E8953A12",
                    border: "1.5px solid #E8953A",
                    color: "#E8953A",
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-base mb-2" style={{ color: "#1A1A1A" }}>
                    Social Media
                  </h3>
                  <div className="flex flex-col gap-2">
                    <a
                      href={SOCIAL.instagram.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-base transition-colors duration-200 hover:text-orange"
                      style={{ color: "#6B6B6B" }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                      </svg>
                      Instagram {SOCIAL.instagram.handle}
                    </a>
                    <a
                      href={SOCIAL.twitter.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-base transition-colors duration-200 hover:text-orange"
                      style={{ color: "#6B6B6B" }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                      X/Twitter {SOCIAL.twitter.handle}
                    </a>
                  </div>
                </div>
              </div>

              {/* Shop Link */}
              <div
                className="p-6 rounded-2xl mt-6"
                style={{ background: "#FFF9F0", border: "1px solid #E8E4DD" }}
              >
                <p className="font-heading font-bold text-base mb-2" style={{ color: "#1A1A1A" }}>
                  Ready to Order?
                </p>
                <p className="text-sm mb-4" style={{ color: "#6B6B6B" }}>
                  Skip the contact form and head straight to our shop.
                </p>
                <a
                  href={SITE.shopUrlExpress}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-heading font-bold text-sm uppercase tracking-wider"
                  style={{ color: "#E8953A" }}
                >
                  Shop on Toasty
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7" />
                    <path d="M7 7h10v10" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right — Contact Form */}
            <div>
              <div
                className="p-8 sm:p-10 rounded-3xl"
                style={{ background: "#FFF9F0", border: "1px solid #E8E4DD" }}
              >
                <h2
                  className="font-heading font-bold text-2xl mb-2"
                  style={{ color: "#1A1A1A" }}
                >
                  Send Us a Message
                </h2>
                <p className="text-sm mb-8" style={{ color: "#6B6B6B" }}>
                  Fill out the form and we'll get back to you as soon as we can.
                </p>

                <form className="flex flex-col gap-5">
                  {/* Name */}
                  <div>
                    <label
                      className="block font-heading font-bold text-sm uppercase tracking-wider mb-2"
                      style={{ color: "#1A1A1A" }}
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full px-5 py-4 rounded-2xl text-base outline-none transition-all duration-200 focus:ring-2 focus:ring-orange"
                      style={{
                        background: "white",
                        border: "1px solid #E8E4DD",
                        color: "#1A1A1A",
                      }}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      className="block font-heading font-bold text-sm uppercase tracking-wider mb-2"
                      style={{ color: "#1A1A1A" }}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="w-full px-5 py-4 rounded-2xl text-base outline-none transition-all duration-200 focus:ring-2 focus:ring-orange"
                      style={{
                        background: "white",
                        border: "1px solid #E8E4DD",
                        color: "#1A1A1A",
                      }}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      className="block font-heading font-bold text-sm uppercase tracking-wider mb-2"
                      style={{ color: "#1A1A1A" }}
                    >
                      Message
                    </label>
                    <textarea
                      rows={5}
                      placeholder="How can we help?"
                      className="w-full px-5 py-4 rounded-2xl text-base outline-none transition-all duration-200 resize-none focus:ring-2 focus:ring-orange"
                      style={{
                        background: "white",
                        border: "1px solid #E8E4DD",
                        color: "#1A1A1A",
                      }}
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="button"
                    className="inline-flex items-center justify-center gap-2 font-heading font-bold uppercase tracking-[0.08em] transition-all duration-300 hover:scale-105 hover:shadow-md px-10 py-4 text-base bg-orange text-white border-2 border-orange"
                    style={{ borderRadius: "40px" }}
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
