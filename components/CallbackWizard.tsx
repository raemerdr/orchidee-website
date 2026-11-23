"use client";

import { useState } from "react";

// Phone callback form: one question per screen with large option cards
// and a fixed "Weiter" button, so older visitors only decide one thing at a time.
// TODO: submit to HubSpot (routing still open – see brief).
type Option = { value: string; note?: string };
const prescribed: Option[] = [{ value: "Ja" }, { value: "Nein" }, { value: "Weiß nicht" }];
// The short notes are plain-word simplifications of the official levels (client to approve).
const levels: Option[] = [
  { value: "Pflegegrad 3", note: "Hilfe mehrmals am Tag" },
  { value: "Pflegegrad 4", note: "Hilfe bei fast allem" },
  { value: "Pflegegrad 5", note: "Pflege rund um die Uhr" },
  { value: "Beantragt oder noch keiner" },
  { value: "Weiß ich nicht", note: "Wir klären das am Telefon." },
];
const STEPS = 4;

export default function CallbackWizard({ who, titleId }: { who?: string; titleId: string }) {
  const [step, setStep] = useState(0);
  const [verordnung, setVerordnung] = useState("");
  const [pflegegrad, setPflegegrad] = useState("");
  const [ort, setOrt] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [sent, setSent] = useState(false);
  // The relative card asks about the person who needs care; the patient card asks about "Sie".
  const forRelative = who === "angehoerige";

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
  const options = (list: Option[], value: string, set: (v: string) => void, group: string) => (
    <div className="wz-options" role="radiogroup" aria-labelledby={titleId}>
      {list.map((o) => (
        <label key={o.value} className={`wz-option${value === o.value ? " is-on" : ""}`}>
          <input type="radio" name={group} value={o.value} checked={value === o.value} onChange={() => set(o.value)} />
          <span>{o.value}{o.note && <small>{o.note}</small>}</span>
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
          <h2 id={titleId}>{forRelative ? "Hat ein Arzt Pflege für Ihr Familienmitglied verordnet?" : "Hat ein Arzt Pflege verordnet?"}</h2>
          <p className="wz-hint">Zum Beispiel Insulin, Verbände oder Medikamente.</p>
          {options(prescribed, verordnung, setVerordnung, "verordnung")}
        </>
      )}
      {step === 1 && (
        <>
          <h2 id={titleId}>{forRelative ? "Hat Ihr Familienmitglied einen Pflegegrad?" : "Gibt es einen Pflegegrad?"}</h2>
          <p className="wz-hint">Der Pflegegrad steht in dem Brief der Pflegekasse.</p>
          {options(levels, pflegegrad, setPflegegrad, "pflegegrad")}
        </>
      )}
      {step === 2 && (
        <>
          <h2 id={titleId}>{forRelative ? "Wo wohnt Ihr Familienmitglied?" : "Wo wohnen Sie?"}</h2>
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
          <p className="wz-hint">{forRelative ? "Wir rufen Sie zurück und besprechen alles mit Ihnen." : "Wir rufen Sie unter dieser Nummer zurück."}</p>
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
        <button key={step < STEPS - 1 ? "next" : "send"} type="submit" className="btn btn-primary wz-next" disabled={!canNext}>
          {step < STEPS - 1 ? "Weiter" : "Rückruf anfordern"}
        </button>
      </div>
    </form>
  );
}
