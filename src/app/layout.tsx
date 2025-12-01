

import type { Metadata } from "next";


import "./globals.css";



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
    
        <main className="min-h-screen">
          {children}
        </main>
      
      </body>
    </html>
  );
}
