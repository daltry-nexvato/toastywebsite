import type { Metadata } from "next";
import "./globals.css";
import AgeGate from "@/components/shared/AgeGate";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "Toasty CA — Fast. Fresh. Green. | Cannabis Delivery Orange County",
    template: "%s | Toasty CA",
  },
  description:
    "Premium cannabis delivery in Orange County, California. Fast, discreet, and reliable. Shop top brands like STIIIZY, Lowell, Dime, and West Coast Cure.",
  metadataBase: new URL("https://www.shoptoastyca.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="icon" type="image/svg+xml" href="/images/logo/toasty-favicon.svg" />
      </head>
      <body className="min-h-full flex flex-col">
        <AgeGate />
        <AnnouncementBar />
        <Header />
        <main className="flex-1" style={{ marginTop: "var(--announcement-height, 0px)" }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
