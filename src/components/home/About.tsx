import { SITE } from "@/lib/constants";
import Button from "@/components/ui/Button";

const features = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    title: "Licensed",
    description: "Fully licensed California cannabis delivery service",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Fast Delivery",
    description: "Quick, reliable delivery to your door",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11V6l3-3 3 3v5" />
        <path d="M5 11h14l-1.5 9H6.5L5 11Z" />
        <path d="M12 11v4" />
      </svg>
    ),
    title: "Lab Tested",
    description: "Every product tested for purity and potency",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5C7 4 9 7 12 7s5-3 7.5-3a2.5 2.5 0 0 1 0 5H18" />
        <path d="M18 9v11a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9" />
        <path d="M12 7v15" />
      </svg>
    ),
    title: "Premium Brands",
    description: "Curated selection of California's best brands",
  },
];

export default function About() {
  return (
    <section className="section" style={{ background: "#FFF9F0" }}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Logo showcase */}
          <div className="relative flex items-center justify-center">
            {/* Accent frame offset behind */}
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
            {/* Main container */}
            <div
              className="relative w-full flex items-center justify-center overflow-hidden rounded-3xl"
              style={{
                aspectRatio: "4 / 3",
                background: "linear-gradient(135deg, #1A2A1A 0%, #2D4A2D 50%, #1A2A1A 100%)",
              }}
            >
              <img
                src="/images/logo/toasty-logo.webp"
                alt="Toasty CA Logo"
                width={288}
                height={288}
                className="relative z-10"
                style={{ width: 288, height: "auto" }}
              />
            </div>
          </div>

          {/* Right — Content */}
          <div>
            {/* Label */}
            <div className="flex items-center gap-3 mb-4">
              <LeafIcon />
              <span
                className="font-heading font-black text-base uppercase"
                style={{ color: "#E8953A", letterSpacing: "1.92px" }}
              >
                About Toasty
              </span>
              <LeafIcon />
            </div>

            <h2
              className="font-heading font-bold mb-6"
              style={{ fontSize: "var(--text-display)", lineHeight: 1.35, color: "#1A1A1A" }}
            >
              Welcome to Toasty CA
            </h2>

            <p className="text-base mb-10 max-w-lg" style={{ color: "#6B6B6B", lineHeight: 1.625 }}>
              {SITE.description}
            </p>

            {/* Feature grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start gap-4">
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
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-base" style={{ color: "#1A1A1A" }}>
                      {feature.title}
                    </h3>
                    <p className="text-sm mt-1" style={{ color: "#6B6B6B" }}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Button href="/about" variant="primary">
                Learn More
              </Button>
              <Button href={SITE.shopUrlExpress} variant="outline" external>
                Start Shopping
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LeafIcon() {
  return (
    <svg viewBox="0 0 24 32" fill="none" className="w-4 h-5" style={{ color: "#E8953A" }}>
      <path d="M12 1C12 1 4 10 4 18C4 24 7.5 28 12 31C16.5 28 20 24 20 18C20 10 12 1 12 1Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M12 8V26M8 14L12 18L16 14" stroke="currentColor" strokeWidth="1" fill="none" />
    </svg>
  );
}
