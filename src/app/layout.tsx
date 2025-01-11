import type { Metadata } from "next";
import "./globals.css";
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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
