export const SITE = {
  name: "Toasty CA",
  tagline: "Fast. Fresh. Green.",
  subtitle: "Beyond Buds: Your Elevated Delivery Experience!",
  description:
    "Toasty CA is your laidback local crew bringing the best of natural medicine right to your door — smooth, discreet, and reliable, with a dose of fun and professionalism to keep things chill.",
  url: "https://www.shoptoastyca.com",
  shopUrl: "https://www.toastyca.com",
  shopUrlExpress:
    "https://www.toastyca.com/#/?express=true&orderType=Delivery",
  deliveryMinimum: 50,
  phone: "",
  email: "",
  location: "Orange County, California",
} as const;

export const SOCIAL = {
  instagram: {
    url: "https://www.instagram.com/toastyca_/",
    handle: "@toastyca_",
  },
  twitter: {
    url: "https://x.com/ToastyCA",
    handle: "@ToastyCA",
  },
} as const;

export const NAV_ITEMS = [
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Delivery", href: "/delivery" },
  { label: "Deals", href: "/deals" },
  { label: "FAQ", href: "/faq" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const SHOP_CATEGORIES = {
  vapes: `${SITE.shopUrl}/#/?express=true&orderType=Delivery&category=Vapes`,
  concentrates: `${SITE.shopUrl}/#/?express=true&orderType=Delivery&category=Concentrates`,
  flower: `${SITE.shopUrl}/#/?express=true&orderType=Delivery&category=Flower`,
  prerolls: `${SITE.shopUrl}/#/?express=true&orderType=Delivery&category=Prerolls`,
  beverages: `${SITE.shopUrl}/#/?express=true&orderType=Delivery&category=Beverages`,
  edibles: `${SITE.shopUrl}/#/?express=true&orderType=Delivery&category=Edibles`,
  hardware: `${SITE.shopUrl}/#/?express=true&orderType=Delivery&category=Hardware`,
  cbd: `${SITE.shopUrl}/#/?express=true&orderType=Delivery&category=CBD+Products`,
} as const;
