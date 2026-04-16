export interface FAQ {
  question: string;
  answer: string;
  category: "ordering" | "delivery" | "products" | "loyalty" | "legal";
}

export const faqs: FAQ[] = [
  { question: "How do I place an order?", answer: "Visit our shop at toastyca.com, browse our menu, add items to your cart, and check out. You can choose Express delivery for our curated quick picks or browse the Full Menu for our complete selection.", category: "ordering" },
  { question: "What is the minimum order for delivery?", answer: "We require a $50 minimum for all deliveries (calculated after loyalty points or discounts are applied).", category: "ordering" },
  { question: "Where does Toasty deliver?", answer: "We currently deliver throughout Orange County, California. Enter your delivery address on our shop page to confirm we serve your area.", category: "delivery" },
  { question: "How long does delivery take?", answer: "We typically deliver within 1-2 hours of placing your order. Delivery times vary based on demand and your location.", category: "delivery" },
  { question: "What brands do you carry?", answer: "We carry a curated selection of premium California cannabis brands including Lowell, STIIIZY, Dime Industries, West Coast Cure, and many more.", category: "products" },
  { question: "What product types are available?", answer: "We offer Vapes, Concentrates, Flower, Prerolls, Beverages, Edibles, Hardware, and CBD Products.", category: "products" },
  { question: "How does the loyalty program work?", answer: "Earn points with every purchase! Points accumulate automatically and can be applied as discounts on future orders.", category: "loyalty" },
  { question: "Do you have daily deals?", answer: "Yes! We run daily specials and rotating deals. Check our Deals page or follow us on Instagram @toastyca_ for the latest offers.", category: "loyalty" },
  { question: "Do I need to be 21+ to order?", answer: "Yes, you must be 21 years of age or older. Valid government-issued ID is required at the time of delivery.", category: "legal" },
  { question: "Is Toasty a licensed delivery service?", answer: "Yes, Toasty CA is a fully licensed and compliant cannabis delivery service operating under California state and local regulations.", category: "legal" },
];
