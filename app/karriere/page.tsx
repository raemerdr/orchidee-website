import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ApplicationForm from "@/components/ApplicationForm";
import { CheckList, SectionHead } from "@/components/Sections";
import { photos, site } from "@/lib/site";
import { CareIcon, PhoneIcon, TeamIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Karriere – Pflegefachkraft & Pflegedienstleitung (m/w/d)",
  description: "Jobs beim Pflegedienst Orchidee in Koblenz: examinierte Pflegefachkraft (m/w/d) und Pflegedienstleitung (m/w/d). Bewerbung in zwei Minuten.",
};

const roles = [
  {
    id: "pdl",
    Icon: TeamIcon,
    title: "Pflegedienstleitung (m/w/d)",
    chips: ["Vollzeit", "Leitung", "Koblenz"],
    summary: "Sie führen unser kleines, festes Pflegeteam und sorgen für eine verlässliche Versorgung unserer Patientinnen und Patienten.",
    needs: ["Abgeschlossene Weiterbildung zur Pflegedienstleitung", "Erfahrung in der Leitung eines Pflegeteams"],
  },
  {
    id: "pflegefachkraft",
    Icon: CareIcon,
    title: "Pflegefachkraft (m/w/d)",
    chips: ["Examen", "Führerschein B", "Koblenz und Umgebung"],
    summary: "Sie versorgen unsere Patientinnen und Patienten zu Hause – mit Behandlungspflege und Grundpflege auf festen Touren.",
    needs: ["Abgeschlossene 3-jährige Ausbildung mit Examen", "Führerschein Klasse B – für die Touren in Koblenz und Umgebung"],
    not: "Diese Stelle ist nicht für Pflegehelfer:innen mit 1-jähriger Ausbildung und nicht für Quereinsteiger:innen.",
  },
];

export default function KarrierePage() {
  return (
    <>
      <PageHero
        label="Karriere"
        title="Pflegen Sie mit uns in Koblenz"
        lead="Wir suchen examinierte Pflegefachkräfte und eine Pflegedienstleitung für unser kleines, festes Team. Bewerbung in zwei Minuten – ohne Anschreiben."
        image={photos.career}
        imagePosition="62% 30%"
        cta="apply"
      />

      <section className="section" id="stellen">
        <div className="wrap">
          <SectionHead eyebrow="Offene Stellen" title="Zwei Stellen, ein Team" text="Bewerbung in zwei Minuten – ohne Anschreiben. Wir rufen Sie zurück." />
          <div className="roles">
            {roles.map(({ id, Icon, title, chips, summary, needs, not }) => (
              <article className="role" id={id} key={id}>
                <div className="role-top">
                  <span className="promise-ic"><Icon size={26} /></span>
                  <ul className="chips">{chips.map((c) => <li key={c}>{c}</li>)}</ul>
                </div>
                <h3>{title}</h3>
                <p>{summary}</p>
                <h4>Das bringen Sie mit</h4>
                <CheckList items={needs.map((n) => [n] as [string])} />
                {not && <p className="note-muted">{not}</p>}
                <div className="role-foot">
                  <a className="btn btn-primary" href="#bewerbung">Jetzt bewerben</a>
                  <a className="link-arrow" href={site.phoneHref}><PhoneIcon /> Fragen? {site.phone}</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-cream">
        <div className="wrap split apply">
          <div className="split-copy">
            <p className="eyebrow">Bewerbung</p>
            <h2>Kurz bewerben, wir rufen an</h2>
            <p className="lead">Füllen Sie das Formular aus – wir melden uns telefonisch bei Ihnen. Fragen vorab? Rufen Sie uns an.</p>
            <a className="btn btn-outline" href={site.phoneHref}><PhoneIcon /> {site.phone}</a>
          </div>
          <ApplicationForm />
        </div>
      </section>
    </>
  );
}
