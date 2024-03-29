import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// TODO: add metadata
export const metadata: Metadata = {
  title: "Analytics Dashboard",
  description: "..",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark bg-[#020817]`}>{children}</body>
    </html>
  );
}
