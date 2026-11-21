import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import EnquiryForm from "@/components/EnquiryForm";
import { Why } from "@/components/Sections";
import { photos, site } from "@/lib/site";
import FeatureSplit from "@/components/FeatureSplit";
import { DuoHomeIcon, DuoNurseIcon, DuoTeamIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Über uns",
  description: "Pflegedienst Orchidee: ein kleines, festes Pflegeteam in Koblenz. Ein Unternehmen der Fidelis Unternehmensgruppe.",
};

// TODO: replace with real team members and photos from the client.
const team = [
  { name: "[Name]", role: "Pflegedienstleitung" },
  { name: "[Name]", role: "Pflegefachkraft" },
  { name: "[Name]", role: "Pflegefachkraft" },
  { name: "[Name]", role: "Büro & Beratung" },
];

export default function UeberUnsPage() {
  return (
    <>
      <PageHero
        label="Über uns"
        title="Ein kleines Team aus Koblenz, das Sie kennt."
        lead={`Der ${site.name} versorgt Menschen in Koblenz und Umgebung zu Hause. Wir arbeiten bewusst mit einem kleinen, festen Team – damit Sie wissen, wer zu Ihnen kommt.`}
        image={photos.ueberUns}
        imageAlt="Pflegefachkraft und ältere Dame lächeln gemeinsam"
        imagePosition="70% 35%"
        imagePositionMobile="58% 30%"
        tags={["Kleines, festes Team", "Koblenz & Umgebung", "Teil der Fidelis Unternehmensgruppe"]}
      />

      <FeatureSplit
        label="Unser Anspruch"
        title="Pflege, auf die sich Familien verlassen können."
        lead="Viele Familien tragen die medizinische Pflege ihrer Angehörigen lange allein. Wir nehmen ihnen diesen Teil ab – fachlich sicher, pünktlich und mit Zeit für ein freundliches Wort."
        image={photos.steps}
        imageAlt="Pflegefachkraft bei einem Hausbesuch"
        badge={<><small>Zugelassener ambulanter Pflegedienst</small><strong>Ein Unternehmen der {site.group}</strong></>}
      >
        <ul className="feature-rows">
          <li><span className="fit-ic"><DuoTeamIcon /></span><div><strong>Vertraute Gesichter</strong><span>Ein kleines, festes Team statt ständig neuer Leute.</span></div></li>
          <li><span className="fit-ic"><DuoNurseIcon /></span><div><strong>Fachlich sicher</strong><span>Examinierte Pflegefachkräfte für die Behandlungspflege.</span></div></li>
          <li><span className="fit-ic"><DuoHomeIcon /></span><div><strong>Aus Koblenz, für Koblenz</strong><span>Kurze Wege in Koblenz und Umgebung.</span></div></li>
        </ul>
      </FeatureSplit>

      <Why />

      <section className="section-tight">
        <div className="wrap">
          <span className="label">Team</span>
          <h2>Die Menschen, die zu Ihnen kommen.</h2>
          <div className="team-grid">
            {team.map((m, i) => (
              <div className="detail-card team-card" key={i}>
                <div className="avatar" aria-hidden />
                <h3>{m.name}</h3>
                <p>{m.role}</p>
              </div>
            ))}
          </div>
          <p className="note">[TODO: Teamfotos und Namen vom Kunden]</p>
        </div>
      </section>

      <EnquiryForm />
    </>
  );
}
