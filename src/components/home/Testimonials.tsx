import { testimonials } from "@/data/testimonials";
import SectionHeading from "@/components/ui/SectionHeading";

const avatarColors = ["#E8953A", "#3ECDC6", "#6FE3DD", "#F2B06B", "#2BA8A2", "#C87A2A"];

export default function Testimonials() {
  return (
    <section className="section" style={{ background: "#FFF9F0" }}>
      <div className="container">
        <SectionHeading
          label="Customer Love"
          title="What Our Crew Says"
          subtitle="Real talk from real customers. See why Orange County keeps choosing Toasty for their cannabis delivery."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="flex flex-col p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              style={{
                background: "#FFFFFF",
                border: "1px solid #E8E4DD",
                borderRadius: 30,
              }}
            >
              {/* Quote icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#E8953A"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mb-5 shrink-0"
              >
                <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V21Z" />
                <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1Z" />
              </svg>

              {/* Star rating */}
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="#E8953A"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>

              {/* Title */}
              <h3 className="font-heading font-bold text-lg mb-3" style={{ color: "#1A1A1A" }}>
                {testimonial.title}
              </h3>

              {/* Text */}
              <p className="text-base flex-1 mb-6" style={{ color: "#6B6B6B", lineHeight: 1.625 }}>
                {testimonial.text}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5" style={{ borderTop: "1px solid #E8E4DD" }}>
                <div
                  className="flex items-center justify-center rounded-full shrink-0 font-heading font-bold text-sm text-white"
                  style={{
                    width: 40,
                    height: 40,
                    background: avatarColors[index % avatarColors.length],
                  }}
                >
                  {testimonial.name.charAt(0)}
                </div>
                <span className="font-heading font-semibold text-sm" style={{ color: "#1A1A1A" }}>
                  {testimonial.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
