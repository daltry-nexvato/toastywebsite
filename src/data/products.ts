export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  description: string;
  image: string;
  shopUrl: string;
  badge?: "new" | "popular" | "sale";
}

export const products: Product[] = [
  {
    id: "lowell-35s-stargazer",
    name: "35's Stargazer Pre-Rolls",
    brand: "Lowell",
    category: "Prerolls",
    description: "10 tall pre-rolls, 3.5g net weight. Explore the cosmos with this premium indica blend.",
    image: "/images/products/lowell-35s.webp",
    shopUrl: "https://www.toastyca.com/#/?express=true&orderType=Delivery",
    badge: "popular",
  },
  {
    id: "stiiizy-blue-raspberry",
    name: "Blue Raspberry Blast Gummies",
    brand: "STIIIZY",
    category: "Edibles",
    description: "Nano-enhanced cannabis-infused gummies. 100mg THC, made with live resin.",
    image: "/images/products/stiiizy-gummies.webp",
    shopUrl: "https://www.toastyca.com/#/?express=true&orderType=Delivery",
    badge: "new",
  },
  {
    id: "dime-cantaloupe-dream",
    name: "Cantaloupe Dream All-In-One",
    brand: "Dime",
    category: "Vapes",
    description: "Signature series sativa disposable. Smooth cantaloupe flavor with uplifting effects.",
    image: "/images/products/dime-cantaloupe.webp",
    shopUrl: "https://www.toastyca.com/#/?express=true&orderType=Delivery",
  },
  {
    id: "wcc-blueberry-haze",
    name: "Blueberry Haze Premium Flower",
    brand: "West Coast Cure",
    category: "Flower",
    description: "Hand-trimmed premium indoor flower. Dense buds with a sweet blueberry aroma.",
    image: "/images/products/wcc-blueberry.webp",
    shopUrl: "https://www.toastyca.com/#/?express=true&orderType=Delivery",
    badge: "popular",
  },
  {
    id: "stiiizy-og-pod",
    name: "OG Kush Pod",
    brand: "STIIIZY",
    category: "Vapes",
    description: "Classic OG Kush in STIIIZY's proprietary pod system. Rich earthy flavor.",
    image: "/images/products/stiiizy-og-pod.webp",
    shopUrl: "https://www.toastyca.com/#/?express=true&orderType=Delivery",
  },
  {
    id: "lowell-quicks-sativa",
    name: "Quicks Sativa Pack",
    brand: "Lowell",
    category: "Prerolls",
    description: "Perfectly portioned mini pre-rolls. Quick, convenient, and always quality.",
    image: "/images/products/lowell-quicks.webp",
    shopUrl: "https://www.toastyca.com/#/?express=true&orderType=Delivery",
  },
  {
    id: "dime-mango-og",
    name: "Mango OG Disposable",
    brand: "Dime",
    category: "Vapes",
    description: "Indica-dominant disposable with tropical mango terpenes. Relax and unwind.",
    image: "/images/products/dime-mango.webp",
    shopUrl: "https://www.toastyca.com/#/?express=true&orderType=Delivery",
    badge: "sale",
  },
  {
    id: "wcc-budder-concentrate",
    name: "Live Resin Budder",
    brand: "West Coast Cure",
    category: "Concentrates",
    description: "Fresh-frozen live resin budder with full terpene profile.",
    image: "/images/products/wcc-budder.webp",
    shopUrl: "https://www.toastyca.com/#/?express=true&orderType=Delivery",
  },
];
