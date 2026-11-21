import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import EnquiryForm from "@/components/EnquiryForm";
import { photos, site } from "@/lib/site";

export const metadata: Metadata = { title: "Datenschutz", robots: { index: false } };

// TODO: final text must come from the client / their data protection officer.
// It has to cover HubSpot (forms, CRM), call tracking, Meta pixel and analytics once those are set up.
export default function DatenschutzPage() {
  return (
    <>
      <PageHero label="Rechtliches" title="Datenschutzerklärung" image={photos.beratung} cta="none" />
      <section className="section-tight">
        <div className="wrap">
          <div className="prose">
            <h2>Verantwortliche Stelle</h2>
            <p>{site.company}<br />{site.street}<br />{site.city}<br />E-Mail: <a href={`mailto:${site.email}`}>{site.email}</a></p>
            <h2>Kontakt- und Bewerbungsformulare</h2>
            <p>[TODO: Verarbeitung der Formulardaten, Speicherung in HubSpot, Speicherdauer]</p>
            <h2>Tracking und Analyse</h2>
            <p>[TODO: Analytics, Meta-Pixel, Anruf-Tracking, Cookie-Einwilligung]</p>
            <h2>Ihre Rechte</h2>
            <p>[TODO: Auskunft, Berichtigung, Löschung, Widerspruch, Beschwerderecht]</p>
          </div>
        </div>
      </section>
      <EnquiryForm />
    </>
  );
}
