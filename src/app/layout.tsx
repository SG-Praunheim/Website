import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SG Praunheim",
  description: "Website vom Kegelsportverein SG Praunheim",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head><meta name="google-site-verification" content="Qn3aResZKUbIX6F4n-SZAfoPcK-AEaINi5mMCxSzB20" /></head>      
      <body className={inter.className}>{children}</body>
    </html>
  );
}
