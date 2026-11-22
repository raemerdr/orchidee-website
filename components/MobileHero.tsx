import Image from "next/image";
import { photos, site } from "@/lib/site";
import { PhoneIcon } from "./Icons";

// Phone-only hero: big centred headline, one paragraph, then picture cards to choose from.
// Two choices: for myself or for a relative. Jobs are not offered here (they live under Karriere).
// (A <div>, not a <section>, so it does not shift the desktop light/dark section order.)
const choices = [
  { href: "/kontakt", img: photos.cardSelf, label: "Ich brauche Pflege zu Hause", who: "selbst" },
  { href: "/kontakt", img: photos.cardRelative, label: "Ich suche Pflege für einen Angehörigen", who: "angehoerige" },
];

export default function MobileHero() {
  return (
    <div className="mhero">
      <div className="mhero-bg" aria-hidden>
        <Image src={photos.hero} alt="" fill sizes="(max-width: 720px) 100vw, 1px" quality={70} priority />
      </div>
      <div className="wrap">
        <p className="mhero-kicker">Ambulante Pflege in Koblenz</p>
        <h1>Pflege zu Hause. Vom selben Team.</h1>
        <p className="mhero-text">
          Unsere Pflegefachkräfte kommen zu Ihnen nach Hause und übernehmen, was Ihr Arzt verordnet hat.
        </p>
        <a className="btn btn-primary mhero-call" href={site.phoneHref} aria-label={`${site.phone} anrufen`}>
          <PhoneIcon /> Jetzt anrufen: {site.phone}
        </a>
        <p className="mhero-or">oder Rückruf anfordern:</p>
        <ul className="mhero-choices">
          {choices.map((c, i) => (
            <li key={c.label}>
              <a href={c.href} data-callback={c.who}>
                <span className="mhero-img">
                  <Image src={c.img} alt="" fill sizes="(max-width: 720px) 100vw, 1px" quality={70} priority={i === 0} />
                </span>
                <span className="mhero-row">
                  <span className="mhero-label">{c.label}</span>
                  <span className="mhero-arrow" aria-hidden>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
