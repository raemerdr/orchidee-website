import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CallbackForm from "@/components/CallbackForm";
import { Faq } from "@/components/Sections";
import { ClockIcon, PhoneIcon, PinIcon } from "@/components/Icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Rückruf anfordern & Kontakt",
  description: `Rufen Sie an (${site.phone}) oder fordern Sie einen Rückruf an. Pflegedienst Orchidee, ${site.street}, ${site.city}.`,
};

export default async function KontaktPage({ searchParams }: { searchParams: Promise<{ fuer?: string }> }) {
  const { fuer } = await searchParams;
  return (
    <>
      <PageHero label="Kontakt" title="Wir rufen Sie gern zurück" lead="Schicken Sie uns Ihre Angaben – jemand aus unserem Team meldet sich so bald wie möglich bei Ihnen. Die Beratung ist kostenlos." cta="none" />

      <section className="section form-section" id="rueckruf">
        <div className="wrap form-layout">
          <div className="form-card">
            <h2>Rückruf anfordern</h2>
            <p className="form-intro">Pflichtfelder sind mit <b>*</b> markiert.</p>
            <CallbackForm who={fuer} />
          </div>
          <aside className="form-aside">
            <div className="aside-call">
              <p>Lieber gleich sprechen?</p>
              <a href={site.phoneHref}><PhoneIcon size={22} /> {site.phone}</a>
            </div>
            <div className="aside-box">
              <h3>So geht es weiter</h3>
              <ol className="mini-steps">
                <li><span className="tl-num">1</span><div><strong>Wir rufen Sie an</strong><span>und hören zu, was Sie brauchen.</span></div></li>
                <li><span className="tl-num">2</span><div><strong>Wir besuchen Sie</strong><span>zu einem kostenlosen Gespräch.</span></div></li>
                <li><span className="tl-num">3</span><div><strong>Die Pflege beginnt</strong><span>mit Ihrem festen Team.</span></div></li>
              </ol>
            </div>
            <div className="aside-box">
              <p className="aside-line"><PinIcon size={22} /><span>{site.company}<br />{site.street}, {site.city}</span></p>
              <p className="aside-line"><ClockIcon size={22} /><span>[TODO: Bürozeiten vom Kunden]</span></p>
              <p className="aside-line"><span className="aside-mail">@</span><a href={`mailto:${site.email}`}>{site.email}</a></p>
            </div>
          </aside>
        </div>
      </section>

      <Faq />
    </>
  );
}
