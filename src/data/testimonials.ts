export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  title: string;
  text: string;
}

export const testimonials: Testimonial[] = [
  { id: "1", name: "Mike R.", rating: 5, title: "Best delivery in OC", text: "Toasty is hands down the best cannabis delivery service in Orange County. Fast, reliable, and the drivers are always super chill. Love the product selection too!" },
  { id: "2", name: "Sarah K.", rating: 5, title: "Always on time", text: "I've tried other delivery services but Toasty is on another level. They always arrive within the window they give and the product quality is consistently top-notch." },
  { id: "3", name: "Chris L.", rating: 5, title: "Great deals, great vibes", text: "The daily deals are amazing and the loyalty program really adds up. Plus the whole experience from ordering to delivery just feels fun and professional. Stay Toasty!" },
  { id: "4", name: "Jessica M.", rating: 5, title: "My go-to delivery", text: "Been using Toasty for months now. The convenience is unbeatable and they always have the brands I love in stock. The STIIIZY selection is especially fire." },
  { id: "5", name: "Alex T.", rating: 5, title: "Smooth and discreet", text: "Really appreciate how discreet and professional the delivery is. Great communication throughout the process and the products always arrive in perfect condition." },
  { id: "6", name: "Dan P.", rating: 5, title: "Loyalty points are clutch", text: "The loyalty rewards program is what keeps me coming back. Stack those points up and the savings are real. Plus their Sunday deals are unmatched." },
];
