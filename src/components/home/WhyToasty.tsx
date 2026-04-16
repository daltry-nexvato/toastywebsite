import SectionHeading from "@/components/ui/SectionHeading";

const pillars = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8Z" />
      </svg>
    ),
    title: "Lightning Fast",
    description: "Quick delivery right to your door. No long waits, no hassle -- just fast, reliable service every time.",
    borderColor: "#E8953A",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5C7 4 9 7 12 7s5-3 7.5-3a2.5 2.5 0 0 1 0 5H18" />
        <path d="M18 9v11a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9" />
        <path d="M12 7v15" />
      </svg>
    ),
    title: "Premium Quality",
    description: "Only the finest cannabis from California's top cultivators. Curated for quality, tested for consistency.",
    borderColor: "#3ECDC6",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11V6l3-3 3 3v5" />
        <path d="M5 11h14l-1.5 9H6.5L5 11Z" />
        <path d="M12 11v4" />
      </svg>
    ),
    title: "Lab Tested",
    description: "Every product goes through rigorous third-party lab testing for potency, purity, and your peace of mind.",
    borderColor: "#E8953A",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14l-5-4.87 6.91-1.01L12 2Z" />
      </svg>
    ),
    title: "Loyalty Rewards",
    description: "Earn points on every order. Stack up savings with our rewards program and exclusive member deals.",
    borderColor: "#3ECDC6",
  },
];

export default function WhyToasty() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          label="Why Choose Us"
          title="Why Toasty?"
          subtitle="We're not just another delivery service. Here's what makes us the go-to choice for cannabis in Orange County."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="flex flex-col items-center text-center">
              {/* Icon circle */}
              <div
                className="flex items-center justify-center rounded-full mb-6"
                style={{
                  width: 96,
                  height: 96,
                  border: `2px solid ${pillar.borderColor}`,
                  color: pillar.borderColor,
                  background: `${pillar.borderColor}08`,
                }}
              >
                {pillar.icon}
              </div>

              <h3 className="font-heading font-bold text-xl mb-3" style={{ color: "#1A1A1A" }}>
                {pillar.title}
              </h3>

              <p className="text-base" style={{ color: "#6B6B6B", lineHeight: 1.625 }}>
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
