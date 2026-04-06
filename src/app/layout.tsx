import "./globals.css";

import { Geist, Geist_Mono } from "next/font/google";

import { Footer } from "@/components/layout/Footer";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ebubekir Yilmaz | Developer Portfolio",
  description:
    "Performance-focused developer portfolio featuring projects, technical case studies, and engineering experience.",
  metadataBase: new URL("https://your-portfolio-url.com"),
  openGraph: {
    title: "Ebubekir Yilmaz | Developer Portfolio",
    description:
      "Explore projects, experience, and technical case studies built with a performance-first mindset.",
    url: "https://your-portfolio-url.com",
    siteName: "Ebubekir Yilmaz Portfolio",
    locale: "en_US",
    type: "website",
    images: ["/preview-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ebubekir Yilmaz | Developer Portfolio",
    description:
      "Projects, experience, and performance-focused engineering work.",
    images: ["/preview-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
