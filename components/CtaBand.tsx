import Link from "next/link";
import { site } from "@/lib/site";
import { ArrowIcon } from "./Icons";

// Closing call-to-action used on inner pages.
export default function CtaBand({ title = "Sprechen Sie mit uns.", text = "Rufen Sie an oder fordern Sie einen Rückruf an – wir beraten Sie persönlich." }: { title?: string; text?: string }) {
  return (
    <section className="section-tight">
      <div className="wrap">
        <div className="cta-band">
          <div>
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
          <div className="cta-actions">
            <Link className="btn btn-primary" href="/kontakt">Rückruf anfordern <ArrowIcon /></Link>
            <a className="btn btn-light" href={site.phoneHref}>{site.phone}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
