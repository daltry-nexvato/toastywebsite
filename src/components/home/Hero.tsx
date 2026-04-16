"use client";

import { useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { SITE } from "@/lib/constants";

const parallaxItems = [
  // Back layer (far): small, move least
  { src: "/images/hero/gummy-2.webp", width: 70, top: "5%", right: "2%", depth: 0.1, rot: -20 },
  { src: "/images/hero/nug-3.webp", width: 80, bottom: "12%", left: "5%", depth: 0.15, rot: 15 },
  // Mid layer
  { src: "/images/hero/gummy-1.webp", width: 140, top: "8%", left: "8%", depth: 0.35, rot: 25 },
  { src: "/images/hero/gummy-3.webp", width: 120, bottom: "15%", right: "5%", depth: 0.3, rot: -15 },
  { src: "/images/hero/nug-2.webp", width: 130, top: "55%", left: "0%", depth: 0.4, rot: 10 },
];

// Idle float keyframes for when mouse is not hovering
const floatVariants = {
  animate: (i: number) => ({
    y: [0, -6 - i * 2, 0],
    x: [0, 3 + i, 0],
    transition: {
      duration: 5 + i * 0.8,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  }),
};

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring smoothing for mouse follow
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  function handleMouseMove(e: React.MouseEvent) {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    // Normalize to -0.5 to 0.5
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <section
      className="relative min-h-screen flex items-start overflow-clip"
      style={{ paddingTop: "calc(var(--announcement-height, 0px) + 120px)", paddingBottom: "60px" }}
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero/hero-bg.webp"
          alt=""
          role="presentation"
          width={1920}
          height={1072}
          className="w-full h-full object-cover object-right"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to right, #FAF5E4 35%, rgba(250,245,228,0.6) 55%, transparent 75%)" }}
        />
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Text */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <LeafIcon />
              <span
                className="font-heading font-black text-base uppercase"
                style={{ color: "#E8953A", letterSpacing: "1.92px" }}
              >
                Premium Cannabis Delivery
              </span>
            </div>

            <h1
              className="font-heading font-extrabold mb-8"
              style={{ fontSize: "var(--text-hero)", lineHeight: 1.15, color: "#1A1A1A" }}
            >
              Fast. Fresh.<br />
              <span style={{ color: "#E8953A" }}>Green.</span>
            </h1>

            <p className="text-base mb-10 max-w-lg" style={{ color: "#6B6B6B", lineHeight: 1.625 }}>
              {SITE.subtitle} Premium cannabis delivered fresh to your door in Orange County.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-5">
              <a
                href={SITE.shopUrlExpress}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 font-heading font-bold text-base uppercase tracking-[0.08em] text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{ background: "#E8953A", border: "2px solid #E8953A", padding: "18px 48px", borderRadius: "40px" }}
              >
                Shop Now
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                </svg>
              </a>
              <a
                href="/products"
                className="inline-flex items-center justify-center gap-2 font-heading font-bold text-base uppercase tracking-[0.08em] transition-all duration-300 hover:scale-105"
                style={{ color: "#1A1A1A", border: "2px solid #E8E4DD", background: "rgba(255,255,255,0.7)", backdropFilter: "blur(4px)", padding: "18px 48px", borderRadius: "40px" }}
              >
                Browse Menu
              </a>
            </div>
          </div>

          {/* Right — Parallax products */}
          <div
            ref={containerRef}
            className="relative hidden lg:flex items-center justify-center"
            style={{ minHeight: 500 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {/* Background parallax items */}
            {parallaxItems.map((item, i) => {
              const x = useTransform(springX, [-0.5, 0.5], [-15 * item.depth, 15 * item.depth]);
              const y = useTransform(springY, [-0.5, 0.5], [-10 * item.depth, 10 * item.depth]);

              return (
                <motion.img
                  key={i}
                  src={item.src}
                  alt=""
                  role="presentation"
                  className="absolute"
                  style={{
                    width: item.width,
                    top: item.top,
                    left: item.left,
                    right: item.right,
                    bottom: item.bottom,
                    rotate: item.rot,
                    x,
                    y,
                  }}
                  variants={floatVariants}
                  animate="animate"
                  custom={i}
                />
              );
            })}

            {/* Main nug (front layer, moves most) */}
            <motion.img
              src="/images/hero/nug.webp"
              alt="Premium Cannabis Bud"
              className="relative z-10"
              style={{
                width: 500,
                x: useTransform(springX, [-0.5, 0.5], [-15, 15]),
                y: useTransform(springY, [-0.5, 0.5], [-10, 10]),
              }}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function LeafIcon() {
  return (
    <svg viewBox="0 0 24 32" fill="none" className="w-4 h-5" style={{ color: "#E8953A" }}>
      <path d="M12 1C12 1 4 10 4 18C4 24 7.5 28 12 31C16.5 28 20 24 20 18C20 10 12 1 12 1Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M12 8V26M8 14L12 18L16 14" stroke="currentColor" strokeWidth="1" fill="none" />
    </svg>
  );
}
