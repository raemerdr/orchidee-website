"use client";

import { useState } from "react";
import Image from "next/image";
import { photos, site } from "@/lib/site";

// TODO: submit to HubSpot (routing still open – see brief).
export default function EnquiryForm({ hero = false }: { hero?: boolean }) {
  const Heading = hero ? "h1" : "h2";
  const [sent, setSent] = useState(false);

  return (
    <section id="anfrage" className={`section-tight enquiry${hero ? " enquiry-hero" : ""}`}>
      <div className="enquiry-bg" aria-hidden>
        <Image src={photos.anfrage} alt="" fill sizes="100vw" quality={70} priority={hero} />
      </div>
      <div className="wrap contact">
        <div>
          <span className="label">{hero ? "Kontakt" : "Anfrage"}</span>
          <Heading>{hero ? "Wir sind für Sie da." : "Sprechen Sie mit uns."}</Heading>
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

        <form
          className="form"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          {hero ? <h2 className="form-title">Rückruf anfordern</h2> : <h3>Rückruf anfordern</h3>}
          <div className="two">
            <div className="field"><label htmlFor="name">Ihr Name</label><input id="name" name="name" autoComplete="name" required /></div>
            <div className="field"><label htmlFor="phone">Telefonnummer</label><input id="phone" name="phone" type="tel" autoComplete="tel" required /></div>
          </div>
          <div className="field">
            <label htmlFor="pflegegrad">Pflegegrad</label>
            <select id="pflegegrad" name="pflegegrad" required defaultValue="">
              <option value="" disabled>Bitte wählen</option>
              <option>Pflegegrad 3</option><option>Pflegegrad 4</option><option>Pflegegrad 5</option>
              <option>Beantragt / noch keiner</option><option>Pflegegrad 1 oder 2</option>
            </select>
          </div>
          <fieldset className="field">
            <legend>Hat ein Arzt Behandlungspflege verordnet?</legend>
            <div className="choice">
              <label><input type="radio" name="verordnung" value="ja" required /> Ja</label>
              <label><input type="radio" name="verordnung" value="nein" /> Nein</label>
              <label><input type="radio" name="verordnung" value="unsicher" /> Weiß nicht</label>
            </div>
          </fieldset>
          <div className="field"><label htmlFor="ort">Wohnort</label><input id="ort" name="ort" placeholder="z. B. Koblenz-Lützel" /></div>
          {sent ? (
            <p className="form-done" role="status">Danke – wir melden uns bei Ihnen.</p>
          ) : (
            <button className="btn btn-primary" type="submit">Rückruf anfordern</button>
          )}
          <p className="small">Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Daten gemäß unserer <a href="/datenschutz">Datenschutzerklärung</a> zu.</p>
        </form>
      </div>
    </section>
  );
}
