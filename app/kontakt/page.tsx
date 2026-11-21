import type { Metadata } from "next";
import EnquiryForm from "@/components/EnquiryForm";
import { Faq } from "@/components/Sections";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontakt & Anfrage",
  description: `Rufen Sie an (${site.phone}) oder fordern Sie einen Rückruf an. Pflegedienst Orchidee, ${site.street}, ${site.city}.`,
};

export default function KontaktPage() {
  return (
    <>
      <EnquiryForm hero />
      <section className="section-tight">
        <div className="wrap">
          <div className="detail-grid three">
            <div className="detail-card"><h3>Adresse</h3><p>{site.company}<br />{site.street}<br />{site.city}</p></div>
            <div className="detail-card"><h3>Telefon & E-Mail</h3><p><a href={site.phoneHref}>{site.phone}</a><br /><a href={`mailto:${site.email}`}>{site.email}</a></p></div>
            <div className="detail-card"><h3>Erreichbarkeit</h3><p>[TODO: Bürozeiten vom Kunden]</p></div>
          </div>
        </div>
      </section>
      <Faq />
    </>
  );
}
