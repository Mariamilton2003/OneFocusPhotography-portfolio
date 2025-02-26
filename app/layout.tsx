import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { libre_bodoni, sourceSansPro } from "./fonts";

export const metadata: Metadata = {
  title: "One Focus Photography | Capturing Moments, Creating Memories",
  description: "Professional photography services by One Focus Photography. Specializing in portraits, weddings, landscapes, and event photography. Book your session today!",
  keywords: "photography, professional photographer, wedding photography, portrait photography, event photography, landscape photography, One Focus Photography",
  icons: {
    icon: '/logo.svg',
    shortcut: '/logo.svg',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: "One Focus Photography | Capturing Moments, Creating Memories",
    description: "High-quality photography services specializing in weddings, portraits, landscapes, and events. Discover the beauty of storytelling through our lens.",
    url: "https://onefocusphotography.co.in",
    type: "website",
    images: [
      {
        url: "https://www.onefocusphotography.com/cover.jpg",
        width: 1200,
        height: 630,
        alt: "One Focus Photography Portfolio Cover",
      },
    ],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${sourceSansPro.variable} ${libre_bodoni.variable} antialiased min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}