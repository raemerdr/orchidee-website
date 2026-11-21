"use client";

import { useState } from "react";
import Link from "next/link";

// Short application form from the brief: name, phone, email, role, qualification, earliest start.
// TODO: submit to HubSpot (routing still open – see brief).
export default function ApplicationForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      id="bewerbung"
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <h3>Jetzt bewerben</h3>
      <p className="small">Dauert etwa zwei Minuten. Kein Anschreiben, kein Lebenslauf nötig – wir rufen Sie an.</p>
      <div className="two">
        <div className="field"><label htmlFor="a-name">Name</label><input id="a-name" name="name" autoComplete="name" required /></div>
        <div className="field"><label htmlFor="a-phone">Telefonnummer</label><input id="a-phone" name="phone" type="tel" autoComplete="tel" required /></div>
      </div>
      <div className="field"><label htmlFor="a-email">E-Mail</label><input id="a-email" name="email" type="email" autoComplete="email" required /></div>
      <div className="field">
        <label htmlFor="a-role">Stelle</label>
        <select id="a-role" name="role" required defaultValue="">
          <option value="" disabled>Bitte wählen</option>
          <option>Pflegedienstleitung (m/w/d)</option>
          <option>Pflegefachkraft (m/w/d)</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="a-qual">Qualifikation</label>
        <select id="a-qual" name="qualification" required defaultValue="">
          <option value="" disabled>Bitte wählen</option>
          <option>Examinierte Pflegefachkraft (3-jährige Ausbildung)</option>
          <option>Examinierte Pflegefachkraft mit PDL-Weiterbildung</option>
          <option>Andere Qualifikation</option>
        </select>
      </div>
      <div className="field"><label htmlFor="a-start">Frühester Starttermin</label><input id="a-start" name="start" type="date" required /></div>
      {sent ? (
        <p className="form-done" role="status">Danke für Ihre Bewerbung – wir melden uns bei Ihnen.</p>
      ) : (
        <button className="btn btn-primary" type="submit">Bewerbung senden</button>
      )}
      <p className="small">Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Daten gemäß unserer <Link href="/datenschutz">Datenschutzerklärung</Link> zu.</p>
    </form>
  );
}
