"use client";

import Link from "next/link";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site";
import { PhoneIcon } from "./Icons";

// Bottom call bar on phones. On the Karriere page the second button leads to the application form.
export default function StickyBar() {
  const pathname = usePathname();
  const onCareers = pathname === "/karriere";

  // Hide the bar while a form on the page is on screen, so it never covers fields or the send button.
  useEffect(() => {
    const forms = Array.from(document.querySelectorAll("main form"));
    if (!forms.length) return;
    const seen = new Set<Element>();
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => (e.isIntersecting ? seen.add(e.target) : seen.delete(e.target)));
      document.body.classList.toggle("on-form", seen.size > 0);
    }, { rootMargin: "0px 0px -15% 0px" });
    forms.forEach((f) => io.observe(f));
    return () => { io.disconnect(); document.body.classList.remove("on-form"); };
  }, [pathname]);

  return (
    <div className="sticky" aria-label="Schnellkontakt">
      <a className="btn btn-outline" href={site.phoneHref}><PhoneIcon /> Anrufen</a>
      {onCareers ? (
        <a className="btn btn-primary" href="#bewerbung">Bewerben</a>
      ) : (
        <Link className="btn btn-primary" href="/kontakt#rueckruf">Rückruf anfordern</Link>
      )}
    </div>
  );
}
