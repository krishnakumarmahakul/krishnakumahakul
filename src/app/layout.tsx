

import type { Metadata } from "next";


import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";



export const metadata: Metadata = {
  title: "Krishna - Portfolio",
  description: "Full Stack Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body >
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      
      </body>
    </html>
  );
}
