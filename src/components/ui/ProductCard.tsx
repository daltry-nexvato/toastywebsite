import type { Product } from "@/data/products";
import Badge from "./Badge";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <a
      href={product.shopUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
      style={{ background: "white", border: "1px solid #E8E4DD", borderRadius: "30px" }}
    >
      {/* Badge */}
      {product.badge && (
        <div className="absolute top-4 left-4 z-10">
          <Badge variant={product.badge}>
            {product.badge === "new" ? "New" : product.badge === "popular" ? "Popular" : "Sale"}
          </Badge>
        </div>
      )}

      {/* Image */}
      <div className="relative aspect-square overflow-hidden" style={{ background: "#FFF9F0" }}>
        <div className="w-full h-full flex items-center justify-center text-center p-4" style={{ background: "linear-gradient(135deg, #E8953A, #3ECDC6)" }}>
          <span className="font-heading font-bold text-white text-lg">
            {product.brand} {product.name}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        {/* Stars */}
        <div className="flex items-center gap-1 mb-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg key={i} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#E8953A" stroke="none">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          ))}
        </div>

        <span className="text-sm font-heading font-bold uppercase tracking-wider mb-2 block" style={{ color: "#3ECDC6" }}>
          {product.brand}
        </span>
        <h3 className="font-heading font-bold text-lg leading-snug mb-5" style={{ color: "#1A1A1A" }}>
          {product.name}
        </h3>

        {/* Shop Now */}
        <div className="mt-auto">
          <span
            className="inline-flex items-center justify-center w-full gap-2 px-8 py-4 font-heading font-bold text-base uppercase tracking-[0.08em] text-white transition-all duration-300 group-hover:shadow-md"
            style={{ background: "#E8953A", borderRadius: "40px" }}
          >
            Shop Now
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7" /><path d="M7 7h10v10" />
            </svg>
          </span>
        </div>
      </div>
    </a>
  );
}
