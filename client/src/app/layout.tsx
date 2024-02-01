import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from 'next/head'
// esse arquivo contém o css do layout padrão do next.js
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Movie ticket",
  description: "Select a movie and buy a ticket!", 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
