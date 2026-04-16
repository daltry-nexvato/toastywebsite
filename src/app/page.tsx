import Hero from "@/components/home/Hero";
import Categories from "@/components/home/Categories";
import About from "@/components/home/About";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import WhyToasty from "@/components/home/WhyToasty";
import DailyDeal from "@/components/home/DailyDeal";
import TrustBar from "@/components/home/TrustBar";
import Testimonials from "@/components/home/Testimonials";
import BlogPreview from "@/components/home/BlogPreview";
import Instagram from "@/components/home/Instagram";
import FloatingElements from "@/components/ui/FloatingElements";

export default function HomePage() {
  return (
    <div style={{ position: "relative" }}>
      <FloatingElements />
      <Hero />
      <Categories />
      <About />
      <FeaturedProducts />
      <WhyToasty />
      <DailyDeal />
      <TrustBar />
      <Testimonials />
      <BlogPreview />
      <Instagram />
    </div>
  );
}
