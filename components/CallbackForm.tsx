"use client";

import { useState } from "react";
import Link from "next/link";

// One-page callback form in the style of helpinghandshomecare.co.uk: two columns of plain fields,
// a short privacy note and one clear button. `who` pre-selects the answer from the home page choice.
// The care-level notes are plain-word simplifications of the official levels (client to approve).
// TODO: submit to HubSpot (routing still open – see brief).
const levels = [
  ["Pflegegrad 3", "Pflegegrad 3 – Hilfe mehrmals am Tag"],
  ["Pflegegrad 4", "Pflegegrad 4 – Hilfe bei fast allem"],
  ["Pflegegrad 5", "Pflegegrad 5 – Pflege rund um die Uhr"],
  ["Beantragt oder noch keiner", "Beantragt oder noch keiner"],
  ["Weiß ich nicht", "Weiß ich nicht – wir klären das am Telefon"],
];

export default function CallbackForm({ who }: { who?: string }) {
  const [sent, setSent] = useState<string | null>(null);

  if (sent !== null) {
    return (
      <div className="form-done" role="status">
        <span className="form-done-check" aria-hidden>✓</span>
        <div>
          <h3>Danke{sent ? `, ${sent}` : ""}. Wir rufen Sie zurück.</h3>
          <p>Ein Mitglied unseres Teams meldet sich so bald wie möglich bei Ihnen.</p>
        </div>
      </div>
    );
  }

  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        setSent(String(data.get("vorname") ?? "").trim());
      }}
    >
      <div className="field"><label htmlFor="cb-vorname">Vorname</label><input id="cb-vorname" name="vorname" autoComplete="given-name" /></div>
      <div className="field"><label htmlFor="cb-nachname">Nachname</label><input id="cb-nachname" name="nachname" autoComplete="family-name" /></div>
      <div className="field"><label htmlFor="cb-phone">Telefonnummer <b>*</b></label><input id="cb-phone" name="telefon" type="tel" inputMode="tel" autoComplete="tel" required /></div>
      <div className="field"><label htmlFor="cb-email">E-Mail-Adresse <small>(freiwillig)</small></label><input id="cb-email" name="email" type="email" autoComplete="email" /></div>
      <div className="field">
        <label htmlFor="cb-fuer">Für wen suchen Sie Pflege? <b>*</b></label>
        <select id="cb-fuer" name="fuer" required defaultValue={who === "selbst" ? "Für mich" : who === "angehoerige" ? "Für einen Angehörigen" : ""}>
          <option value="" disabled>Bitte wählen</option>
          <option>Für mich</option>
          <option>Für einen Angehörigen</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="cb-verordnung">Hat ein Arzt Pflege verordnet? <b>*</b></label>
        <select id="cb-verordnung" name="verordnung" required defaultValue="">
          <option value="" disabled>Bitte wählen</option>
          <option value="Ja">Ja – z. B. Insulin, Verbände, Medikamente</option>
          <option>Nein</option>
          <option>Weiß ich nicht</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="cb-pflegegrad">Gibt es einen Pflegegrad? <b>*</b></label>
        <select id="cb-pflegegrad" name="pflegegrad" required defaultValue="">
          <option value="" disabled>Bitte wählen</option>
          {levels.map(([value, label]) => <option key={value} value={value}>{label}</option>)}
        </select>
        <span className="field-hint">Der Pflegegrad steht in dem Brief der Pflegekasse.</span>
      </div>
      <div className="field"><label htmlFor="cb-plz">Postleitzahl <b>*</b></label><input id="cb-plz" name="plz" inputMode="numeric" autoComplete="postal-code" required /></div>
      <div className="field"><label htmlFor="cb-ort">Wohnort <b>*</b></label><input id="cb-ort" name="ort" autoComplete="address-level2" placeholder="z. B. Koblenz-Lützel" required /></div>
      <div className="field"><label htmlFor="cb-zeit">Wann erreichen wir Sie am besten?</label>
        <select id="cb-zeit" name="zeit" defaultValue="Egal">
          <option>Egal</option><option>Vormittags</option><option>Nachmittags</option>
        </select>
      </div>
      <p className="form-note">Wir nutzen Ihre Angaben nur, um Sie wegen Ihrer Anfrage zurückzurufen. Mehr dazu in unserer <Link href="/datenschutz">Datenschutzerklärung</Link>.</p>
      <button className="btn btn-primary btn-lg form-submit" type="submit">Rückruf anfordern</button>
    </form>
  );
}
