import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Tips, product spotlights, and cannabis culture from the Toasty CA crew. Stay in the loop with our latest posts.",
};

const posts = [
  {
    slug: "welcome-to-toasty",
    title: "A Beginner's Guide to Cannabis Delivery in California",
    date: "April 10, 2026",
    author: "Toasty Team",
    category: "Guides",
    categoryColor: "#3ECDC6",
    excerpt:
      "New to cannabis delivery? Here's everything you need to know about ordering legally in California -- from what to expect to how to get started.",
  },
  {
    slug: "top-5-vapes-this-month",
    title: "Top 5 Vape Brands to Try in 2026",
    date: "April 5, 2026",
    author: "Toasty Team",
    category: "Products",
    categoryColor: "#E8953A",
    excerpt:
      "From STIIIZY to Dime, we break down the hottest vape brands hitting the shelves this year and what makes each one stand out.",
  },
  {
    slug: "loyalty-points-explained",
    title: "How Our Loyalty Rewards Program Works",
    date: "March 28, 2026",
    author: "Toasty Team",
    category: "Deals",
    categoryColor: "#2BA8A2",
    excerpt:
      "Earn points, stack savings, and unlock exclusive perks. Here's the full breakdown of our Toasty loyalty rewards program.",
  },
];

export default function BlogPage() {
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
            label="Blog"
            title="Tips & Updates"
            subtitle="Stay in the loop with cannabis culture, product spotlights, and delivery tips from the Toasty crew."
          />
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #E8E4DD",
                  borderRadius: 30,
                }}
              >
                {/* Image placeholder */}
                <div
                  className="w-full"
                  style={{
                    aspectRatio: "16 / 9",
                    background:
                      "linear-gradient(135deg, #1A2A1A 0%, #2D4A2D 50%, #1A2A1A 100%)",
                  }}
                />

                <div className="flex flex-col flex-1 p-7">
                  {/* Category badge + date */}
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-heading font-bold uppercase tracking-wide text-white"
                      style={{ background: post.categoryColor }}
                    >
                      {post.category}
                    </span>
                    <span className="text-sm" style={{ color: "#6B6B6B" }}>
                      {post.date}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className="font-heading font-bold text-lg leading-snug mb-3 transition-colors duration-200 group-hover:text-orange"
                    style={{ color: "#1A1A1A" }}
                  >
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p
                    className="text-sm flex-1 mb-5"
                    style={{ color: "#6B6B6B", lineHeight: 1.625 }}
                  >
                    {post.excerpt}
                  </p>

                  {/* Author + Read More */}
                  <div
                    className="flex items-center justify-between pt-5"
                    style={{ borderTop: "1px solid #E8E4DD" }}
                  >
                    <span
                      className="text-sm font-heading font-semibold"
                      style={{ color: "#6B6B6B" }}
                    >
                      {post.author}
                    </span>
                    <span
                      className="inline-flex items-center gap-1 text-sm font-heading font-bold uppercase tracking-wider"
                      style={{ color: "#E8953A" }}
                    >
                      Read More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
