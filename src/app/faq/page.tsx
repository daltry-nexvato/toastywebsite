"use client";

import { useState } from "react";
import { faqs } from "@/data/faqs";
import SectionHeading from "@/components/ui/SectionHeading";

const categoryLabels: Record<string, string> = {
  ordering: "Ordering",
  delivery: "Delivery",
  products: "Products",
  loyalty: "Loyalty & Deals",
  legal: "Legal & Compliance",
};

const categoryOrder = ["ordering", "delivery", "products", "loyalty", "legal"];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const groupedFaqs = categoryOrder.map((cat) => ({
    category: cat,
    label: categoryLabels[cat],
    items: faqs.filter((faq) => faq.category === cat),
  }));

  let globalIndex = 0;

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
            label="FAQ"
            title="Got Questions?"
            subtitle="Find answers to the most common questions about ordering, delivery, products, and more."
          />
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="section">
        <div className="container max-w-3xl">
          {groupedFaqs.map((group) => {
            if (group.items.length === 0) return null;

            return (
              <div key={group.category} className="mb-12 last:mb-0">
                {/* Category heading */}
                <h2
                  className="font-heading font-bold text-2xl mb-6 pb-3"
                  style={{ color: "#1A1A1A", borderBottom: "2px solid #E8953A" }}
                >
                  {group.label}
                </h2>

                <div className="flex flex-col gap-3">
                  {group.items.map((faq) => {
                    const idx = globalIndex++;
                    const isOpen = openIndex === idx;

                    return (
                      <div
                        key={idx}
                        className="rounded-2xl overflow-hidden transition-all duration-300"
                        style={{
                          background: isOpen ? "#FFF9F0" : "white",
                          border: `1px solid ${isOpen ? "#E8953A" : "#E8E4DD"}`,
                        }}
                      >
                        <button
                          onClick={() => setOpenIndex(isOpen ? null : idx)}
                          className="w-full flex items-center justify-between gap-4 p-6 text-left cursor-pointer"
                        >
                          <span
                            className="font-heading font-bold text-base"
                            style={{ color: "#1A1A1A" }}
                          >
                            {faq.question}
                          </span>
                          <span
                            className="shrink-0 flex items-center justify-center rounded-full transition-transform duration-300"
                            style={{
                              width: 36,
                              height: 36,
                              background: isOpen ? "#E8953A" : "#E8953A12",
                              color: isOpen ? "white" : "#E8953A",
                              transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                            }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              height="18"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M12 5v14" />
                              <path d="M5 12h14" />
                            </svg>
                          </span>
                        </button>

                        {isOpen && (
                          <div
                            className="px-6 pb-6"
                            style={{ color: "#6B6B6B", lineHeight: 1.625 }}
                          >
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Still have questions */}
      <section className="section" style={{ background: "#FFF9F0" }}>
        <div className="container text-center">
          <SectionHeading
            label="Need More Help?"
            title="We're Here for You"
            subtitle="Can't find what you're looking for? Reach out to us directly and our team will get back to you."
          />
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 font-heading font-bold uppercase tracking-[0.08em] transition-all duration-300 hover:scale-105 hover:shadow-md px-10 py-4 text-base bg-orange text-white border-2 border-orange"
            style={{ borderRadius: "40px" }}
          >
            Contact Us
          </a>
        </div>
      </section>
    </>
  );
}
