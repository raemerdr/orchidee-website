import type { Metadata } from "next";
import Link from "next/link";
import { photos, site } from "@/lib/site";
import PageHero from "@/components/PageHero";
import FeatureSplit from "@/components/FeatureSplit";
import { CheckList, ContactCta, Costs, ForWhom } from "@/components/Sections";
import { PhoneIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Leistungen – Behandlungspflege & Grundpflege",
  description: "Ärztlich verordnete Behandlungspflege und Grundpflege zu Hause in Koblenz: Insulin, Wundversorgung, Kompression, Medikamente, Katheter, Sondenernährung.",
};

const behandlung = [
  ["Insulin und Blutzucker", "Insulingabe und Blutzuckerkontrolle nach ärztlicher Verordnung."],
  ["Wundversorgung", "Verbandwechsel und Versorgung chronischer und akuter Wunden."],
  ["Kompression", "Kompressionsstrümpfe an- und ausziehen, Kompressionsverbände anlegen."],
  ["Medikamente", "Medikamente richten und geben, Injektionen."],
  ["Katheter", "Versorgung und Wechsel von Blasenkathetern."],
  ["Sondenernährung", "Versorgung bei Ernährung über eine Magensonde (PEG)."],
];

export default function LeistungenPage() {
  return (
    <>
      <PageHero
        label="Leistungen"
        title="Medizinische Pflege und Hilfe im Alltag"
        lead="Unsere Pflegefachkräfte übernehmen, was Ihr Arzt verordnet hat, und helfen bei der täglichen Körperpflege. So können Sie zu Hause bleiben."
        image={photos.leistungen}
        imagePosition="62% 40%"
      />

      <FeatureSplit
        id="behandlungspflege"
        eyebrow="Behandlungspflege"
        title="Medizinische Pflege"
        sub="Behandlungspflege: alles, was Ihr Arzt verordnet hat – fachgerecht und zuverlässig."
        image={photos.behandlungspflege}
        imageAlt="Pflegefachkraft bei der Behandlungspflege"
        box={<><span>Wer bezahlt?</span><strong>In der Regel die Krankenkasse</strong></>}
      >
        <ul className="item-grid">
          {behandlung.map(([t, d]) => <li key={t}><strong>{t}</strong><span>{d}</span></li>)}
        </ul>
      </FeatureSplit>

      <FeatureSplit
        id="grundpflege"
        reverse
        grey
        eyebrow="Grundpflege"
        title="Hilfe im Alltag"
        sub="Grundpflege: Hilfe beim Waschen und Anziehen – in Ruhe, mit Respekt und in Ihrem Tempo."
        image={photos.grundpflege}
        imageAlt="Pflegefachkraft hilft einer älteren Dame im Alltag"
        box={<><span>Wer bezahlt?</span><strong>Mit Pflegegrad zahlt die Pflegekasse dazu</strong></>}
      >
        <CheckList items={[
          ["Waschen, Duschen, Körperpflege", "In Ihrem eigenen Bad, in Ihrem Tempo."],
          ["An- und Auskleiden", "Morgens und abends, wie es zu Ihrem Tag passt."],
          ["Hilfe beim Aufstehen und Gehen", "Damit Sie sich zu Hause sicher bewegen."],
        ]} />
      </FeatureSplit>

      <FeatureSplit
        id="beratung"
        eyebrow="Beratung"
        title="Beratung zu den Kosten"
        sub="Wir erklären, was Kranken- und Pflegekasse zahlen, und helfen bei Anträgen und Formularen."
        image={photos.beratung}
        imageAlt="Beratungsgespräch zu Hause"
        box={<><span>Beratung</span><strong>Kostenlos und unverbindlich</strong></>}
      >
        <ol className="mini-steps">
          <li><span className="tl-num">1</span><div><h3>Sie rufen an</h3><p>oder fordern einen Rückruf an.</p></div></li>
          <li><span className="tl-num">2</span><div><h3>Wir klären die Kosten</h3><p>mit Kranken- und Pflegekasse.</p></div></li>
          <li><span className="tl-num">3</span><div><h3>Wir helfen bei Anträgen</h3><p>damit die Pflege beginnen kann.</p></div></li>
        </ol>
        <div className="btn-row">
          <a className="btn btn-primary" href={site.phoneHref}><PhoneIcon /> {site.phone}</a>
          <Link className="btn btn-outline" href="/kontakt#rueckruf">Rückruf anfordern</Link>
        </div>
      </FeatureSplit>

      <ForWhom />
      <Costs />
      <ContactCta />
    </>
  );
}
