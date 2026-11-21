import type React from "react";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import { ArrowIcon, PhoneIcon } from "./Icons";

type Cta = "contact" | "apply" | "none";

// Inner page header. With `image` it is a full-bleed photo hero like the home page
// (dark overlay, white text, call-to-action); without one it stays a simple light header (legal pages).
export default function PageHero({
  label,
  title,
  lead,
  image,
  imageAlt = "",
  imagePosition = "center",
  imagePositionMobile,
  cta = "contact",
  tags,
}: {
  label: string;
  title: string;
  lead?: string;
  image?: string;
  imageAlt?: string;
  imagePosition?: string;
  imagePositionMobile?: string;
  cta?: Cta;
  tags?: string[];
}) {
  if (!image) {
    return (
      <section className="page-hero">
        <div className="wrap">
          <span className="label">{label}</span>
          <h1>{title}</h1>
          {lead && <p className="lead">{lead}</p>}
        </div>
      </section>
    );
  }
  return (
    <section className="page-hero has-img">
      <div className="page-hero-bg" style={{ "--pos": imagePosition, "--pos-m": imagePositionMobile ?? imagePosition } as React.CSSProperties}>
        <Image src={image} alt={imageAlt} fill priority sizes="100vw" quality={70} />
      </div>
      <div className="wrap">
        <div className="kicker"><b aria-hidden>#</b> {label}</div>
        <h1>{title}</h1>
        {lead && <p className="page-hero-lead">{lead}</p>}
        {cta === "contact" && (
          <div className="hero-ctas">
            <Link className="btn btn-primary" href="/kontakt" data-callback>Rückruf anfordern <span className="d-only"><ArrowIcon /></span></Link>
            <a className="btn btn-ghost" href={site.phoneHref} aria-label={`${site.phone} anrufen`}><PhoneIcon /> <span className="m-only">Jetzt anrufen:&nbsp;</span>{site.phone}</a>
          </div>
        )}
        {cta === "apply" && (
          <div className="hero-ctas">
            <a className="btn btn-primary" href="#bewerbung">Jetzt bewerben <ArrowIcon /></a>
            <a className="btn btn-ghost" href="#stellen">Offene Stellen</a>
          </div>
        )}
        {tags && <div className="tags">{tags.map((t) => <span key={t}>{t}</span>)}</div>}
      </div>
    </section>
  );
}
