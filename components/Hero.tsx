import Image from "next/image";
import { photos, site } from "@/lib/site";
import { ArrowIcon, PhoneIcon } from "./Icons";
import GoogleReviews from "./GoogleReviews";

// Vitalex-style hero. No intro animation (meeting: "not too much animations").
export default function Hero() {
  return (
    <section className="hero" aria-label="Einleitung">
      <div className="hero-bg">
        <Image src={photos.hero} alt="Pflegekraft mit einer Patientin" fill priority sizes="100vw" quality={70} />
      </div>
      <div className="wrap">
        <div className="kicker"><b>#</b> Ambulante Pflege in Koblenz</div>
        <h1>
          Pflege zu Hause.
          <span>Vom selben Team.</span>
        </h1>
        <div className="hero-ctas">
          <a className="btn btn-primary" href="#anfrage">Anfrage senden <ArrowIcon /></a>
          <a className="btn btn-ghost" href={site.phoneHref} aria-label={`${site.phone} anrufen`}><PhoneIcon /> {site.phone}</a>
        </div>
        <p className="hero-text">
          Unsere Pflegefachkräfte übernehmen die ärztlich verordnete Behandlungspflege und helfen bei der
          täglichen Grundpflege – damit Sie zu Hause bleiben können.
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
