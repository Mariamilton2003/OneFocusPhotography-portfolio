import type { Metadata } from "next";
import localFont from 'next/font/local';
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const libre_bodoni = localFont({
  src: [
    {
      path: '../public/fonts/libre-bodoni/Libre-Bodoni-master/fonts/TTF/LibreBodoni-Regular.ttf',
      weight: '400'
    },
    {
      path: '../public/fonts/libre-bodoni/Libre-Bodoni-master/fonts/TTF/LibreBodoni-Italic.ttf',
      weight: '400',
      style: 'italic'
    },
    {
      path: '../public/fonts/libre-bodoni/Libre-Bodoni-master/fonts/TTF/LibreBodoni-Bold.ttf',
      weight: '700'
    },
    {
      path: '../public/fonts/libre-bodoni/Libre-Bodoni-master/fonts/TTF/LibreBodoni-BoldItalic.ttf',
      weight: '700',
      style: 'italic'
    }
  ],
  variable: '--font-libre-bodoni'
});
const sourceSansPro = localFont({
  src: [
    {
      path: '../public/fonts/source-sans-pro/SourceSansPro-Regular.ttf',
      weight: '400'
    },
    {
      path: '../public/fonts/source-sans-pro/SourceSansPro-Italic.ttf',
      weight: '400',
      style: 'italic'
    },
    {
      path: '../public/fonts/source-sans-pro/SourceSansPro-Bold.ttf',
      weight: '700'
    },
    {
      path: '../public/fonts/source-sans-pro/SourceSansPro-BoldItalic.ttf',
      weight: '700',
      style: 'italic'
    },
    {
      path: '../public/fonts/source-sans-pro/SourceSansPro-SemiBold.ttf',
      weight: '600'
    }
  ],
  variable: '--font-source-sans-pro'
});

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