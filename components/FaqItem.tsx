"use client";

import { useId, useState } from "react";

// Accordion row that slides open and closed (the native <details> can't animate in every browser).
export default function FaqItem({ q, a, defaultOpen = false, className }: { q: string; a: string; defaultOpen?: boolean; className?: string }) {
  const [open, setOpen] = useState(defaultOpen);
  const id = useId();
  return (
    <div className={`faq-item${open ? " is-open" : ""}${className ? ` ${className}` : ""}`}>
      <button type="button" className="faq-q" aria-expanded={open} aria-controls={id} onClick={() => setOpen((o) => !o)}>
        <span>{q}</span>
        <i aria-hidden />
      </button>
      <div className="faq-a" id={id} role="region" aria-hidden={!open}>
        <div><p>{a}</p></div>
      </div>
    </div>
  );
}
