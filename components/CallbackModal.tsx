"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { site } from "@/lib/site";
import CallbackForm from "./CallbackForm";
import { PhoneIcon } from "./Icons";

// Popup with the callback form. Any link or button marked `data-callback` opens it
// (the link's own href stays as a fallback if JavaScript is off).
export default function CallbackModal() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const opener = useRef<HTMLElement | null>(null);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const el = (e.target as HTMLElement | null)?.closest<HTMLElement>("[data-callback]");
      // Phones only: on desktop these links keep their normal behaviour.
      if (!el || e.metaKey || e.ctrlKey || !window.matchMedia("(max-width: 720px)").matches) return;
      e.preventDefault();
      opener.current = el;
      setOpen(true);
    };
    // Capture phase: runs before Next's <Link> handler, which then skips navigation.
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.body.classList.add("modal-open");
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", onKey);
      opener.current?.focus();
    };
  }, [open]);

  if (!mounted || !open) return null;
  return createPortal(
    <div className="cb-modal" role="dialog" aria-modal="true" aria-labelledby="cb-title" onMouseDown={(e) => e.target === e.currentTarget && setOpen(false)}>
      <div className="cb-panel">
        <button ref={closeRef} type="button" className="cb-close" onClick={() => setOpen(false)}>
          <span aria-hidden>×</span> Schließen
        </button>
        <CallbackForm
          idPrefix="cb-"
          title={
            <>
              <h2 className="form-title" id="cb-title">Rückruf anfordern</h2>
              <p className="cb-intro">Hinterlassen Sie Ihre Nummer. Wir rufen Sie zurück.</p>
            </>
          }
        />
        <a className="cb-call" href={site.phoneHref}><PhoneIcon /> Lieber gleich anrufen: {site.phone}</a>
      </div>
    </div>,
    document.body,
  );
}
