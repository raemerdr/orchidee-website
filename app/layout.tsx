import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CallbackModal from "@/components/CallbackModal";
import Reveal from "@/components/Reveal";

const body = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const display = Inter_Tight({ subsets: ["latin"], weight: ["300", "600", "700"], variable: "--font-display", display: "swap" });

export const metadata: Metadata = {
  title: { default: "Ambulante Pflege in Koblenz | Pflegedienst Orchidee", template: "%s | Pflegedienst Orchidee Koblenz" },
  description:
    "Ärztlich verordnete Behandlungspflege und Grundpflege zu Hause in Koblenz. Rufen Sie an oder fordern Sie einen Rückruf an.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${body.variable} ${display.variable}`}>
      <body>
        <Header />
        <main id="top">{children}</main>
        <Footer />
        <CallbackModal />
        <Reveal />
      </body>
    </html>
  );
}
