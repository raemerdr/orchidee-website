"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Adds `on-hero` to <body> while the header floats over the full photo hero (home page only),
// so the header can go transparent there and turn solid once you scroll past it.
export default function HeaderHeroState() {
  const pathname = usePathname();
  useEffect(() => {
    const hero = document.querySelector<HTMLElement>("main > .hero, main > .page-hero.has-img, main > .enquiry-hero");
    const body = document.body;
    if (!hero) {
      body.classList.remove("on-hero");
      return;
    }
    let raf = 0;
    const update = () => {
      raf = 0;
      // On phones the home hero is the light version: "on hero" lasts while its call button is in view.
      const call = document.querySelector<HTMLElement>(".mhero-call");
      const el = call && call.offsetParent ? call : hero;
      body.classList.toggle("on-hero", el.getBoundingClientRect().bottom > 90);
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
      body.classList.remove("on-hero");
    };
  }, [pathname]);
  return null;
}
