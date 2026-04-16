const badgeColors = ["#E8953A", "#3ECDC6", "#E8953A", "#3ECDC6"];

const badges = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2.81A2 2 0 0 1 20 8v8a2 2 0 0 1-2 2h-2" />
        <rect width="12" height="12" x="6" y="6" rx="2" />
        <circle cx="12" cy="12" r="2" />
        <path d="M12 6v2m0 8v2M6 12h2m8 0h2" />
      </svg>
    ),
    title: "Free Delivery",
    subtitle: "On orders over $50",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
    title: "Fast Support",
    subtitle: "Friendly crew, quick replies",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    title: "Secure Checkout",
    subtitle: "Safe and encrypted ordering",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14l-5-4.87 6.91-1.01L12 2Z" />
      </svg>
    ),
    title: "Quality Guaranteed",
    subtitle: "Premium products, every time",
  },
];

export default function TrustBar() {
  return (
    <section
      className="py-24 lg:py-28"
      style={{
        background: "#FFFFFF",
        borderTop: "1px solid #E8E4DD",
        borderBottom: "1px solid #E8E4DD",
      }}
    >
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {badges.map((badge, i) => (
            <div key={badge.title} className="flex flex-col items-center text-center">
              {/* Icon circle */}
              <div
                className="flex items-center justify-center rounded-full mb-5"
                style={{
                  width: 96,
                  height: 96,
                  border: `2px solid ${badgeColors[i]}`,
                  color: badgeColors[i],
                  background: `${badgeColors[i]}08`,
                }}
              >
                {badge.icon}
              </div>

              <h3 className="font-heading font-bold text-lg mb-1" style={{ color: "#1A1A1A" }}>
                {badge.title}
              </h3>

              <p className="text-sm" style={{ color: "#6B6B6B" }}>
                {badge.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
