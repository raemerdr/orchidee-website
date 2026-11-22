"use client";

import { useState } from "react";

// Phone callback form: one question per screen with large option cards
// and a fixed "Weiter" button, so older visitors only decide one thing at a time.
// TODO: submit to HubSpot (routing still open – see brief).
const prescribed = ["Ja", "Nein", "Weiß nicht"];
const levels = ["Pflegegrad 1 oder 2", "Pflegegrad 3", "Pflegegrad 4", "Pflegegrad 5", "Beantragt oder noch keiner"];
const STEPS = 4;

export default function CallbackWizard({ who, titleId }: { who?: string; titleId: string }) {
  const [step, setStep] = useState(0);
  const [verordnung, setVerordnung] = useState("");
  const [pflegegrad, setPflegegrad] = useState("");
  const [ort, setOrt] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="wz wz-done" role="status">
        <span className="wz-check" aria-hidden>✓</span>
        <h2 id={titleId}>Danke, {name.trim().split(" ")[0] || "wir haben Ihre Nummer"}.</h2>
        <p>Wir rufen Sie zurück.</p>
      </div>
    );
  }

  const canNext = step === 0 ? !!verordnung : step === 1 ? !!pflegegrad : step === 2 ? true : name.trim() !== "" && phone.trim() !== "";
  const options = (list: string[], value: string, set: (v: string) => void, group: string) => (
    <div className="wz-options" role="radiogroup" aria-labelledby={titleId}>
      {list.map((o) => (
        <label key={o} className={`wz-option${value === o ? " is-on" : ""}`}>
          <input type="radio" name={group} value={o} checked={value === o} onChange={() => set(o)} />
          <span>{o}</span>
        </label>
      ))}
    </div>
  );

  return (
    <form
      className="wz"
      onSubmit={(e) => {
        e.preventDefault();
        if (!canNext) return;
        if (step < STEPS - 1) setStep(step + 1);
        else setSent(true);
      }}
    >
      <input type="hidden" name="fuer" value={who ?? ""} />
      <p className="wz-progress">Frage {step + 1} von {STEPS}</p>

      {step === 0 && (
        <>
          <h2 id={titleId}>Hat ein Arzt Pflege verordnet?</h2>
          <p className="wz-hint">Zum Beispiel Insulin, Verbände oder Medikamente.</p>
          {options(prescribed, verordnung, setVerordnung, "verordnung")}
        </>
      )}
      {step === 1 && (
        <>
          <h2 id={titleId}>Gibt es einen Pflegegrad?</h2>
          <p className="wz-hint">Wählen Sie aus, was am besten passt.</p>
          {options(levels, pflegegrad, setPflegegrad, "pflegegrad")}
        </>
      )}
      {step === 2 && (
        <>
          <h2 id={titleId}>Wo wohnen Sie?</h2>
          <p className="wz-hint">Wir fahren in Koblenz und Umgebung.</p>
          <label className="wz-field">
            <span>Wohnort</span>
            <input name="ort" value={ort} onChange={(e) => setOrt(e.target.value)} placeholder="z. B. Koblenz-Lützel" autoComplete="address-level2" />
          </label>
        </>
      )}
      {step === 3 && (
        <>
          <h2 id={titleId}>Wie erreichen wir Sie?</h2>
          <p className="wz-hint">Wir rufen Sie unter dieser Nummer zurück.</p>
          <label className="wz-field">
            <span>Ihr Name</span>
            <input name="name" value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" required />
          </label>
          <label className="wz-field">
            <span>Telefonnummer</span>
            <input name="phone" type="tel" inputMode="tel" value={phone} onChange={(e) => setPhone(e.target.value)} autoComplete="tel" required />
          </label>
          <p className="wz-small">Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Daten gemäß unserer <a href="/datenschutz">Datenschutzerklärung</a> zu.</p>
        </>
      )}

      <div className="wz-foot">
        {step > 0 && <button type="button" className="btn wz-back" onClick={() => setStep(step - 1)}>Zurück</button>}
        <button type="submit" className="btn btn-primary wz-next" disabled={!canNext}>
          {step < STEPS - 1 ? "Weiter" : "Rückruf anfordern"}
        </button>
      </div>
    </form>
  );
}
