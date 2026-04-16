import { SHOP_CATEGORIES } from "@/lib/constants";

export interface Category {
  id: string;
  name: string;
  image: string;
  shopUrl: string;
  color: string;
}

export const categories: Category[] = [
  { id: "vapes", name: "Vapes", image: "/images/categories/vapes.webp", shopUrl: SHOP_CATEGORIES.vapes, color: "#3ECDC6" },
  { id: "concentrates", name: "Concentrates", image: "/images/categories/concentrates.webp", shopUrl: SHOP_CATEGORIES.concentrates, color: "#E8953A" },
  { id: "flower", name: "Flower", image: "/images/categories/flower.webp", shopUrl: SHOP_CATEGORIES.flower, color: "#6FE3DD" },
  { id: "prerolls", name: "Prerolls", image: "/images/categories/prerolls.webp", shopUrl: SHOP_CATEGORIES.prerolls, color: "#F2B06B" },
  { id: "beverages", name: "Beverages", image: "/images/categories/beverages.webp", shopUrl: SHOP_CATEGORIES.beverages, color: "#2BA8A2" },
  { id: "edibles", name: "Edibles", image: "/images/categories/edibles.webp", shopUrl: SHOP_CATEGORIES.edibles, color: "#E8953A" },
  { id: "hardware", name: "Hardware", image: "/images/categories/hardware.webp", shopUrl: SHOP_CATEGORIES.hardware, color: "#6B6B6B" },
  { id: "cbd", name: "CBD Products", image: "/images/categories/cbd.webp", shopUrl: SHOP_CATEGORIES.cbd, color: "#3ECDC6" },
];
