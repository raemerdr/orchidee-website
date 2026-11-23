import type { Metadata } from "next";
import { Lexend, Nunito_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

// Headings: Lexend – made for easy reading. Body: Nunito Sans – warm and open.
const heading = Lexend({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-head", display: "swap" });
const body = Nunito_Sans({ subsets: ["latin"], weight: ["400", "600", "700"], variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
  title: { default: "Ambulante Pflege in Koblenz | Pflegedienst Orchidee", template: "%s | Pflegedienst Orchidee Koblenz" },
  description:
    "Ärztlich verordnete Behandlungspflege und Grundpflege zu Hause in Koblenz. Rufen Sie an oder fordern Sie einen Rückruf an.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${heading.variable} ${body.variable}`}>
      <body>
        <Header />
        <main id="top">{children}</main>
        <Footer />
        <Reveal />
      </body>
    </html>
  );
}
