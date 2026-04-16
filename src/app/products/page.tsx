import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import SectionHeading from "@/components/ui/SectionHeading";
import ProductCard from "@/components/ui/ProductCard";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse our premium cannabis menu — vapes, flower, edibles, concentrates, pre-rolls, and more. Delivered to your door in Orange County.",
};

export default function ProductsPage() {
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
            label="Our Menu"
            title="Premium Products"
            subtitle="Curated cannabis products from California's top brands, delivered fast and fresh to your door."
          />
        </div>
      </section>

      {/* Category Filter Pills */}
      <section style={{ paddingTop: 60, paddingBottom: 20 }}>
        <div className="container">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span
              className="inline-flex items-center px-6 py-3 rounded-full text-sm font-heading font-bold uppercase tracking-wider cursor-pointer transition-all duration-300"
              style={{ background: "#E8953A", color: "white" }}
            >
              All Products
            </span>
            {categories.map((cat) => (
              <span
                key={cat.id}
                className="inline-flex items-center px-6 py-3 rounded-full text-sm font-heading font-bold uppercase tracking-wider cursor-pointer transition-all duration-300 hover:shadow-md"
                style={{
                  background: "white",
                  color: "#1A1A1A",
                  border: "1.5px solid #E8E4DD",
                }}
              >
                {cat.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="section"
        style={{ background: "#FFF9F0", borderTop: "1px solid #E8E4DD" }}
      >
        <div className="container text-center">
          <SectionHeading
            label="Full Menu"
            title="See Even More on Toasty"
            subtitle="Our full product catalog lives on our shop. Browse hundreds of products from the best brands in California."
          />
          <Button href={SITE.shopUrlExpress} variant="primary" external>
            Shop on Toasty
          </Button>
        </div>
      </section>
    </>
  );
}
