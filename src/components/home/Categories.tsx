import { categories } from "@/data/categories";
import SectionHeading from "@/components/ui/SectionHeading";

const categoryIcons: Record<string, React.ReactNode> = {
  vapes: (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 2v4m8-4v4" />
      <rect x="6" y="6" width="12" height="16" rx="2" />
      <circle cx="12" cy="14" r="3" />
    </svg>
  ),
  concentrates: (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 2h6l3 7H6L9 2Z" />
      <path d="M6 9v11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V9" />
      <path d="M10 13h4" />
    </svg>
  ),
  flower: (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 7.5a4.5 4.5 0 1 1 4.5 4.5M12 7.5A4.5 4.5 0 1 0 7.5 12M12 7.5V9m-4.5 3a4.5 4.5 0 1 0 4.5 4.5M7.5 12H9m7.5 0a4.5 4.5 0 1 1-4.5 4.5m4.5-4.5H15m-3 4.5V15" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  prerolls: (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 21L19 7" />
      <path d="M19 7l-2-4" />
      <path d="M5 21l-2-1" />
      <path d="M8 18l10-14" />
      <path d="M20 4c-1 2-3 3-5 3" />
    </svg>
  ),
  beverages: (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 2h8l-1 18H9L8 2Z" />
      <path d="M6 6h12" />
      <path d="M10 10h4" />
    </svg>
  ),
  edibles: (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a7 7 0 0 0-7 7c0 4 3 7 7 13 4-6 7-9 7-13a7 7 0 0 0-7-7Z" />
      <circle cx="12" cy="9" r="2" />
    </svg>
  ),
  hardware: (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="2" width="6" height="20" rx="3" />
      <path d="M9 10h6" />
      <circle cx="12" cy="6" r="1" fill="currentColor" />
    </svg>
  ),
  cbd: (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v8" />
      <path d="M12 10c-4 0-7 3-7 7a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3c0-4-3-7-7-7Z" />
      <path d="M8 5l4 5 4-5" />
    </svg>
  ),
};

export default function Categories() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          label="Browse Category"
          title="Pick Your Product Type"
          subtitle="From flower to edibles, we've got your vibe covered. Browse our curated categories and find exactly what you're looking for."
        />

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <a
              key={category.id}
              href={category.shopUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2"
            >
              {/* Icon circle */}
              <div
                className="flex items-center justify-center rounded-full transition-all duration-300 group-hover:shadow-lg group-hover:scale-105"
                style={{
                  width: 112,
                  height: 112,
                  background: `${category.color}12`,
                  border: `2px solid ${category.color}`,
                  color: category.color,
                }}
              >
                {categoryIcons[category.id] || categoryIcons.flower}
              </div>

              {/* Name */}
              <h3
                className="font-heading font-bold text-lg mt-5 transition-colors duration-300 group-hover:text-orange"
                style={{ color: "#1A1A1A" }}
              >
                {category.name}
              </h3>

              {/* Shop Now link */}
              <span
                className="inline-flex items-center gap-1 mt-2 text-sm font-heading font-semibold uppercase tracking-wider transition-colors duration-300"
                style={{ color: "#6B6B6B" }}
              >
                Shop Now
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
