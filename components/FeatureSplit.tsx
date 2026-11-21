import Image from "next/image";
import type { ReactNode } from "react";

// Text + photo section used on the inner pages. `badge` floats on the photo.
export default function FeatureSplit({
  label,
  title,
  lead,
  image,
  imageAlt,
  reverse = false,
  badge,
  children,
  id,
}: {
  label: string;
  title: string;
  lead?: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
  badge?: ReactNode;
  children?: ReactNode;
  id?: string;
}) {
  return (
    <section className="section-tight" id={id}>
      <div className={`wrap feature${reverse ? " is-reverse" : ""}`}>
        <div className="feature-text">
          <span className="label">{label}</span>
          <h2>{title}</h2>
          {lead && <p className="lead">{lead}</p>}
          {children}
        </div>
        <div className="feature-photo">
          <Image src={image} alt={imageAlt} fill sizes="(max-width: 1080px) 100vw, 45vw" quality={75} />
          {badge && <div className="feature-badge">{badge}</div>}
        </div>
      </div>
    </section>
  );
}
