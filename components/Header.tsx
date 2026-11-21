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

export default function Header() {
  return (
    <header className="header">
      <Link href="/" className="logo-pill" aria-label={`${site.name} – Startseite`}>
        <Image src="/logo.png" alt={site.name} width={151} height={34} priority />
      </Link>
      <div className="nav-pill">
        <nav aria-label="Hauptnavigation">
          {navLinks.map((l) => <Link key={l.href} href={l.href}>{l.label}</Link>)}
        </nav>
        <a className="nav-phone" href={site.phoneHref}>
          <PhoneIcon /> {site.phone}
        </a>
        <Link className="btn btn-dark" href="/kontakt" data-callback>Rückruf anfordern</Link>
        <MobileMenu links={navLinks} />
      </div>
      <HeaderHeroState />
    </header>
  );
}
