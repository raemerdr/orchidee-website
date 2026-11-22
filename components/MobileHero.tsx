import Image from "next/image";
import { photos } from "@/lib/site";

// Phone-only hero: big centred headline, one paragraph, then picture cards to choose from.
// (A <div>, not a <section>, so it does not shift the desktop light/dark section order.)
const choices = [
  { href: "/kontakt", img: photos.fuerWen, label: "Ich brauche Pflege zu Hause", who: "selbst" },
  { href: "/kontakt", img: photos.ueberUns, label: "Ich suche Pflege für einen Angehörigen", who: "angehoerige" },
  { href: "/karriere", img: photos.career, label: "Ich möchte bei Orchidee arbeiten", who: undefined },
];

export default function MobileHero() {
  return (
    <div className="mhero">
      <div className="wrap">
        <p className="mhero-kicker">Ambulante Pflege in Koblenz</p>
        <h1>Pflege zu Hause. Vom selben Team.</h1>
        <p className="mhero-text">
          Unsere Pflegefachkräfte kommen zu Ihnen nach Hause. Sie übernehmen, was Ihr Arzt verordnet hat,
          und helfen beim Waschen und Anziehen. Wählen Sie unten aus, was auf Sie zutrifft. Wir stellen Ihnen ein paar einfache Fragen und rufen Sie zurück.
        </p>
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
