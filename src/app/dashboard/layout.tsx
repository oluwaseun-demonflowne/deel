import Header from "@/components/Dashboard/Header";
import { inter } from "@/util/font";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={inter.className}>
      <Header />
      {children}
    </div>
  );
}
