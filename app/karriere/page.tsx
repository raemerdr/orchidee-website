import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ApplicationForm from "@/components/ApplicationForm";
import { photos, site } from "@/lib/site";
import { ArrowIcon, DuoNurseIcon, DuoTeamIcon, PhoneIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Karriere – Pflegefachkraft & Pflegedienstleitung (m/w/d)",
  description: "Jobs beim Pflegedienst Orchidee in Koblenz: examinierte Pflegefachkraft (m/w/d) und Pflegedienstleitung (m/w/d). Bewerbung in zwei Minuten.",
};

const roles = [
  {
    id: "pdl",
    title: "Pflegedienstleitung (m/w/d)",
    meta: "Vollzeit · Koblenz",
    chips: ["Vollzeit", "Leitung", "Koblenz"],
    summary: "Sie führen unser kleines, festes Pflegeteam und sorgen für eine verlässliche Versorgung unserer Patientinnen und Patienten.",
    needs: [
      "Abgeschlossene Weiterbildung zur Pflegedienstleitung",
      "Erfahrung in der Leitung eines Pflegeteams",
    ],
  },
  {
    id: "pflegefachkraft",
    title: "Pflegefachkraft (m/w/d)",
    meta: "Koblenz und Umgebung",
    chips: ["Examen", "Führerschein B", "Koblenz & Umgebung"],
    summary: "Sie versorgen unsere Patientinnen und Patienten zu Hause – mit Behandlungspflege und Grundpflege auf festen Touren.",
    needs: [
      "Abgeschlossene 3-jährige Ausbildung mit Examen",
      "Führerschein Klasse B – für die Touren in Koblenz und Umgebung",
    ],
    not: "Diese Stelle ist nicht für Pflegehelfer:innen mit 1-jähriger Ausbildung und nicht für Quereinsteiger:innen.",
  },
];

export default function KarrierePage() {
  return (
    <>
      <PageHero
        label="Karriere"
        title="Pflegen Sie mit uns in Koblenz."
        lead="Wir suchen examinierte Pflegefachkräfte und eine Pflegedienstleitung für unser kleines, festes Team. Bewerbung in zwei Minuten – ohne Anschreiben."
        image={photos.career}
        imageAlt="Pflegefachkräfte im Team"
        imagePosition="75% 30%"
        imagePositionMobile="72% 25%"
        cta="apply"
        tags={["Pflegedienstleitung (m/w/d)", "Pflegefachkraft (m/w/d)", "Koblenz & Umgebung"]}
      />

      <section className="section-tight" id="stellen">
        <div className="wrap">
          <div className="row-head">
            <div>
              <span className="label">Offene Stellen</span>
              <h2>Zwei Stellen, ein Team.</h2>
            </div>
            <p className="lead roles-lead">Bewerbung in zwei Minuten – ohne Anschreiben. Wir rufen Sie zurück.</p>
          </div>
          <div className="roles">
            {roles.map((r, i) => {
              const Icon = i === 0 ? DuoTeamIcon : DuoNurseIcon;
              return (
                <article className="job" id={r.id} key={r.id}>
                  <div className="role-top">
                    <span className="fit-ic"><Icon /></span>
                    <div className="role-chips">{r.chips.map((c) => <span key={c}>{c}</span>)}</div>
                  </div>
                  <h3>{r.title}</h3>
                  <p className="role-sum">{r.summary}</p>
                  <h4>Das bringen Sie mit</h4>
                  <ul className="check-list">{r.needs.map((n) => <li key={n}>{n}</li>)}</ul>
                  {r.not && <p className="role-not">{r.not}</p>}
                  <div className="role-foot">
                    <a className="btn btn-primary" href="#bewerbung">Jetzt bewerben <ArrowIcon /></a>
                    <a className="role-phone" href={site.phoneHref}><PhoneIcon /> Fragen? {site.phone}</a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="wrap contact">
          <div>
            <span className="label">Bewerbung</span>
            <h2>Kurz bewerben, wir rufen an.</h2>
            <p className="lead">Füllen Sie das Formular aus – wir melden uns telefonisch bei Ihnen. Fragen vorab? Rufen Sie uns an.</p>
            <div className="call-box">
              <small>Telefon</small>
              <a className="big" href={site.phoneHref}>{site.phone}</a>
              <small>{site.company} · {site.street} · {site.city}</small>
            </div>
          </div>
          <ApplicationForm />
        </div>
      </section>
    </>
  );
}
