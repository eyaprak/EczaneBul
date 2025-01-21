import type { Metadata } from "next";
import { Inter, Lexend } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AppDataProvider from "./providers";

import "./globals.css";

const lexend = Lexend({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lexend",
});

const inter = Inter({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "EczaneBul - Nöbetçi Eczene Bulma Uygulaması",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lexend.variable} ${inter.variable}  antialiased`}>
        <AppDataProvider>
          <Header />
          {children}
          <Footer />
        </AppDataProvider>
      </body>
    </html>
  );
}
