"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Body classes for the fixed bars:
// - `scrolled` once the page moves (header gets a fine line)
// - `on-hero` while the page hero with its own call buttons is on screen (bottom call bar stays hidden)
export default function HeaderHeroState() {
  const pathname = usePathname();
  useEffect(() => {
    const body = document.body;
    const hero = document.querySelector<HTMLElement>("main > .hero");
    const update = () => {
      body.classList.toggle("scrolled", window.scrollY > 8);
      const btns = hero?.querySelector<HTMLElement>(".hero-ctas");
      body.classList.toggle("on-hero", !!btns && btns.getBoundingClientRect().bottom > 72);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      body.classList.remove("on-hero", "scrolled");
    };
  }, [pathname]);
  return null;
}
