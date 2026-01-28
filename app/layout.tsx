import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css"; // ✔ relative to layout.tsx
import Navbar from "./components/Navbar";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sneha | Web Developer & SEO Freelancer",
  description: "I build fast, SEO optimized websites for businesses worldwide",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`antialiased ${geistSans.variable} ${geistMono.variable}`}>
        <Navbar/>
        <main className="max-w-6xl mx-auto px-4">
          {children}
        </main>
      </body>
    </html>
  );
}
