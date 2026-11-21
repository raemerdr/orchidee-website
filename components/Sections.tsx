import Image from "next/image";
import { photos, site } from "@/lib/site";
import FaqItem from "./FaqItem";
import { ArrowIcon, DuoHomeIcon, DuoNurseIcon, DuoPaperIcon, DuoTeamIcon, PhoneIcon } from "./Icons";

// "Für wen wir da sind": headline on the left, a short fit check on the right.
// Internally the focus is Pflegegrad 3–5, but the site must not say so: we qualify by need
// (prescribed Behandlungspflege) and politely rule out household-only help instead.
const criteria = [
  [DuoPaperIcon, photos.behandlungspflege, "Ihr Arzt hat Pflege verordnet", "z. B. Insulin, Verbände, Kompressionsstrümpfe oder Medikamente"],
  [DuoNurseIcon, photos.grundpflege, "Sie brauchen auch Hilfe im Alltag", "z. B. beim Waschen und Anziehen"],
  [DuoHomeIcon, photos.steps, "Sie wohnen in Koblenz oder Umgebung", "Unsere Touren fahren in Koblenz und der näheren Umgebung"],
] as const;

export function ForWhom() {
  return (
    <section id="fuer-wen">
      <div className="wrap fit-split">
        <div className="fit-intro">
          <span className="label">Für wen wir da sind</span>
          <h2>Ist das das Richtige für Sie?</h2>
          <p className="lead">
            Damit wir Ihnen wirklich helfen können, konzentrieren wir uns auf Menschen, die zu Hause medizinisch versorgt werden müssen.
          </p>
          <div className="fit-photo">
            <Image src={photos.fuerWen} alt="Pflegefachkraft im Gespräch mit einer älteren Dame bei ihr zu Hause" fill sizes="(max-width: 1080px) 100vw, 46vw" quality={75} />
            <a className="fit-call" href={site.phoneHref}>
              <span className="fit-call-ic"><PhoneIcon /></span>
              <span>
                <small>Sie sind unsicher? Wir sagen es Ihnen ehrlich.</small>
                <strong>{site.phone}</strong>
              </span>
            </a>
          </div>
        </div>

        <div className="fit-panel">
          <div className="pg-head">
            <h3>Passt unsere Pflege zu Ihnen?</h3>
            <span className="pg-tag">Kurz-Check</span>
          </div>

          <ul className="fit-criteria">
            {criteria.map(([Icon, img, title, text]) => (
              <li key={title}>
                <span className="fit-img"><Image src={img} alt="" fill sizes="(max-width: 720px) 100vw, 1px" quality={70} /></span>
                <span className="fit-ic"><Icon /></span>
                <div><strong>{title}</strong><span>{text}</span></div>
              </li>
            ))}
          </ul>

          <p className="fit-not"><i aria-hidden>–</i>Reine Haushaltshilfe oder Betreuung ohne ärztlich verordnete Pflege bieten wir leider nicht an.</p>
        </div>
      </div>
    </section>
  );
}

const services = [
  { n: "01", title: "Behandlungspflege", img: photos.behandlungspflege, text: "Alles, was Ihr Arzt verordnet hat – fachgerecht und zuverlässig.", tags: ["Insulin", "Wundversorgung", "Kompression", "Medikamente", "Katheter", "Sondenernährung"] },
  { n: "02", title: "Grundpflege", img: photos.grundpflege, text: "Hilfe beim Waschen, Anziehen und bei der täglichen Körperpflege – mit Ruhe und Respekt.", tags: ["Waschen", "Anziehen", "Mobilität"] },
  { n: "03", title: "Beratung & Kostenklärung", img: photos.beratung, text: "Wir erklären, was Kranken- und Pflegekasse übernehmen, und helfen bei den Formalitäten.", tags: ["Pflegegrad", "Verordnung", "Kassen"] },
];

export function Services() {
  return (
    <section id="leistungen" className="section-tight">
      <div className="wrap">
        <div className="row-head">
          <div>
            <span className="label">Leistungen</span>
            <h2>Was machen wir für Sie?</h2>
          </div>
          <a className="btn btn-dark" href="/kontakt">Beratung anfragen</a>
        </div>
        <div className="services">
          {services.map((s) => (
            <article key={s.n} className="svc">
              <Image className="svc-img" src={s.img} alt="" fill sizes="(max-width: 720px) 100vw, (max-width: 1080px) 50vw, 33vw" quality={70} />
              <span className="num">{s.n}</span>
              <div className="svc-body">
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <ul>{s.tags.map((t) => <li key={t}>{t}</li>)}</ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  ["Sie rufen uns an", "Oder Sie fordern einen Rückruf an."],
  ["Wir besuchen Sie zu Hause", "Wir lernen Sie kennen und klären die Kosten mit den Kassen."],
  ["Die Pflege beginnt", "Ihr festes Team kommt zu Ihnen nach Hause."],
];

export function Steps() {
  return (
    <section id="ablauf" className="section-tight">
      <div className="wrap steps-split">
        <div className="steps-photo">
          <Image src={photos.steps} alt="Pflegekraft im Gespräch mit einer älteren Dame bei ihr zu Hause" fill sizes="(max-width: 1080px) 100vw, 45vw" quality={70} />
        </div>
        <div>
          <span className="label">So läuft es ab</span>
          <h2>Wie fängt es an?</h2>
          <ol className="steps-list">
            {steps.map(([title, text], i) => (
              <li key={title}>
                <span className="step-num" aria-hidden>{i + 1}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

const reasons = [
  { icon: <DuoTeamIcon />, title: "Kleines, festes Team", text: "Sie wissen, wer kommt – keine ständig wechselnden Gesichter." },
  { icon: <DuoNurseIcon />, title: "Examinierte Pflegefachkräfte", text: "Ihre medizinische Pflege liegt in fachkundigen Händen." },
  { icon: <DuoHomeIcon />, title: "Zu Hause bleiben", text: "Versorgt in den eigenen vier Wänden, im gewohnten Alltag." },
  { icon: <DuoPaperIcon />, title: "Hilfe beim Papierkram", text: "Wir klären die Kosten und kümmern uns um die Kassen." },
];

// "Warum Orchidee": content + four open features on the left, tall photo on the right
// (mirrors "So läuft es ab", where the photo sits on the left).
export function Why() {
  return (
    <section className="section-tight why-section">
      <div className="wrap why-split">
        <div>
          <span className="label">Warum Orchidee</span>
          <h2>Vertraute Gesichter statt ständig neuer Leute.</h2>
          <p className="lead">
            Ihre Familie muss die medizinische Pflege nicht mehr allein stemmen. Wir übernehmen – mit einem kleinen Team, das Sie kennt.
          </p>
          <ol className="why-features">
            {reasons.map((r, i) => (
              <li className="why-feature" key={r.title}>
                <div className="why-feature-top">
                  <span className="ic">{r.icon}</span>
                  <span className="why-num">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3>{r.title}</h3>
                <p>{r.text}</p>
              </li>
            ))}
          </ol>
        </div>
        <div className="why-photo">
          <Image src={photos.why} alt="Pflegekraft und ältere Dame sitzen lachend nebeneinander" fill sizes="(max-width: 1080px) 100vw, 42vw" quality={70} />
        </div>
      </div>
    </section>
  );
}

const payers = [
  {
    Icon: DuoPaperIcon,
    who: "Krankenkasse",
    title: "Medizinische Pflege",
    text: "Was Ihr Arzt verordnet hat (Behandlungspflege), bezahlt in der Regel Ihre Krankenkasse.",
    items: ["Insulin & Medikamente", "Wundversorgung", "Kompression", "Katheter & Sonde"],
    needs: "Ärztliche Verordnung",
  },
  {
    Icon: DuoNurseIcon,
    who: "Pflegekasse",
    title: "Hilfe bei der Körperpflege",
    text: "Hilfe beim Waschen und Anziehen (Grundpflege): Mit einem Pflegegrad zahlt die Pflegekasse dazu.",
    items: ["Waschen & Körperpflege", "An- und Ausziehen", "Mobilität im Alltag"],
    needs: "Pflegegrad",
  },
];

export function Costs() {
  return (
    <section id="kosten" className="section-tight">
      <div className="wrap">
        <div className="costs-head">
          <div>
            <span className="label">Kosten</span>
            <h2>Wer bezahlt die Pflege?</h2>
          </div>
          <p className="lead">Den größten Teil tragen in der Regel die Kassen. Welche Kasse was übernimmt, hängt von der Art der Pflege ab.</p>
        </div>
        <div className="costs">
          {payers.map(({ Icon, who, title, text, items, needs }) => (
            <div className="cost" key={who}>
              <div className="cost-top">
                <span className="fit-ic cost-ic"><Icon /></span>
                <span className="who">{who}</span>
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
              <ul className="cost-list">
                {items.map((i) => <li key={i}>{i}</li>)}
              </ul>
              <div className="cost-needs"><span>Voraussetzung</span><strong>{needs}</strong></div>
            </div>
          ))}
          <div className="cost-cta">
            <span className="cost-cta-tag">Kostenlos &amp; unverbindlich</span>
            <h3>Wir klären das für Sie.</h3>
            <p>Wir prüfen gemeinsam mit Ihnen, was in Ihrem Fall übernommen wird, und helfen bei Anträgen und Formalitäten.</p>
            <div className="cost-cta-actions">
              <a className="btn btn-light" href={site.phoneHref}><PhoneIcon /> {site.phone}</a>
              <a className="cost-cta-link" href="/kontakt">Rückruf anfordern <ArrowIcon /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Items marked [TODO] need confirmation from the client.
const faqs = [
  ["Wie schnell kann die Pflege beginnen?", "[TODO: vom Kunden bestätigen] Sobald die Verordnung vorliegt, besprechen wir mit Ihnen den frühestmöglichen Start."],
  ["Wer kommt zu uns nach Hause?", "Ein kleines, festes Team aus Pflegefachkräften. So haben Sie vertraute Ansprechpartner."],
  ["Muss ich etwas bezahlen?", "Ärztlich verordnete Behandlungspflege übernimmt in der Regel die Krankenkasse, Grundpflege mit Pflegegrad die Pflegekasse. Wir klären das für Sie."],
  ["Welche Orte betreuen Sie?", "Koblenz und die nähere Umgebung. [TODO: Ortsliste vom Kunden ergänzen]"],
  ["Bieten Sie auch Haushaltshilfe an?", "Reine Haushaltshilfe oder Betreuung ohne ärztlich verordnete Pflege bieten wir leider nicht an."],
];

// `short` leaves out the questions the home page already answers in its own sections.
const repeatedOnHome = ["Muss ich etwas bezahlen?", "Bieten Sie auch Haushaltshilfe an?"];

export function Faq({ short = false }: { short?: boolean }) {
  const list = short ? faqs.filter(([q]) => !repeatedOnHome.includes(q)) : faqs;
  return (
    <section className="section-tight">
      <div className="wrap faq">
        <div>
          <span className="label">Gut zu wissen</span>
          <h2>Noch Fragen?</h2>
        </div>
        <div>
          {list.map(([q, a], i) => (
            <FaqItem key={q} q={q} a={a} defaultOpen={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function CareerTeaser() {
  return (
    <section id="karriere" className="section-tight">
      <div className="wrap">
        <div className="career">
          <Image className="career-bg" src={photos.career} alt="" fill sizes="(max-width: 1240px) 100vw, 1240px" quality={70} />
          <div>
            <span className="label">Karriere</span>
            <h2>Pflegen Sie mit uns in Koblenz.</h2>
            <p>Wir suchen examinierte Pflegefachkräfte und eine Pflegedienstleitung. Bewerbung in zwei Minuten – ohne Anschreiben.</p>
          </div>
          <div className="roles">
            <a className="role" href="/karriere#pdl">
              <span><strong>Pflegedienstleitung (m/w/d)</strong><small>Vollzeit · PDL-Weiterbildung</small></span>
              <span className="arrow"><ArrowIcon /></span>
            </a>
            <a className="role" href="/karriere#pflegefachkraft">
              <span><strong>Pflegefachkraft (m/w/d)</strong><small>3-jährige Ausbildung mit Examen · Führerschein B</small></span>
              <span className="arrow"><ArrowIcon /></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
