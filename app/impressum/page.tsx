import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import EnquiryForm from "@/components/EnquiryForm";
import { photos, site } from "@/lib/site";

export const metadata: Metadata = { title: "Impressum", robots: { index: false } };

// TODO: copy the legal details from the client's current Impressum before launch.
export default function ImpressumPage() {
  return (
    <>
      <PageHero label="Rechtliches" title="Impressum" image={photos.beratung} cta="none" />
      <section className="section-tight">
        <div className="wrap">
          <div className="prose">
            <h2>Angaben gemäß § 5 DDG</h2>
            <p>{site.company}<br />{site.street}<br />{site.city}</p>
            <h2>Kontakt</h2>
            <p>Telefon: {site.phone}<br />E-Mail: <a href={`mailto:${site.email}`}>{site.email}</a></p>
            <h2>Vertreten durch</h2>
            <p>[TODO: Geschäftsführung]</p>
            <h2>Registereintrag</h2>
            <p>[TODO: Registergericht, HRB-Nummer]</p>
            <h2>Umsatzsteuer-ID</h2>
            <p>[TODO]</p>
            <h2>Aufsichtsbehörde / Zulassung</h2>
            <p>[TODO: zuständige Stellen laut aktuellem Impressum]</p>
          </div>
        </div>
      </section>
      <EnquiryForm />
    </>
  );
}
