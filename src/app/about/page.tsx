import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Toasty CA — Orange County's favorite cannabis delivery service. Our story, mission, and what makes us different.",
};

const values = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    title: "Quality First",
    description:
      "Every product in our menu is lab-tested, premium-grade, and sourced from California's most trusted brands.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Speed & Reliability",
    description:
      "We know your time matters. Our delivery crew gets your order to your door fast, every single time.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Community Driven",
    description:
      "We're locals serving locals. Toasty was built by and for the Orange County cannabis community.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5C7 4 9 7 12 7s5-3 7.5-3a2.5 2.5 0 0 1 0 5H18" />
        <path d="M18 9v11a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9" />
        <path d="M12 7v15" />
      </svg>
    ),
    title: "Curated Selection",
    description:
      "We don't just stock everything — we handpick the best brands and products so you never have to guess.",
  },
];

const whyUs = [
  { stat: "1-2hr", label: "Average Delivery" },
  { stat: "$50", label: "Minimum Order" },
  { stat: "21+", label: "Age Verified" },
  { stat: "100%", label: "Licensed & Legal" },
];

export default function AboutPage() {
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
            label="About Toasty"
            title="Our Story"
            subtitle="We started Toasty CA with a simple idea: cannabis delivery should be easy, fun, and reliable. Here's who we are and what drives us."
          />
        </div>
      </section>

      {/* About Content — 2-Column */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left — Logo showcase */}
            <div className="relative flex items-center justify-center">
              <div
                className="absolute rounded-3xl"
                style={{
                  width: "90%",
                  height: "90%",
                  border: "2px solid #E8953A",
                  top: "8%",
                  left: "8%",
                  opacity: 0.3,
                }}
              />
              <div
                className="relative w-full flex items-center justify-center overflow-hidden rounded-3xl"
                style={{
                  aspectRatio: "4 / 3",
                  background:
                    "linear-gradient(135deg, #1A2A1A 0%, #2D4A2D 50%, #1A2A1A 100%)",
                }}
              >
                <img
                  src="/images/logo/toasty-logo.webp"
                  alt="Toasty CA Logo"
                  width={288}
                  height={288}
                  style={{ width: 288, height: "auto" }}
                />
              </div>
            </div>

            {/* Right — Content */}
            <div>
              <SectionHeading
                label="Who We Are"
                title="Welcome to Toasty CA"
                align="left"
              />
              <p
                className="text-base mb-6 max-w-lg"
                style={{ color: "#6B6B6B", lineHeight: 1.625 }}
              >
                {SITE.description}
              </p>
              <p
                className="text-base mb-10 max-w-lg"
                style={{ color: "#6B6B6B", lineHeight: 1.625 }}
              >
                Based in Orange County, we deliver premium cannabis products
                straight to your door. Whether you're a seasoned connoisseur or
                just getting started, we make the experience smooth, discreet,
                and genuinely enjoyable.
              </p>
              <Button href={SITE.shopUrlExpress} variant="primary" external>
                Shop Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="section" style={{ background: "#FFF9F0" }}>
        <div className="container text-center">
          <SectionHeading
            label="Our Mission"
            title="Elevating the Delivery Experience"
            subtitle="We believe cannabis delivery should feel as premium as the product itself. From the moment you browse our menu to the second your order arrives, every touchpoint is designed to delight."
          />

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-4">
            {whyUs.map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center p-8 rounded-3xl"
                style={{ background: "white", border: "1px solid #E8E4DD" }}
              >
                <span
                  className="font-heading font-bold mb-2"
                  style={{ fontSize: "2.5rem", color: "#E8953A" }}
                >
                  {item.stat}
                </span>
                <span
                  className="font-heading font-semibold text-sm uppercase tracking-wider"
                  style={{ color: "#6B6B6B" }}
                >
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="section">
        <div className="container">
          <SectionHeading
            label="Our Values"
            title="What We Stand For"
            subtitle="These are the principles that guide everything we do at Toasty."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {values.map((value) => (
              <div
                key={value.title}
                className="p-8 rounded-3xl"
                style={{ background: "#FFF9F0", border: "1px solid #E8E4DD" }}
              >
                <div
                  className="flex items-center justify-center rounded-full mb-6"
                  style={{
                    width: 56,
                    height: 56,
                    background: "#E8953A12",
                    border: "1.5px solid #E8953A",
                    color: "#E8953A",
                  }}
                >
                  {value.icon}
                </div>
                <h3
                  className="font-heading font-bold text-xl mb-3"
                  style={{ color: "#1A1A1A" }}
                >
                  {value.title}
                </h3>
                <p className="text-base" style={{ color: "#6B6B6B", lineHeight: 1.625 }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dark CTA */}
      <section className="section" style={{ background: "#1A2A1A" }}>
        <div className="container text-center">
          <SectionHeading
            label="Ready to Order?"
            title="Stay Toasty"
            subtitle="Browse our full menu of premium cannabis products and get them delivered to your door in Orange County."
            light
          />
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href={SITE.shopUrlExpress} variant="primary" external>
              Shop Now
            </Button>
            <Button href="/contact" variant="outline">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
