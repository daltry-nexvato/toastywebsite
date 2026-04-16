import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Deals",
  description:
    "Save big on premium cannabis with Toasty CA deals, promo codes, and loyalty rewards. Stay toasty for less.",
};

const loyaltyPerks = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    title: "Earn Points",
    description: "Accumulate points with every purchase you make on Toasty.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
        <path d="M12 18V6" />
      </svg>
    ),
    title: "Redeem Savings",
    description: "Apply your points as discounts on any future order.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5C7 4 9 7 12 7s5-3 7.5-3a2.5 2.5 0 0 1 0 5H18" />
        <path d="M18 9v11a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9" />
        <path d="M12 7v15" />
      </svg>
    ),
    title: "Exclusive Perks",
    description: "Get access to member-only deals and early product drops.",
  },
];

export default function DealsPage() {
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
            label="Deals"
            title="Save Big, Stay Toasty"
            subtitle="We love a good deal just as much as you do. Check out our current promotions and loyalty rewards."
          />
        </div>
      </section>

      {/* Featured Deal */}
      <section className="section" style={{ background: "#1A2A1A" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left — Large discount display */}
            <div className="flex flex-col items-center lg:items-start">
              <span
                className="font-heading font-extrabold uppercase"
                style={{
                  fontSize: "clamp(5rem, 12vw, 10rem)",
                  lineHeight: 1,
                  color: "#E8953A",
                }}
              >
                30%
              </span>
              <span
                className="font-heading font-extrabold uppercase -mt-2"
                style={{
                  fontSize: "clamp(3rem, 8vw, 6rem)",
                  lineHeight: 1,
                  color: "#FAF5E4",
                }}
              >
                OFF
              </span>
            </div>

            {/* Right — Deal details */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <LeafIcon />
                <span
                  className="font-heading font-black text-base uppercase"
                  style={{ color: "#F2B06B", letterSpacing: "1.92px" }}
                >
                  Featured Deal
                </span>
                <LeafIcon />
              </div>

              <h2
                className="font-heading font-bold mb-6"
                style={{
                  fontSize: "var(--text-display)",
                  lineHeight: 1.35,
                  color: "#FAF5E4",
                }}
              >
                Spend $100, Get 30% Off!
              </h2>

              <p
                className="text-base mb-8 max-w-lg"
                style={{ color: "rgba(250,245,228,0.7)", lineHeight: 1.625 }}
              >
                Level up your order with our featured deal. Spend $100 or more
                and save 30% on your entire purchase. Use the promo code below
                at checkout and stay toasty for less.
              </p>

              {/* Promo code pill */}
              <div
                className="inline-flex items-center gap-3 px-8 py-4 mb-10 rounded-full"
                style={{ border: "2px solid rgba(250,245,228,0.3)" }}
              >
                <span
                  className="text-sm uppercase tracking-wider"
                  style={{ color: "rgba(250,245,228,0.5)" }}
                >
                  Promo Code:
                </span>
                <span
                  className="font-heading font-bold text-xl tracking-wider"
                  style={{ color: "#E8953A" }}
                >
                  TOASTY30
                </span>
              </div>

              <div className="block">
                <Button href={SITE.shopUrlExpress} variant="primary" external>
                  Grab This Deal
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Loyalty Program */}
      <section className="section">
        <div className="container">
          <SectionHeading
            label="Rewards"
            title="Toasty Loyalty Program"
            subtitle="Every order earns you points. Every point gets you closer to your next discount. It's that simple."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {loyaltyPerks.map((perk) => (
              <div key={perk.title} className="text-center">
                <div
                  className="inline-flex items-center justify-center rounded-full mb-6"
                  style={{
                    width: 72,
                    height: 72,
                    background: "#E8953A12",
                    border: "1.5px solid #E8953A",
                    color: "#E8953A",
                  }}
                >
                  {perk.icon}
                </div>
                <h3
                  className="font-heading font-bold text-xl mb-3"
                  style={{ color: "#1A1A1A" }}
                >
                  {perk.title}
                </h3>
                <p
                  className="text-base max-w-xs mx-auto"
                  style={{ color: "#6B6B6B", lineHeight: 1.625 }}
                >
                  {perk.description}
                </p>
              </div>
            ))}
          </div>

          {/* How it works summary */}
          <div
            className="mt-16 p-10 rounded-3xl max-w-3xl mx-auto text-center"
            style={{ background: "#FFF9F0", border: "1px solid #E8E4DD" }}
          >
            <h3
              className="font-heading font-bold text-2xl mb-4"
              style={{ color: "#1A1A1A" }}
            >
              How It Works
            </h3>
            <p
              className="text-base mb-6 max-w-xl mx-auto"
              style={{ color: "#6B6B6B", lineHeight: 1.625 }}
            >
              Points are automatically added to your account with every purchase.
              When you're ready to redeem, simply apply your points at checkout
              for an instant discount. No extra steps, no hoops to jump through.
            </p>
            <Button href={SITE.shopUrlExpress} variant="primary" external>
              Start Earning
            </Button>
          </div>
        </div>
      </section>

      {/* Daily Deals Callout */}
      <section className="section" style={{ background: "#FFF9F0" }}>
        <div className="container text-center">
          <SectionHeading
            label="Stay Updated"
            title="Daily Deals & Specials"
            subtitle="We run rotating deals and flash sales throughout the week. Follow us on Instagram to never miss a drop."
          />
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href={SITE.shopUrlExpress} variant="primary" external>
              Shop Today's Deals
            </Button>
            <Button
              href="https://www.instagram.com/toastyca_/"
              variant="outline"
              external
            >
              Follow @toastyca_
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

function LeafIcon() {
  return (
    <svg
      viewBox="0 0 24 32"
      fill="none"
      className="w-4 h-5"
      style={{ color: "#F2B06B" }}
    >
      <path
        d="M12 1C12 1 4 10 4 18C4 24 7.5 28 12 31C16.5 28 20 24 20 18C20 10 12 1 12 1Z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M12 8V26M8 14L12 18L16 14"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
      />
    </svg>
  );
}
