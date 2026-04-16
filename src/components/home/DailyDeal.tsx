import { SITE } from "@/lib/constants";
import Button from "@/components/ui/Button";

export default function DailyDeal() {
  return (
    <section className="section" style={{ background: "#1A2A1A" }}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Large discount display */}
          <div className="flex flex-col items-center lg:items-start">
            <span
              className="font-heading font-extrabold uppercase"
              style={{ fontSize: "clamp(5rem, 12vw, 10rem)", lineHeight: 1, color: "#E8953A" }}
            >
              30%
            </span>
            <span
              className="font-heading font-extrabold uppercase -mt-2"
              style={{ fontSize: "clamp(3rem, 8vw, 6rem)", lineHeight: 1, color: "#FAF5E4" }}
            >
              OFF
            </span>
          </div>

          {/* Right — Deal details */}
          <div>
            {/* Label */}
            <div className="flex items-center gap-3 mb-4">
              <LeafIcon />
              <span
                className="font-heading font-black text-base uppercase"
                style={{ color: "#F2B06B", letterSpacing: "1.92px" }}
              >
                Daily Deal
              </span>
              <LeafIcon />
            </div>

            <h2
              className="font-heading font-bold mb-6"
              style={{ fontSize: "var(--text-display)", lineHeight: 1.35, color: "#FAF5E4" }}
            >
              Spend $100, Get 30% Off!
            </h2>

            <p className="text-base mb-8 max-w-lg" style={{ color: "rgba(250,245,228,0.7)", lineHeight: 1.625 }}>
              Level up your order with our daily deal. Spend $100 or more and save 30% on your
              entire purchase. Use the promo code below at checkout and stay toasty for less.
            </p>

            {/* Promo code pill */}
            <div
              className="inline-flex items-center gap-3 px-8 py-4 mb-10 rounded-full"
              style={{ border: "2px solid rgba(250,245,228,0.3)" }}
            >
              <span className="text-sm uppercase tracking-wider" style={{ color: "rgba(250,245,228,0.5)" }}>
                Promo Code:
              </span>
              <span className="font-heading font-bold text-xl tracking-wider" style={{ color: "#E8953A" }}>
                TOASTY30
              </span>
            </div>

            <div className="block">
              <a
                href={SITE.shopUrlExpress}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 font-heading font-bold uppercase tracking-[0.08em] transition-all duration-300 hover:scale-105 hover:shadow-md px-10 py-4 text-base"
                style={{
                  borderRadius: "40px",
                  border: "2px solid rgba(250,245,228,0.4)",
                  color: "#FAF5E4",
                  background: "transparent",
                }}
              >
                Grab This Deal
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LeafIcon() {
  return (
    <svg viewBox="0 0 24 32" fill="none" className="w-4 h-5" style={{ color: "#F2B06B" }}>
      <path d="M12 1C12 1 4 10 4 18C4 24 7.5 28 12 31C16.5 28 20 24 20 18C20 10 12 1 12 1Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M12 8V26M8 14L12 18L16 14" stroke="currentColor" strokeWidth="1" fill="none" />
    </svg>
  );
}
