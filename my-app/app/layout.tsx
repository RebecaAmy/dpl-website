import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DPLBarcelona",
  description: "Centro de Logopedia ",
  openGraph: {
    images: [
      {
        url: '/DPL-logo-black.svg',
        width: 1200,
        height: 630,
        alt: 'DPL Barcelona Image',
      },
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
