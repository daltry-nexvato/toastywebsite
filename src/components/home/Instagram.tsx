import { SOCIAL } from "@/lib/constants";

const gradients = [
  "linear-gradient(135deg, #E8953A 0%, #F2B06B 100%)",
  "linear-gradient(135deg, #3ECDC6 0%, #6FE3DD 100%)",
  "linear-gradient(135deg, #1A2A1A 0%, #3ECDC6 100%)",
  "linear-gradient(135deg, #F2B06B 0%, #E8953A 100%)",
  "linear-gradient(135deg, #2BA8A2 0%, #3ECDC6 100%)",
  "linear-gradient(135deg, #E8953A 0%, #3ECDC6 100%)",
];

export default function Instagram() {
  return (
    <section className="section">
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2
            className="font-heading font-bold mb-4"
            style={{ fontSize: "var(--text-display)", lineHeight: 1.35, color: "#1A1A1A" }}
          >
            Follow Us on Instagram
          </h2>
          <a
            href={SOCIAL.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-lg font-heading font-semibold transition-colors duration-300 hover:opacity-80"
            style={{ color: "#E8953A" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
            {SOCIAL.instagram.handle}
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {gradients.map((gradient, index) => (
            <a
              key={index}
              href={SOCIAL.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden"
              style={{ aspectRatio: "1 / 1", borderRadius: 30 }}
            >
              {/* Gradient background */}
              <div
                className="absolute inset-0 transition-transform duration-500 group-hover:scale-110"
                style={{ background: gradient }}
              />

              {/* Hover overlay */}
              <div
                className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{ background: "rgba(26, 26, 26, 0.5)" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
