import type { Metadata } from "next";
import "./globals.css";
import { inter } from "@/util/font";

export const metadata: Metadata = {
  title: "deel.",
  description: "HR platform for auto job applications",
  openGraph: {
    images: [
      "https://01yv5oa93e.ufs.sh/f/h8c8KUvkS3OswPhgRdg9BpKi49DtAd0j6gf2bLVozUxGn8XZ",
    ],
  },
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
