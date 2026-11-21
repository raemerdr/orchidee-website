"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site";

// Mobile call bar. On the Karriere page the second button leads to the application form.
export default function StickyBar() {
  const onCareers = usePathname() === "/karriere";
  return (
    <div className="sticky" aria-label="Schnellkontakt">
      <a className="btn btn-light" href={site.phoneHref}>Anrufen</a>
      {onCareers ? (
        <a className="btn btn-primary" href="#bewerbung">Bewerben</a>
      ) : (
        <Link className="btn btn-primary" href="/kontakt">Rückruf</Link>
      )}
    </div>
  );
}
