interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  light?: boolean;
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  const accentColor = light ? "#F2B06B" : "#E8953A";

  return (
    <div className={`mb-14 ${align === "center" ? "text-center" : "text-left"}`}>
      {label && (
        <div className={`flex items-center gap-3 mb-4 ${align === "center" ? "justify-center" : ""}`}>
          <LeafIcon color={accentColor} />
          <span
            className="font-heading font-black text-base uppercase"
            style={{ color: accentColor, letterSpacing: "1.92px" }}
          >
            {label}
          </span>
          <LeafIcon color={accentColor} />
        </div>
      )}

      <h2
        className="font-heading font-bold"
        style={{
          fontSize: "var(--text-display)",
          lineHeight: 1.35,
          color: light ? "#FAF5E4" : "#1A1A1A",
        }}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`mt-6 max-w-2xl text-base ${align === "center" ? "mx-auto" : ""}`}
          style={{ color: light ? "rgba(250,245,228,0.7)" : "#6B6B6B", lineHeight: 1.625 }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

function LeafIcon({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 24 32" fill="none" className="w-4 h-5" style={{ color }}>
      <path d="M12 1C12 1 4 10 4 18C4 24 7.5 28 12 31C16.5 28 20 24 20 18C20 10 12 1 12 1Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M12 8V26M8 14L12 18L16 14" stroke="currentColor" strokeWidth="1" fill="none" />
    </svg>
  );
}
