import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Button from "@/components/ui/Button";

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  category: string;
  categoryColor: string;
  content: string[];
}

const blogPosts: Record<string, BlogPost> = {
  "welcome-to-toasty": {
    slug: "welcome-to-toasty",
    title: "A Beginner's Guide to Cannabis Delivery in California",
    date: "April 10, 2026",
    author: "Toasty Team",
    category: "Guides",
    categoryColor: "#3ECDC6",
    content: [
      "Cannabis delivery in California has come a long way since legalization. Whether you're brand new to the scene or just looking for a more convenient way to shop, delivery services like Toasty CA are making it easier than ever to get premium products brought right to your door.",
      "The first thing to know is that you must be 21 or older to order cannabis for recreational use in California. A valid government-issued photo ID is required at the time of delivery -- no exceptions. This is a legal requirement that all licensed delivery services must follow.",
      "When browsing a delivery menu, you'll find a wide variety of product types: flower, vapes, edibles, concentrates, pre-rolls, beverages, and more. Each category offers a different experience, so don't be afraid to explore and find what works best for you.",
      "Ordering is straightforward. Browse the menu on the delivery service's website, add items to your cart, and check out. Most services accept card payments and some offer cash on delivery. Minimum order amounts may apply -- at Toasty CA, our minimum is $50.",
      "Delivery times vary, but most orders arrive within 1-2 hours. You'll typically receive updates on your order status and an ETA for your delivery. The process is designed to be smooth, discreet, and professional.",
      "One of the best parts about using a delivery service is the curated selection. Rather than being overwhelmed by hundreds of options, services like Toasty handpick the best brands and products so every choice is a good one. Happy shopping, and stay toasty!",
    ],
  },
  "top-5-vapes-this-month": {
    slug: "top-5-vapes-this-month",
    title: "Top 5 Vape Brands to Try in 2026",
    date: "April 5, 2026",
    author: "Toasty Team",
    category: "Products",
    categoryColor: "#E8953A",
    content: [
      "The vape game in California keeps evolving, and 2026 is shaping up to be one of the best years yet. Whether you prefer disposables, pods, or cartridges, there's something for everyone. Here are the top five brands we're loving right now.",
      "STIIIZY continues to dominate with their proprietary pod system. Known for clean, potent hits and a sleek form factor, STIIIZY pods like the OG Kush remain fan favorites. Their consistency and brand reliability keep them at the top of most delivery menus.",
      "Dime Industries has made a huge splash with their all-in-one disposables. The Cantaloupe Dream and Mango OG are standout flavors, offering smooth draws and impressive battery life. If convenience is your priority, Dime is hard to beat.",
      "Raw Garden's refined live resin cartridges deliver an authentic cannabis experience. Their focus on clean, solventless extraction means you're getting pure flavor profiles that truly represent each strain.",
      "Friendly Farms has earned its reputation through premium live resin cartridges that capture the full terpene profile of each strain. Cannabis connoisseurs appreciate their commitment to quality and flavor accuracy.",
      "Rounding out our list is Select, known for their wide strain variety and consistent quality. Their Elite and Essentials lines offer options at different price points without compromising on the experience. Whatever your budget, Select has you covered.",
    ],
  },
  "loyalty-points-explained": {
    slug: "loyalty-points-explained",
    title: "How Our Loyalty Rewards Program Works",
    date: "March 28, 2026",
    author: "Toasty Team",
    category: "Deals",
    categoryColor: "#2BA8A2",
    content: [
      "At Toasty CA, we believe in rewarding our loyal customers. That's why we've built a simple, straightforward loyalty rewards program that puts real savings back in your pocket with every order.",
      "Here's how it works: every time you make a purchase on toastyca.com, you automatically earn points based on your order total. There's no sign-up form, no extra app to download, and no hoops to jump through. Just order and earn.",
      "When you've accumulated enough points, you can redeem them at checkout for an instant discount on your next order. The more you order, the more you save -- it's that simple.",
      "But the rewards don't stop at points. As a loyal Toasty customer, you'll also get access to member-only deals, early access to new product drops, and exclusive promo codes that aren't available to the general public.",
      "We also run daily specials and rotating deals throughout the week. Follow us on Instagram @toastyca_ to stay up to date on flash sales, holiday promotions, and limited-time offers that can save you even more.",
      "Ready to start stacking those rewards? Head over to toastyca.com and place your next order. Your points are waiting. Stay toasty!",
    ],
  },
};

export function generateStaticParams() {
  return [
    { slug: "welcome-to-toasty" },
    { slug: "top-5-vapes-this-month" },
    { slug: "loyalty-points-explained" },
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts[slug];
  if (!post) return { title: "Post Not Found" };

  return {
    title: post.title,
    description: post.content[0].slice(0, 155) + "...",
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    notFound();
  }

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
        <div className="container max-w-3xl">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-heading font-bold text-sm uppercase tracking-wider mb-8 transition-colors duration-200 hover:text-orange"
            style={{ color: "#6B6B6B" }}
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
              <path d="m12 19-7-7 7-7" />
              <path d="M19 12H5" />
            </svg>
            Back to Blog
          </Link>

          {/* Category badge */}
          <span
            className="inline-flex items-center px-3 py-1 rounded-full text-xs font-heading font-bold uppercase tracking-wide text-white mb-4"
            style={{ background: post.categoryColor }}
          >
            {post.category}
          </span>

          {/* Title */}
          <h1
            className="font-heading font-bold mb-6"
            style={{
              fontSize: "var(--text-display)",
              lineHeight: 1.35,
              color: "#1A1A1A",
            }}
          >
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex items-center gap-4">
            <span className="text-sm font-heading font-semibold" style={{ color: "#6B6B6B" }}>
              {post.author}
            </span>
            <span style={{ color: "#E8E4DD" }}>|</span>
            <span className="text-sm" style={{ color: "#6B6B6B" }}>
              {post.date}
            </span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <section className="section">
        <div className="container max-w-3xl">
          <article className="flex flex-col gap-6">
            {post.content.map((paragraph, index) => (
              <p
                key={index}
                className="text-base"
                style={{ color: "#1A1A1A", lineHeight: 1.8 }}
              >
                {paragraph}
              </p>
            ))}
          </article>

          {/* Divider */}
          <div className="my-16" style={{ borderTop: "1px solid #E8E4DD" }} />

          {/* Back to blog + CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 font-heading font-bold text-sm uppercase tracking-wider transition-colors duration-200 hover:text-orange"
              style={{ color: "#6B6B6B" }}
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
                <path d="m12 19-7-7 7-7" />
                <path d="M19 12H5" />
              </svg>
              All Posts
            </Link>
            <Button href="https://www.toastyca.com" variant="primary" external>
              Shop on Toasty
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
