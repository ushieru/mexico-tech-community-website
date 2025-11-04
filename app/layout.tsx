import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MX Tech Community",
  description: "Discover and connect with tech communities in México",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
