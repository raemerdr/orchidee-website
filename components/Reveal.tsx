"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Gentle fade-up for content below the hero as it scrolls into view.
// Content is fully visible without JS (the hiding class is only added here),
// and nothing moves for visitors who ask for reduced motion.
const TARGETS = [
  ".section-head", ".card", ".split-media", ".split-copy", ".video-frame", ".cost", ".costs-foot", ".step",
  ".faq-head", ".faq-item", ".value", ".team-card", ".role", ".cta-card", ".trust-list li", ".prose",
].join(",");

export default function Reveal() {
  const pathname = usePathname();
  useEffect(() => {
    // No fade-ins for reduced-motion users or on phones (older visitors: calm and simple).
    if (window.matchMedia("(prefers-reduced-motion: reduce), (max-width: 720px)").matches) return;

    const els = Array.from(document.querySelectorAll<HTMLElement>(TARGETS));
    els.forEach((el) => {
      // Stagger siblings in grids (cards, steps) by their position.
      const i = el.parentElement ? Array.from(el.parentElement.children).indexOf(el) : 0;
      el.style.setProperty("--reveal-delay", `${Math.min(i, 5) * 70}ms`);
      el.classList.add("reveal");
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
