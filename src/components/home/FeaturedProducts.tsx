import { products } from "@/data/products";
import ProductCard from "@/components/ui/ProductCard";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { SITE } from "@/lib/constants";

export default function FeaturedProducts() {
  const featured = products.slice(0, 8);

  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          label="Top Picks"
          title="Trending Products"
          subtitle="Hand-picked favorites from California's top brands. Fresh drops, fan favorites, and everything in between."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="flex justify-center mt-14">
          <Button href={SITE.shopUrlExpress} variant="primary" size="lg" external>
            View Full Menu
          </Button>
        </div>
      </div>
    </section>
  );
}
