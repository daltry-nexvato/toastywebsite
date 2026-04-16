import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Delivery",
  description:
    "Learn how Toasty CA cannabis delivery works. Browse, order, and enjoy — delivered fast to your door in Orange County, California.",
};

const steps = [
  {
    number: "1",
    title: "Browse",
    description:
      "Explore our curated menu of premium cannabis products on toastyca.com. Filter by category, brand, or vibe to find exactly what you're looking for.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    ),
  },
  {
    number: "2",
    title: "Order",
    description:
      "Add your favorites to the cart, apply any promo codes or loyalty points, and check out. It's quick, simple, and secure.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="8" cy="21" r="1" />
        <circle cx="19" cy="21" r="1" />
        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
      </svg>
    ),
  },
  {
    number: "3",
    title: "Enjoy",
    description:
      "Sit back and relax. Our delivery crew will bring your order right to your door — fast, discreet, and always with a smile.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
];

const deliveryDetails = [
  {
    title: "Delivery Area",
    value: "Orange County, CA",
    description: "We currently deliver throughout Orange County. Enter your address at checkout to confirm coverage.",
  },
  {
    title: "Minimum Order",
    value: `$${SITE.deliveryMinimum}`,
    description: "Minimum order of $50 after any discounts or loyalty points are applied.",
  },
  {
    title: "Delivery Time",
    value: "1-2 Hours",
    description: "Most orders arrive within 1-2 hours. Times may vary based on demand and location.",
  },
  {
    title: "Age Requirement",
    value: "21+",
    description: "Valid government-issued photo ID is required at the time of delivery. No exceptions.",
  },
];

export default function DeliveryPage() {
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
            label="Delivery"
            title="How It Works"
            subtitle="Getting premium cannabis delivered to your door in Orange County has never been easier. Three simple steps and you're set."
          />
        </div>
      </section>

      {/* 3-Step Process */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <div key={step.title} className="text-center">
                {/* Numbered circle */}
                <div className="flex justify-center mb-8">
                  <div
                    className="relative flex items-center justify-center rounded-full"
                    style={{
                      width: 100,
                      height: 100,
                      background: "#E8953A",
                    }}
                  >
                    <span
                      className="font-heading font-bold text-white"
                      style={{ fontSize: "2.5rem" }}
                    >
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Connector line (between steps on desktop) */}
                {index < steps.length - 1 && (
                  <div
                    className="hidden md:block absolute"
                    style={{
                      top: "50%",
                      height: 2,
                      background: "#E8E4DD",
                    }}
                  />
                )}

                {/* Icon */}
                <div
                  className="inline-flex items-center justify-center rounded-full mb-5"
                  style={{
                    width: 56,
                    height: 56,
                    background: "#E8953A12",
                    border: "1.5px solid #E8953A",
                    color: "#E8953A",
                  }}
                >
                  {step.icon}
                </div>

                <h3
                  className="font-heading font-bold text-2xl mb-4"
                  style={{ color: "#1A1A1A" }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-base max-w-xs mx-auto"
                  style={{ color: "#6B6B6B", lineHeight: 1.625 }}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Details */}
      <section className="section" style={{ background: "#FFF9F0" }}>
        <div className="container">
          <SectionHeading
            label="Delivery Info"
            title="What You Need to Know"
            subtitle="All the details about our delivery service in one place."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {deliveryDetails.map((detail) => (
              <div
                key={detail.title}
                className="p-8 rounded-3xl"
                style={{ background: "white", border: "1px solid #E8E4DD" }}
              >
                <p
                  className="font-heading font-bold text-sm uppercase tracking-wider mb-2"
                  style={{ color: "#3ECDC6" }}
                >
                  {detail.title}
                </p>
                <p
                  className="font-heading font-bold mb-3"
                  style={{ fontSize: "2rem", color: "#E8953A" }}
                >
                  {detail.value}
                </p>
                <p className="text-sm" style={{ color: "#6B6B6B", lineHeight: 1.625 }}>
                  {detail.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: "#1A2A1A" }}>
        <div className="container text-center">
          <SectionHeading
            label="Ready to Order?"
            title="Get It Delivered"
            subtitle="Browse our menu, place your order, and let us handle the rest. Fast, fresh, green."
            light
          />
          <Button href={SITE.shopUrlExpress} variant="primary" external>
            Start Your Order
          </Button>
        </div>
      </section>
    </>
  );
}
