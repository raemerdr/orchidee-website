import type { ReactNode } from "react";
import Image from "next/image";

// Text beside a photo in an arched frame (inner pages). `reverse` puts the photo on the right,
// `tint` gives the section the cream background, `box` adds a small note card on the photo.
export default function FeatureSplit({
  title,
  sub,
  eyebrow,
  image,
  imageAlt,
  reverse = false,
  grey = false,
  box,
  children,
  id,
}: {
  title: string;
  sub?: string;
  eyebrow?: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
  grey?: boolean;
  box?: ReactNode;
  children?: ReactNode;
  id?: string;
}) {
  return (
    <section className={`section${grey ? " section-cream" : ""}`} id={id}>
      <div className={`wrap split${reverse ? " reverse" : ""}`}>
        <div className="split-media">
          <div className="arch"><Image src={image} alt={imageAlt} fill sizes="(max-width: 720px) 100vw, 40vw" quality={75} /></div>
          {box && <div className="photo-note">{box}</div>}
        </div>
        <div className="split-copy">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h2>{title}</h2>
          {sub && <p className="lead">{sub}</p>}
          {children}
        </div>
      </div>
    </section>
  );
}
