import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SG Praunheim",
  description: `Willkommen bei der SG-Praunheim – Dein Kegelclub!

Wir sind ein engagierter Kegelclub, der sportlichen Ehrgeiz und geselliges Miteinander vereint. Bei uns sind alle willkommen, die Spaß am Kegeln haben – egal ob Anfänger, Hobbykegler oder ambitionierte Wettkämpfer.

Unser Training findet jeden Dienstag ab 17 Uhr statt. Dabei kannst du deine Technik verbessern, dich mit anderen Mitgliedern messen und die Freude am Kegelsport erleben. Wir bieten eine entspannte Atmosphäre, in der jeder auf seine Kosten kommt.

Hobbykegler aufgepasst! Du möchtest Kegeln ohne Vereinsbindung? Kein Problem! Unsere Bahnen können auch von Hobbykeglern gemietet werden – ideal für gesellige Abende mit Freunden, Feiern oder einfach, um den Alltag hinter sich zu lassen.

Besuche uns und erlebe die Faszination Kegelsport hautnah!`,
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
