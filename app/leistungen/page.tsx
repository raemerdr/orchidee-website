import { photos, site } from "@/lib/site";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import EnquiryForm from "@/components/EnquiryForm";
import { Costs, ForWhom } from "@/components/Sections";
import FeatureSplit from "@/components/FeatureSplit";
import { ArrowIcon, DuoHomeIcon, DuoNurseIcon, DuoTeamIcon, PhoneIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Leistungen – Behandlungspflege & Grundpflege",
  description: "Ärztlich verordnete Behandlungspflege und Grundpflege zu Hause in Koblenz: Insulin, Wundversorgung, Kompression, Medikamente, Katheter, Sondenernährung.",
};

const behandlung = [
  ["Insulin & Blutzucker", "Insulingabe und Blutzuckerkontrolle nach ärztlicher Verordnung."],
  ["Wundversorgung", "Verbandwechsel und fachgerechte Versorgung chronischer und akuter Wunden."],
  ["Kompression", "An- und Ausziehen von Kompressionsstrümpfen, Anlegen von Kompressionsverbänden."],
  ["Medikamente", "Richten und Verabreichen von Medikamenten, Injektionen."],
  ["Katheter", "Versorgung und Wechsel von Blasenkathetern."],
  ["Sondenernährung", "Versorgung bei Ernährung über eine Magensonde (PEG)."],
];

export default function LeistungenPage() {
  return (
    <>
      <PageHero
        label="Leistungen"
        title="Medizinische Pflege und Hilfe im Alltag – bei Ihnen zu Hause."
        lead="Unsere Pflegefachkräfte übernehmen, was Ihr Arzt verordnet hat, und helfen bei der täglichen Grundpflege. So können Sie zu Hause bleiben."
        image={photos.leistungen}
        imageAlt="Pflegefachkraft hält die Hand eines älteren Mannes auf seinem Sofa"
        imagePosition="60% 40%"
        imagePositionMobile="55% 35%"
        tags={["Behandlungspflege", "Grundpflege", "Beratung", "Koblenz & Umgebung"]}
      />

      <FeatureSplit
        label="01 · Behandlungspflege"
        title="Was Ihr Arzt verordnet hat."
        lead="Unsere examinierten Pflegefachkräfte übernehmen die medizinische Versorgung zu Hause – fachgerecht und zuverlässig."
        image={photos.behandlungspflege}
        imageAlt="Pflegefachkraft bei der Behandlungspflege"
        badge={<><small>Kosten</small><strong>Übernimmt in der Regel die Krankenkasse</strong></>}
      >
        <ol className="feature-grid">
          {behandlung.map(([t, d], i) => (
            <li key={t}>
              <span className="feature-num">{String(i + 1).padStart(2, "0")}</span>
              <h3>{t}</h3>
              <p>{d}</p>
            </li>
          ))}
        </ol>
      </FeatureSplit>

      <FeatureSplit
        reverse
        label="02 · Grundpflege"
        title="Hilfe beim Waschen und Anziehen."
        lead="Mit Ruhe und Respekt unterstützen wir bei der Körperpflege, beim Anziehen und bei der Mobilität im Alltag."
        image={photos.grundpflege}
        imageAlt="Pflegefachkraft hilft einer älteren Dame im Alltag"
        badge={<><small>Kosten</small><strong>Mit Pflegegrad beteiligt sich die Pflegekasse</strong></>}
      >
        <ul className="feature-rows">
          <li><span className="fit-ic"><DuoNurseIcon /></span><div><strong>Waschen, Duschen, Körperpflege</strong><span>In Ihrem eigenen Bad, in Ihrem Tempo.</span></div></li>
          <li><span className="fit-ic"><DuoTeamIcon /></span><div><strong>An- und Auskleiden</strong><span>Morgens und abends, wie es zu Ihrem Tag passt.</span></div></li>
          <li><span className="fit-ic"><DuoHomeIcon /></span><div><strong>Hilfe beim Aufstehen und Gehen</strong><span>Damit Sie sich zu Hause sicher bewegen.</span></div></li>
        </ul>
      </FeatureSplit>

      <FeatureSplit
        label="03 · Beratung"
        title="Wir klären die Kosten mit Ihnen."
        lead="Wir erklären, was Kranken- und Pflegekasse übernehmen, und helfen bei Anträgen und Formalitäten."
        image={photos.beratung}
        imageAlt="Beratungsgespräch zu Hause"
        badge={<><small>Beratung</small><strong>Kostenlos &amp; unverbindlich</strong></>}
      >
        <ol className="mini-steps">
          <li><b>1</b><div><strong>Sie rufen an</strong><span>oder fordern einen Rückruf an.</span></div></li>
          <li><b>2</b><div><strong>Wir klären die Kosten</strong><span>mit Kranken- und Pflegekasse.</span></div></li>
          <li><b>3</b><div><strong>Wir helfen bei Anträgen</strong><span>damit die Pflege starten kann.</span></div></li>
        </ol>
        <div className="feature-ctas">
          <a className="btn btn-primary" href="#anfrage">Rückruf anfordern <ArrowIcon /></a>
          <a className="btn btn-outline" href={site.phoneHref}><PhoneIcon /> {site.phone}</a>
        </div>
      </FeatureSplit>

      <ForWhom />
      <Costs />
      <EnquiryForm />
    </>
  );
}
