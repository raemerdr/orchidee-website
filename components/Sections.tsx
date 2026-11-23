import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { googleReviews, photos, site, video } from "@/lib/site";
import FaqItem from "./FaqItem";
import VideoFrame from "./VideoFrame";
import { ArrowIcon, CareIcon, DuoNurseIcon, DuoPaperIcon, DuoTeamIcon, CheckIcon, ClockIcon, DocIcon, HandIcon, HomeIcon, PhoneIcon, StarIcon, TeamIcon } from "./Icons";

/* Orchidee's own look: warm cream and deep aubergine, magenta from the logo for actions,
   photos in arched frames (the orchid petal), left-aligned headings, few but clear buttons. */

/* ---------- Small building blocks ---------- */

export function SectionHead({ eyebrow, title, text, center = false, children }: { eyebrow?: string; title: ReactNode; text?: ReactNode; center?: boolean; children?: ReactNode }) {
  return (
    <div className={`section-head${center ? " center" : ""}`}>
      <div>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2>{title}</h2>
        {text && <p className="lead">{text}</p>}
      </div>
      {children}
    </div>
  );
}

export function CheckList({ items }: { items: [string, string?][] }) {
  return (
    <ul className="checklist">
      {items.map(([title, text]) => (
        <li key={title}>
          <span className="check"><CheckIcon size={16} /></span>
          <div><strong>{title}</strong>{text && <span>{text}</span>}</div>
        </li>
      ))}
    </ul>
  );
}

function RatingBadge() {
  const rating = googleReviews.rating.toFixed(1).replace(".", ",");
  return (
    <a className="rating" href={googleReviews.url} target="_blank" rel="noopener noreferrer" aria-label={`${rating} von 5 Sternen bei Google, ${googleReviews.count} Bewertungen`}>
      <svg className="rating-g" width="30" height="30" viewBox="0 0 48 48" aria-hidden>
        <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z" />
        <path fill="#FF3D00" d="m6.3 14.7 6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
        <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-7.9l-6.5 5C9.5 39.6 16.2 44 24 44z" />
        <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z" />
      </svg>
      <strong>{rating}</strong>
      <span><span className="rating-stars" aria-hidden>{Array.from({ length: 5 }, (_, i) => <StarIcon key={i} size={15} />)}</span>{googleReviews.count} Bewertungen bei Google</span>
    </a>
  );
}

/* ---------- Home: hero ---------- */

export function Hero() {
  return (
    <section className="hero hero-home">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Ambulanter Pflegedienst in Koblenz</p>
          <h1>Pflege zu Hause – <span className="hl">vom selben Team.</span></h1>
          <p className="hero-lead">Unsere Pflegefachkräfte kommen zu Ihnen nach Hause und übernehmen, was Ihr Arzt verordnet hat.</p>
          <RatingBadge />
          <p className="hero-ask">Für wen suchen Sie Pflege?</p>
          <div className="hero-ctas hero-choices">
            <Link className="choice" href="/kontakt?fuer=selbst#rueckruf">
              <span className="choice-img"><Image src={photos.cardSelf} alt="" fill sizes="64px" quality={70} /></span>
              <span>Für mich</span><ArrowIcon />
            </Link>
            <Link className="choice" href="/kontakt?fuer=angehoerige#rueckruf">
              <span className="choice-img"><Image src={photos.cardRelative} alt="" fill sizes="64px" quality={70} /></span>
              <span>Für einen Angehörigen</span><ArrowIcon />
            </Link>
          </div>
          <a className="hero-call" href={site.phoneHref}><span className="hero-call-ic"><PhoneIcon size={20} /></span><span>Oder rufen Sie an: <strong>{site.phone}</strong></span></a>
        </div>
        <div className="hero-media">
          <div className="arch"><Image src={photos.hero} alt="Pflegefachkraft umarmt eine lachende ältere Dame" fill priority sizes="100vw" quality={75} style={{ objectPosition: "72% 35%" }} /></div>
        </div>
      </div>
      <div className="wrap">
        <ul className="promises">
          <li><span className="promise-ic"><DuoTeamIcon /></span><div><strong>Ein festes Team</strong><span>Sie wissen, wer kommt.</span></div></li>
          <li><span className="promise-ic"><DuoNurseIcon /></span><div><strong>Examinierte Fachkräfte</strong><span>für die medizinische Pflege.</span></div></li>
          <li><span className="promise-ic"><DuoPaperIcon /></span><div><strong>Kostenlose Beratung</strong><span>Wir klären das mit den Kassen.</span></div></li>
        </ul>
      </div>
    </section>
  );
}

/* ---------- Services ---------- */

const services = [
  { img: photos.behandlungspflege, href: "/leistungen#behandlungspflege", Icon: CareIcon, term: "Behandlungspflege", title: "Was Ihr Arzt verordnet hat", text: "Insulin, Verbände, Kompressionsstrümpfe und Medikamente – fachgerecht und pünktlich." },
  { img: photos.grundpflege, href: "/leistungen#grundpflege", Icon: HandIcon, term: "Grundpflege", title: "Hilfe beim Waschen und Anziehen", text: "Unterstützung bei der Körperpflege und im Alltag – in Ruhe und in Ihrem Tempo." },
  { img: photos.beratung, href: "/leistungen#beratung", Icon: DocIcon, term: "Beratung", title: "Wir klären, wer bezahlt", text: "Wir sprechen mit Kranken- und Pflegekasse und helfen bei den Anträgen." },
];

export function Services() {
  return (
    <section id="leistungen" className="section">
      <div className="wrap">
        <SectionHead eyebrow="Leistungen" title="Was wir für Sie tun">
          <Link className="link-arrow" href="/leistungen">Alle Leistungen <ArrowIcon /></Link>
        </SectionHead>
        <div className="services">
          {services.map(({ img, href, Icon, term, title, text }) => (
            <article key={term} className="service">
              <span className="service-img"><Image src={img} alt="" fill sizes="(max-width: 720px) 100vw, 33vw" quality={70} /></span>
              <div className="service-body">
                <span className="service-term"><Icon size={22} /> {term}</span>
                <h3 className="service-title">{title}</h3>
                <p className="service-text">{text}</p>
                <div className="service-btns">
                  <Link className="btn btn-primary" href={`/kontakt#rueckruf`}>Rückruf anfordern</Link>
                  <Link className="btn btn-outline" href={href} aria-label={`Mehr erfahren: ${title}`}>Mehr erfahren</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Who we care for ---------- */
// Internally the focus is Pflegegrad 3–5, but the site must not say so: we qualify by need
// (prescribed medical care) and politely rule out household-only help instead.

export function ForWhom() {
  return (
    <section id="fuer-wen" className="section section-cream">
      <div className="wrap split">
        <div className="split-media">
          <div className="arch"><Image src={photos.fuerWen} alt="Pflegefachkraft im Gespräch mit einer älteren Dame bei ihr zu Hause" fill sizes="(max-width: 720px) 100vw, 40vw" quality={75} style={{ objectPosition: "40% 50%" }} /></div>
        </div>
        <div className="split-copy">
          <p className="eyebrow">Für wen wir da sind</p>
          <h2>Ist unsere Pflege das Richtige für Sie?</h2>
          <p className="lead">Wir sind für Menschen da, die zu Hause medizinisch versorgt werden müssen.</p>
          <CheckList items={[
            ["Ihr Arzt hat Pflege verordnet", "z. B. Insulin, Verbände, Kompressionsstrümpfe oder Medikamente"],
            ["Sie brauchen auch Hilfe im Alltag", "z. B. beim Waschen und Anziehen"],
            ["Sie wohnen in Koblenz oder Umgebung", "Unsere Touren fahren in Koblenz und der näheren Umgebung"],
          ]} />
          {/* For sons and daughters: say outright that the medical part is taken off their hands. */}
          <div className="family-note">
            <strong>Sie pflegen einen Angehörigen?</strong>
            <p>Den medizinischen Teil übernehmen wir. Sie müssen das nicht mehr allein machen.</p>
          </div>
          <p className="note-muted">Reine Haushaltshilfe oder Betreuung ohne ärztlich verordnete Pflege bieten wir leider nicht an.</p>
        </div>
      </div>
    </section>
  );
}

/* ---------- Video ---------- */

export function VideoSection() {
  return (
    <section id="video" className="section">
      <div className="wrap video-split">
        <div className="video-copy">
          <p className="eyebrow">Lernen Sie uns kennen</p>
          <h2>Wer kommt zu Ihnen nach Hause?</h2>
          <p className="lead">In einem kurzen Film stellen wir unser Team vor und zeigen, wie ein Besuch bei Ihnen abläuft.</p>
          <p className="video-label">{video.caption}</p>
        </div>
        <VideoFrame />
      </div>
    </section>
  );
}

/* ---------- Costs ---------- */

const payers = [
  { Icon: CareIcon, who: "Krankenkasse", title: "Medizinische Pflege", text: "Was Ihr Arzt verordnet hat (Behandlungspflege), bezahlt in der Regel Ihre Krankenkasse.", needs: "Ärztliche Verordnung" },
  { Icon: HandIcon, who: "Pflegekasse", title: "Hilfe bei der Körperpflege", text: "Für Hilfe beim Waschen und Anziehen (Grundpflege) zahlt die Pflegekasse dazu, wenn ein Pflegegrad vorliegt.", needs: "Pflegegrad" },
];

export function Costs() {
  return (
    <section id="kosten" className="section">
      <div className="wrap">
        <SectionHead eyebrow="Kosten" title="Wer bezahlt die Pflege?" text="Den größten Teil tragen in der Regel die Kassen. Welche Kasse zahlt, hängt von der Art der Pflege ab." />
        <div className="costs">
          {payers.map(({ Icon, who, title, text, needs }) => (
            <div className="cost" key={who}>
              <div className="cost-top"><span className="promise-ic"><Icon size={26} /></span><span className="cost-who">{who}</span></div>
              <h3>{title}</h3>
              <p>{text}</p>
              <p className="cost-needs"><span>Voraussetzung</span>{needs}</p>
            </div>
          ))}
          <div className="cost cost-help">
            <h3>Wir klären das für Sie.</h3>
            <p>Die Beratung ist kostenlos. Wir sprechen mit den Kassen und helfen bei Anträgen.</p>
            <Link className="btn btn-light" href="/kontakt#rueckruf">Rückruf anfordern</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Steps ---------- */

const steps = [
  ["Sie melden sich", "Rufen Sie an oder fordern Sie einen Rückruf an."],
  ["Wir besuchen Sie", "Wir lernen Sie zu Hause kennen und klären die Kosten."],
  ["Die Pflege beginnt", "Ihr festes Team kommt zu Ihnen nach Hause."],
];

export function Steps() {
  return (
    <section id="ablauf" className="section section-cream">
      <div className="wrap">
        <SectionHead eyebrow="So läuft es ab" title="Drei Schritte bis zur Pflege" />
        <ol className="timeline">
          {steps.map(([title, text], i) => (
            <li key={title}>
              <span className="tl-num" aria-hidden>{i + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */

// Items marked [TODO] need confirmation from the client.
const faqs = [
  ["Wie schnell kann die Pflege beginnen?", "[TODO: vom Kunden bestätigen] Sobald die Verordnung vorliegt, besprechen wir mit Ihnen den frühestmöglichen Start."],
  ["Wer kommt zu uns nach Hause?", "Ein kleines, festes Team aus Pflegefachkräften. So haben Sie vertraute Ansprechpartner."],
  ["Muss ich etwas bezahlen?", "Ärztlich verordnete Behandlungspflege übernimmt in der Regel die Krankenkasse, Grundpflege mit Pflegegrad die Pflegekasse. Wir klären das für Sie."],
  ["Welche Orte betreuen Sie?", "Koblenz und die nähere Umgebung. [TODO: Ortsliste vom Kunden ergänzen]"],
  ["Bieten Sie auch Haushaltshilfe an?", "Reine Haushaltshilfe oder Betreuung ohne ärztlich verordnete Pflege bieten wir leider nicht an."],
];

export function Faq() {
  return (
    <section id="fragen" className="section">
      <div className="wrap faq">
        <div>
          <p className="eyebrow">Häufige Fragen</p>
          <h2>Gut zu wissen</h2>
          <div className="faq-call">
            <p>Ihre Frage ist nicht dabei?</p>
            <a href={site.phoneHref}><PhoneIcon size={20} /> {site.phone}</a>
          </div>
        </div>
        <div className="faq-list">
          {faqs.map(([q, a], i) => <FaqItem key={q} q={q} a={a} defaultOpen={i === 0} />)}
        </div>
      </div>
    </section>
  );
}

/* ---------- Closing contact block (every page) ---------- */

export function ContactCta() {
  return (
    <section className="section contact-cta">
      <div className="wrap">
        <div className="cta-card">
          <div className="cta-copy">
            <p className="eyebrow">Wir sind für Sie da</p>
            <h2>Sprechen Sie mit uns.</h2>
            <p>Am schnellsten geht es am Telefon. Oder Sie hinterlassen Ihre Nummer – wir rufen Sie zurück.</p>
            <a className="cta-phone" href={site.phoneHref}><PhoneIcon size={26} /> {site.phone}</a>
            <div className="cta-actions">
              <Link className="btn btn-light btn-lg" href="/kontakt#rueckruf">Rückruf anfordern</Link>
            </div>
            <p className="cta-meta"><ClockIcon size={18} /> Beratung kostenlos und unverbindlich</p>
          </div>
          <div className="cta-media"><div className="arch"><Image src={photos.anfrage} alt="Ältere Dame telefoniert lächelnd zu Hause" fill sizes="(max-width: 720px) 100vw, 36vw" quality={75} style={{ objectPosition: "45% 25%" }} /></div></div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Über uns: what matters to us ---------- */

const values = [
  { Icon: TeamIcon, title: "Kleines, festes Team", text: "Sie wissen, wer kommt – keine ständig wechselnden Gesichter." },
  { Icon: CareIcon, title: "Examinierte Fachkräfte", text: "Ihre medizinische Pflege liegt in fachkundigen Händen." },
  { Icon: HomeIcon, title: "Zu Hause bleiben", text: "Versorgt in den eigenen vier Wänden, im gewohnten Alltag." },
  { Icon: DocIcon, title: "Hilfe beim Papierkram", text: "Wir klären die Kosten und kümmern uns um die Kassen." },
];

export function Values() {
  return (
    <section className="section section-cream">
      <div className="wrap">
        <SectionHead eyebrow="Warum Orchidee" title="Vertraute Gesichter statt ständig neuer Leute" />
        <ul className="values">
          {values.map(({ Icon, title, text }) => (
            <li className="value" key={title}>
              <span className="promise-ic"><Icon size={26} /></span>
              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
