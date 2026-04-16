export interface Brand {
  id: string;
  name: string;
  logo: string;
  shopUrl: string;
}

export const brands: Brand[] = [
  { id: "lowell", name: "Lowell", logo: "/images/brands/lowell.webp", shopUrl: "https://www.toastyca.com/#/?express=true&orderType=Delivery" },
  { id: "stiiizy", name: "STIIIZY", logo: "/images/brands/stiiizy.webp", shopUrl: "https://www.toastyca.com/#/?express=true&orderType=Delivery" },
  { id: "dime", name: "Dime Industries", logo: "/images/brands/dime.webp", shopUrl: "https://www.toastyca.com/#/?express=true&orderType=Delivery" },
  { id: "west-coast-cure", name: "West Coast Cure", logo: "/images/brands/west-coast-cure.webp", shopUrl: "https://www.toastyca.com/#/?express=true&orderType=Delivery" },
];
