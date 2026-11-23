import type React from "react";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import { PhoneIcon } from "./Icons";

type Cta = "contact" | "apply" | "none";

// Inner page hero in Orchidee's own style: text on the warm cream panel, photo in an arched frame.
// Without `image` it is a plain title band.
export default function PageHero({
  label,
  title,
  lead,
  image,
  imagePosition = "center",
  cta = "contact",
}: {
  label: string;
  title: string;
  lead?: string;
  image?: string;
  imageAlt?: string;
  imagePosition?: string;
  cta?: Cta;
}) {
  return (
    <section className={`hero hero-page${image ? "" : " hero-plain"}`}>
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">{label}</p>
          <h1>{title}</h1>
          {lead && <p className="hero-lead">{lead}</p>}
          {cta === "contact" && image && (
            <div className="hero-ctas">
              <a className="btn btn-primary btn-lg" href={site.phoneHref}><PhoneIcon /> {site.phone}</a>
              <Link className="btn btn-outline btn-lg" href="/kontakt#rueckruf">Rückruf anfordern</Link>
            </div>
          )}
          {cta === "apply" && (
            <div className="hero-ctas">
              <a className="btn btn-primary btn-lg" href="#bewerbung">Jetzt bewerben</a>
              <a className="btn btn-outline btn-lg" href="#stellen">Offene Stellen</a>
            </div>
          )}
        </div>
        {image && (
          <div className="hero-media">
            <div className="arch"><Image src={image} alt="" fill priority sizes="(max-width: 720px) 100vw, 40vw" quality={75} style={{ objectPosition: imagePosition }} /></div>
          </div>
        )}
      </div>
    </section>
  );
}
