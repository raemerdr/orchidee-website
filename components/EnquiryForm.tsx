import Image from "next/image";
import { photos, site } from "@/lib/site";
import CallbackForm from "./CallbackForm";
import T from "./T";

export default function EnquiryForm({ hero = false }: { hero?: boolean }) {
  const Heading = hero ? "h1" : "h2";

  return (
    <section id="anfrage" className={`section-tight enquiry${hero ? " enquiry-hero" : ""}`}>
      <div className="enquiry-bg" aria-hidden>
        <Image src={photos.anfrage} alt="" fill sizes="100vw" quality={70} priority={hero} />
      </div>
      <div className="wrap contact">
        <div>
          <span className="label">{hero ? "Kontakt" : "Anfrage"}</span>
          <Heading>{hero ? "Wir sind für Sie da." : <T d="Sprechen Sie mit uns." m="Rufen Sie uns an." />}</Heading>
          <p className="lead">
            {hero
              ? "Rufen Sie uns an oder hinterlassen Sie Ihre Nummer. Wir melden uns und beraten Sie persönlich – gern auch bei Ihnen zu Hause."
              : "Am schnellsten geht es am Telefon. Oder Sie hinterlassen Ihre Nummer – wir rufen Sie zurück."}
          </p>
          <div className="call-box">
            <small>Telefon</small>
            <a className="big" href={site.phoneHref}>{site.phone}</a>
            <small>{site.company} · {site.street} · {site.city}</small>
          </div>
        </div>

        <a className="btn btn-primary enquiry-cb" href="/kontakt" data-callback="">Rückruf anfordern</a>
        <CallbackForm title={hero ? <h2 className="form-title">Rückruf anfordern</h2> : <h3>Rückruf anfordern</h3>} />
      </div>
    </section>
  );
}
