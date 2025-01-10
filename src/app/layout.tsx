import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./(shared)/Navbar";
import Footer from "./(shared)/Footer";
import MobileNav from "./(shared)/MobileNav";
import { inter } from "@/util/font";



export const metadata: Metadata = {
  title: "deel.",
  description: "HR platform for auto job applications",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <MobileNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
