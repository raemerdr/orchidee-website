import Image from "next/image";
import Link from "next/link";
import { credit, site } from "@/lib/site";
import StickyBar from "./StickyBar";

// Dark aubergine footer. Column titles are h2 (styled small) so the heading order stays h1 → h2 → h3.
export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="wrap">
          <div className="foot">
            <div className="foot-brand">
              <span className="foot-logo"><Image src="/logo.png" alt={site.name} width={178} height={40} /></span>
              <p>Ambulanter Pflegedienst in Koblenz.<br />Ein Unternehmen der {site.group}.</p>
              <a className="foot-phone" href={site.phoneHref}>{site.phone}</a>
            </div>
            <div>
              <h2 className="foot-h">Kontakt</h2>
              <p>{site.company}<br />{site.street}<br />{site.city}</p>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </div>
            <div>
              <h2 className="foot-h">Seiten</h2>
              <Link href="/leistungen">Leistungen</Link>
              <Link href="/ueber-uns">Über uns</Link>
              <Link href="/karriere">Karriere</Link>
              <Link href="/kontakt#rueckruf">Rückruf anfordern</Link>
            </div>
          </div>
          <div className="fine">
            <p>© {new Date().getFullYear()} {site.company}</p>
            <p className="fine-links">
              <Link href="/impressum">Impressum</Link>
              <Link href="/datenschutz">Datenschutz</Link>
              <span className="credit">{credit.label} <a href={credit.url} target="_blank" rel="noopener">{credit.name}</a></span>
            </p>
          </div>
        </div>
      </footer>
      <StickyBar />
    </>
  );
}
