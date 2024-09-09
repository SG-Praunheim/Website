import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SG Praunheim",
  description: "Website vom Kegelsportverein SG Praunheim",
  keywords: "Kegeln, Praunheim, SG Praunheim, Alt-Praunheim, Kegelclub, Kegeln Frankfurt, Kegeln Praunheim, Kegelbahn, Gut Holz, Alle Neun, KV Praunheim, GK Praunheim ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="Qn3aResZKUbIX6F4n-SZAfoPcK-AEaINi5mMCxSzB20" />
        <meta property="business:hours:day" content="TUESDAY" />
        <meta property="business:hours:start" content="17:00" />
        <meta property="business:hours:end" content="22:00" />
        <meta property="business:contact_data:country_name" content="Deutschland" />
        <meta property="business:contact_data:street_address" content="Alt-Praunheim 44" />
        <meta property="business:contact_data:locality" content="Frankfurt am Main" />
        {/* <meta property="business:contact_data:region" content="300"/> */}
        {/* <meta property="business:contact_data:email" content="thomas.franz@utas.utc.com"/> */}
        <meta property="business:contact_data:postal_code" content="60488" />
        {/* <meta property="business:contact_data:phone_number" content=" +49 179 7390897"/> */}
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
