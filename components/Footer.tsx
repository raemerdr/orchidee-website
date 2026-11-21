import Image from "next/image";
import Link from "next/link";
import { credit, site } from "@/lib/site";
import StickyBar from "./StickyBar";

// Footer column titles are h2 (styled small) so the heading order stays h1 → h2 → h3 on every page.
export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="wrap">
          <div className="foot">
            <div>
              <Image src="/logo.png" alt={site.name} width={195} height={44} />
              <p>Ambulanter Pflegedienst in Koblenz.<br />Ein Unternehmen der {site.group}.</p>
            </div>
            <div>
              <h2 className="foot-h">Kontakt</h2>
              <p>{site.street}<br />{site.city}</p>
              <a href={site.phoneHref}>Tel. {site.phone}</a>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </div>
            <div>
              <h2 className="foot-h">Seiten</h2>
              <Link href="/leistungen">Leistungen</Link>
              <Link href="/ueber-uns">Über uns</Link>
              <Link href="/kontakt">Kontakt / Anfrage</Link>
              <Link href="/karriere">Karriere</Link>
              <Link href="/impressum">Impressum</Link>
              <Link href="/datenschutz">Datenschutz</Link>
            </div>
          </div>
          <div className="fine">
            <p>© {new Date().getFullYear()} {site.company}</p>
            <p className="credit">
              {credit.label} <a href={credit.url} target="_blank" rel="noopener">{credit.name}</a>
            </p>
          </div>
        </div>
      </footer>

      {/* Mobile sticky call bar */}
      <StickyBar />
    </>
  );
}
