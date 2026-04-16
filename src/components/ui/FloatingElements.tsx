"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/* ------------------------------------------------------------------ */
/*  Element definitions                                                */
/* ------------------------------------------------------------------ */

interface FloatingItem {
  src: string;
  top: number;       // px from top of container
  left: string;      // percentage
  size: number;      // px
  rotation: number;  // initial degrees
  depth: "close" | "mid" | "far";
  bobDuration: number; // seconds
}

const IMAGES = [
  "/images/floating/gummy-1.webp",
  "/images/floating/gummy-2.webp",
  "/images/floating/gummy-3.webp",
  "/images/floating/nug-2.webp",
  "/images/floating/nug-3.webp",
];

const items: FloatingItem[] = [
  // ---- Close (big, sharp, heavy shadow) ----
  { src: IMAGES[0], top: 250,  left: "3%",  size: 140, rotation: 15,   depth: "close", bobDuration: 6 },
  { src: IMAGES[3], top: 900,  left: "91%", size: 160, rotation: -20,  depth: "close", bobDuration: 7 },
  { src: IMAGES[1], top: 1800, left: "4%",  size: 120, rotation: 30,   depth: "close", bobDuration: 5.5 },
  { src: IMAGES[4], top: 2700, left: "90%", size: 180, rotation: -10,  depth: "close", bobDuration: 6.5 },
  { src: IMAGES[2], top: 3500, left: "2%",  size: 130, rotation: 45,   depth: "close", bobDuration: 7.5 },
  { src: IMAGES[0], top: 4400, left: "93%", size: 110, rotation: -35,  depth: "close", bobDuration: 6 },
  { src: IMAGES[3], top: 5300, left: "5%",  size: 150, rotation: 20,   depth: "close", bobDuration: 5 },
  { src: IMAGES[1], top: 6200, left: "89%", size: 90,  rotation: -25,  depth: "close", bobDuration: 7 },
  { src: IMAGES[4], top: 7100, left: "3%",  size: 140, rotation: 10,   depth: "close", bobDuration: 6.5 },
  { src: IMAGES[2], top: 7600, left: "92%", size: 120, rotation: -40,  depth: "close", bobDuration: 5.5 },

  // ---- Mid (medium) ----
  { src: IMAGES[2], top: 400,  left: "92%", size: 70,  rotation: -25,  depth: "mid", bobDuration: 6 },
  { src: IMAGES[0], top: 1200, left: "5%",  size: 65,  rotation: 40,   depth: "mid", bobDuration: 7 },
  { src: IMAGES[3], top: 2000, left: "88%", size: 80,  rotation: -15,  depth: "mid", bobDuration: 5.5 },
  { src: IMAGES[1], top: 2400, left: "6%",  size: 55,  rotation: 50,   depth: "mid", bobDuration: 6.5 },
  { src: IMAGES[4], top: 3100, left: "94%", size: 60,  rotation: -30,  depth: "mid", bobDuration: 7.5 },
  { src: IMAGES[2], top: 3800, left: "3%",  size: 75,  rotation: 35,   depth: "mid", bobDuration: 5 },
  { src: IMAGES[0], top: 4800, left: "90%", size: 50,  rotation: -45,  depth: "mid", bobDuration: 6 },
  { src: IMAGES[3], top: 5600, left: "7%",  size: 70,  rotation: 20,   depth: "mid", bobDuration: 7 },
  { src: IMAGES[1], top: 6500, left: "93%", size: 60,  rotation: -10,  depth: "mid", bobDuration: 5.5 },
  { src: IMAGES[4], top: 7400, left: "4%",  size: 65,  rotation: 55,   depth: "mid", bobDuration: 6.5 },

  // ---- Far (small, blurred) ----
  { src: IMAGES[1], top: 200,  left: "6%",  size: 35,  rotation: 60,   depth: "far", bobDuration: 7 },
  { src: IMAGES[4], top: 700,  left: "95%", size: 30,  rotation: -50,  depth: "far", bobDuration: 8 },
  { src: IMAGES[0], top: 1500, left: "2%",  size: 40,  rotation: 25,   depth: "far", bobDuration: 6 },
  { src: IMAGES[2], top: 2200, left: "89%", size: 28,  rotation: -65,  depth: "far", bobDuration: 7.5 },
  { src: IMAGES[3], top: 3000, left: "4%",  size: 45,  rotation: 70,   depth: "far", bobDuration: 5.5 },
  { src: IMAGES[1], top: 3600, left: "93%", size: 32,  rotation: -40,  depth: "far", bobDuration: 8 },
  { src: IMAGES[0], top: 4200, left: "7%",  size: 38,  rotation: 15,   depth: "far", bobDuration: 6.5 },
  { src: IMAGES[4], top: 5000, left: "90%", size: 25,  rotation: -55,  depth: "far", bobDuration: 7 },
  { src: IMAGES[2], top: 5800, left: "3%",  size: 42,  rotation: 35,   depth: "far", bobDuration: 5 },
  { src: IMAGES[3], top: 6800, left: "94%", size: 30,  rotation: -20,  depth: "far", bobDuration: 7.5 },
  { src: IMAGES[1], top: 7500, left: "5%",  size: 35,  rotation: 45,   depth: "far", bobDuration: 6 },
];

/* ------------------------------------------------------------------ */
/*  Depth styles                                                       */
/* ------------------------------------------------------------------ */

function depthFilter(depth: FloatingItem["depth"]): string {
  switch (depth) {
    case "close":
      return "drop-shadow(0 12px 24px rgba(0,0,0,0.3))";
    case "mid":
      return "drop-shadow(0 8px 16px rgba(0,0,0,0.2))";
    case "far":
      return "blur(1px) drop-shadow(0 4px 8px rgba(0,0,0,0.15))";
  }
}

/* ------------------------------------------------------------------ */
/*  Individual floating element with scroll-driven rotation            */
/* ------------------------------------------------------------------ */

function FloatingImage({ item, index }: { item: FloatingItem; index: number }) {
  const { scrollYProgress } = useScroll();

  // Each element rotates a slightly different amount as the user scrolls
  const scrollRotation = useTransform(
    scrollYProgress,
    [0, 1],
    [0, index % 2 === 0 ? 25 : -25],
  );

  return (
    <motion.img
      src={item.src}
      alt=""
      role="presentation"
      width={item.size}
      height={item.size}
      draggable={false}
      // Bob animation
      animate={{ y: [0, -8, 0] }}
      transition={{
        y: {
          duration: item.bobDuration,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        },
      }}
      // Scroll-driven rotation layered on top
      style={{
        position: "absolute",
        top: item.top,
        left: item.left,
        width: item.size,
        height: item.size,
        objectFit: "contain",
        rotate: scrollRotation,
        filter: depthFilter(item.depth),
        willChange: "transform",
      }}
      initial={{ rotate: item.rotation, opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0 }}
    />
  );
}

/* ------------------------------------------------------------------ */
/*  Container                                                          */
/* ------------------------------------------------------------------ */

export default function FloatingElements() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Respect prefers-reduced-motion
  if (reducedMotion) return null;

  return (
    <div
      className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none overflow-visible"
      style={{ zIndex: 2 }}
      aria-hidden="true"
    >
      {items.map((item, i) => (
        <FloatingImage key={i} item={item} index={i} />
      ))}
    </div>
  );
}
