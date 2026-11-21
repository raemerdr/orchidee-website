"use client";

import { useState, type ReactNode } from "react";
import T from "./T";

// The callback form itself, used in the page section and in the popup.
// `idPrefix` keeps field ids unique when both are on the same page.
// TODO: submit to HubSpot (routing still open – see brief).
export default function CallbackForm({ idPrefix = "", title }: { idPrefix?: string; title: ReactNode }) {
  const [sent, setSent] = useState(false);
  const id = (n: string) => `${idPrefix}${n}`;
  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      {title}
      <div className="two">
        <div className="field"><label htmlFor={id("name")}>Ihr Name</label><input id={id("name")} name="name" autoComplete="name" required /></div>
        <div className="field"><label htmlFor={id("phone")}>Telefonnummer</label><input id={id("phone")} name="phone" type="tel" autoComplete="tel" required /></div>
      </div>
      <div className="field">
        <label htmlFor={id("pflegegrad")}>Pflegegrad</label>
        <select id={id("pflegegrad")} name="pflegegrad" required defaultValue="">
          <option value="" disabled>Bitte wählen</option>
          <option>Pflegegrad 3</option><option>Pflegegrad 4</option><option>Pflegegrad 5</option>
          <option>Beantragt / noch keiner</option><option>Pflegegrad 1 oder 2</option>
        </select>
      </div>
      <fieldset className="field">
        <legend><T d="Hat ein Arzt Behandlungspflege verordnet?" m="Hat ein Arzt Pflege verordnet? (z. B. Insulin, Verbände)" /></legend>
        <div className="choice">
          <label><input type="radio" name="verordnung" value="ja" required /> Ja</label>
          <label><input type="radio" name="verordnung" value="nein" /> Nein</label>
          <label><input type="radio" name="verordnung" value="unsicher" /> Weiß nicht</label>
        </div>
      </fieldset>
      <div className="field"><label htmlFor={id("ort")}>Wohnort</label><input id={id("ort")} name="ort" placeholder="z. B. Koblenz-Lützel" /></div>
      {sent ? (
        <p className="form-done" role="status">Danke – wir melden uns bei Ihnen.</p>
      ) : (
        <button className="btn btn-primary" type="submit">Rückruf anfordern</button>
      )}
      <p className="small">Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Daten gemäß unserer <a href="/datenschutz">Datenschutzerklärung</a> zu.</p>
    </form>
  );
}
