"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site";
import { PhoneIcon } from "./Icons";

type NavLink = { href: string; label: string };

// Hamburger + full-screen menu for tablet and mobile (desktop nav is hidden below 1080px).
export default function MobileMenu({ links }: { links: NavLink[] }) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => setMounted(true), []);

  // Close when the route changes.
  useEffect(() => setOpen(false), [pathname]);

  // Lock page scroll while open; Escape closes.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.body.classList.add("menu-open");
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.body.classList.remove("menu-open");
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        className="menu-btn"
        aria-label={open ? "Menü schließen" : "Menü öffnen"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((o) => !o)}
      >
        <span className={`burger${open ? " is-open" : ""}`} aria-hidden><i /><i /><i /></span>
        <span className="menu-word" aria-hidden>{open ? "Schließen" : "Menü"}</span>
      </button>

      {mounted && createPortal(
      <div id="mobile-menu" className={`mobile-menu${open ? " is-open" : ""}`} hidden={!open}>
        <nav aria-label="Mobile Navigation">
          <Link href="/" onClick={() => setOpen(false)}>Startseite</Link>
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} aria-current={pathname === l.href ? "page" : undefined}>
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="mobile-menu-actions">
          <a className="btn btn-light" href={site.phoneHref}><PhoneIcon /> {site.phone}</a>
          <Link className="btn btn-primary" href="/kontakt" data-callback onClick={() => setOpen(false)}>Rückruf anfordern</Link>
        </div>
      </div>,
      document.body,
      )}
    </>
  );
}
