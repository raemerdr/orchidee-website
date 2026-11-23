import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import { PhoneIcon } from "./Icons";
import MobileMenu from "./MobileMenu";
import HeaderHeroState from "./HeaderHeroState";

export const navLinks = [
  { href: "/leistungen", label: "Leistungen" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/karriere", label: "Karriere" },
  { href: "/kontakt", label: "Kontakt" },
];

// One calm white bar: logo, navigation, phone number with a short note, callback button.
// Below 1080px the navigation moves into the "Menü" panel.
export default function Header() {
  return (
    <header className="header">
      <div className="wrap header-in">
        <Link href="/" className="logo" aria-label={`${site.name} – Startseite`}>
          <Image src="/logo.png" alt={site.name} width={178} height={40} priority />
        </Link>
        <nav className="nav" aria-label="Hauptnavigation">
          {navLinks.map((l) => <Link key={l.href} href={l.href}>{l.label}</Link>)}
        </nav>
        <div className="header-actions">
          <a className="header-phone" href={site.phoneHref} aria-label={`${site.phone} anrufen`}>
            <span className="header-phone-ic"><PhoneIcon size={20} /></span>
            <span className="header-phone-txt"><small>Rufen Sie uns an</small>{site.phone}</span>
          </a>
          <Link className="btn btn-primary header-cb" href="/kontakt#rueckruf">Rückruf anfordern</Link>
          <MobileMenu links={navLinks} />
        </div>
      </div>
      <HeaderHeroState />
    </header>
  );
}
