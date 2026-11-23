import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FeatureSplit from "@/components/FeatureSplit";
import { CheckList, ContactCta, SectionHead, Values } from "@/components/Sections";
import { TeamIcon } from "@/components/Icons";
import { photos, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Über uns",
  description: "Pflegedienst Orchidee: ein kleines, festes Pflegeteam in Koblenz. Ein Unternehmen der Fidelis Unternehmensgruppe.",
};

// TODO: replace with real team members and photos from the client.
const team = [
  { name: "[Name]", role: "Pflegedienstleitung" },
  { name: "[Name]", role: "Pflegefachkraft" },
  { name: "[Name]", role: "Pflegefachkraft" },
  { name: "[Name]", role: "Büro und Beratung" },
];

export default function UeberUnsPage() {
  return (
    <>
      <PageHero
        label="Über uns"
        title="Ein kleines Team aus Koblenz, das Sie kennt"
        lead={`Der ${site.name} versorgt Menschen in Koblenz und Umgebung zu Hause. Wir arbeiten bewusst mit einem kleinen, festen Team – damit Sie wissen, wer zu Ihnen kommt.`}
        image={photos.ueberUns}
        imagePosition="62% 35%"
      />

      <FeatureSplit
        eyebrow="Unser Anspruch"
        title="Pflege, auf die sich Familien verlassen können"
        sub="Viele Familien tragen die medizinische Pflege ihrer Angehörigen lange allein. Wir nehmen ihnen diesen Teil ab."
        image={photos.steps}
        imageAlt="Pflegefachkraft bei einem Hausbesuch"
        box={<><span>Zugelassener Pflegedienst</span><strong>Ein Unternehmen der {site.group}</strong></>}
      >
        <CheckList items={[
          ["Vertraute Gesichter", "Ein kleines, festes Team statt ständig neuer Leute."],
          ["Fachlich sicher", "Examinierte Pflegefachkräfte für die medizinische Pflege."],
          ["Aus Koblenz, für Koblenz", "Kurze Wege in Koblenz und Umgebung."],
        ]} />
      </FeatureSplit>

      <Values />

      <section className="section">
        <div className="wrap">
          <SectionHead eyebrow="Unser Team" title="Die Menschen, die zu Ihnen kommen" />
          <div className="team-grid">
            {team.map((m, i) => (
              <div className="team-card" key={i}>
                <div className="avatar" aria-hidden><TeamIcon size={40} /></div>
                <h3>{m.name}</h3>
                <p>{m.role}</p>
              </div>
            ))}
          </div>
          <p className="todo">[TODO: Teamfotos und Namen vom Kunden]</p>
        </div>
      </section>

      <ContactCta />
    </>
  );
}
