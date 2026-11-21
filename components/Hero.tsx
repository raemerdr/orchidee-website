import Image from "next/image";
import { photos, site } from "@/lib/site";
import { ArrowIcon, PhoneIcon } from "./Icons";
import GoogleReviews from "./GoogleReviews";
import T from "./T";

// Vitalex-style hero. No intro animation (meeting: "not too much animations").
export default function Hero() {
  return (
    <section className="hero" aria-label="Einleitung">
      <div className="hero-bg">
        <Image src={photos.hero} alt="Pflegekraft mit einer Patientin" fill priority sizes="100vw" quality={70} />
      </div>
      <div className="wrap">
        <div className="kicker"><b aria-hidden>#</b> Ambulante Pflege in Koblenz</div>
        <h1>
          Pflege zu Hause.
          <span>Vom selben Team.</span>
        </h1>
        <div className="hero-ctas">
          <a className="btn btn-primary" href="#anfrage" data-callback><span className="d-only">Anfrage senden <ArrowIcon /></span><span className="m-only">Rückruf anfordern</span></a>
          <a className="btn btn-ghost" href={site.phoneHref} aria-label={`${site.phone} anrufen`}><PhoneIcon /> <span className="m-only">Jetzt anrufen:&nbsp;</span>{site.phone}</a>
        </div>
        <p className="hero-text">
          <T
            d="Unsere Pflegefachkräfte übernehmen die ärztlich verordnete Behandlungspflege und helfen bei der täglichen Grundpflege – damit Sie zu Hause bleiben können."
            m="Unsere Pflegefachkräfte kommen zu Ihnen nach Hause. Sie übernehmen, was Ihr Arzt verordnet hat, und helfen beim Waschen und Anziehen."
          />
        </p>
        <div className="hero-bottom">
          <GoogleReviews />
          <div className="tags">
            <span>Behandlungspflege</span><span>Grundpflege</span><span>Koblenz &amp; Umgebung</span><span>Kleines, festes Team</span>
          </div>
        </div>
      </div>
    </section>
  );
}
