type P = { size?: number };

export const PhoneIcon = ({ size = 18 }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
  </svg>
);

export const ArrowIcon = ({ size = 18 }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden>
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);

export const TeamIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
    <circle cx="9" cy="8" r="3.5" /><circle cx="17" cy="9" r="2.5" />
    <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M15 14.5c3 0 6 1.8 6 5" />
  </svg>
);
export const CrossIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><path d="M12 3v18M3 12h18" /></svg>
);
export const HomeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><path d="M3 11 12 4l9 7v9H3z" /></svg>
);
export const DocIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
    <path d="M14 3H6v18h12V7z" /><path d="M14 3v4h4M9 13h6M9 17h6" />
  </svg>
);

/* Two-colour animated icons for "Warum Orchidee".
   .ic-line = outline (currentColor) that draws in, .ic-accent = magenta detail that gently pulses.
   Animation is CSS-only (see globals.css) and switched off for reduced motion. */
const duo = { width: 34, height: 34, viewBox: "0 0 32 32", fill: "none", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true };

export const DuoTeamIcon = () => (
  <svg {...duo} className="duo duo-team">
    <path className="ic-line" stroke="currentColor" d="M5 26c0-4.4 3.1-7.5 7-7.5s7 3.1 7 7.5" pathLength={1} />
    <circle className="ic-line" stroke="currentColor" cx="12" cy="11.5" r="4" pathLength={1} />
    <path className="ic-line" stroke="currentColor" d="M18.5 19.3c.9-.5 1.9-.8 3-.8 3.4 0 5.5 2.9 5.5 7.5" pathLength={1} />
    <circle className="ic-line" stroke="currentColor" cx="21.5" cy="12.5" r="3.2" pathLength={1} />
    <path className="ic-accent" fill="var(--magenta)" d="M16.8 4.2c-.7-.8-2-.8-2.7 0-.7.8-.7 2 0 2.8l1.4 1.4 1.4-1.4c.7-.8.7-2 0-2.8z" transform="translate(.6 -.4)" />
  </svg>
);

export const DuoNurseIcon = () => (
  <svg {...duo} className="duo duo-nurse">
    <path className="ic-line" stroke="currentColor" d="M16 3.5 26 7v8.2c0 6.2-4.2 11-10 13.3C10.2 26.2 6 21.4 6 15.2V7l10-3.5z" pathLength={1} />
    <path className="ic-accent" fill="var(--magenta)" d="M14.4 10h3.2v3.6h3.6v3.2h-3.6v3.6h-3.2v-3.6h-3.6v-3.2h3.6z" />
  </svg>
);

export const DuoHomeIcon = () => (
  <svg {...duo} className="duo duo-home">
    <path className="ic-line" stroke="currentColor" d="M4.5 14.5 16 5l11.5 9.5" pathLength={1} />
    <path className="ic-line" stroke="currentColor" d="M7.5 12.5V27h17V12.5" pathLength={1} />
    <path className="ic-accent" fill="var(--magenta)" d="M18.3 16.2c-.9-1-2.4-1-3.3 0l-.3.3-.3-.3c-.9-1-2.4-1-3.3 0-.9 1-.9 2.5 0 3.5l3.6 3.7 3.6-3.7c.9-1 .9-2.5 0-3.5z" transform="translate(1.3 0)" />
  </svg>
);

export const DuoPaperIcon = () => (
  <svg {...duo} className="duo duo-paper">
    <path className="ic-line" stroke="currentColor" d="M19 3.5H8.5A1.5 1.5 0 0 0 7 5v22a1.5 1.5 0 0 0 1.5 1.5h15A1.5 1.5 0 0 0 25 27V9.5L19 3.5z" pathLength={1} />
    <path className="ic-line" stroke="currentColor" d="M19 3.5v6h6M11 13h7" pathLength={1} />
    <path className="ic-accent ic-check" stroke="var(--magenta)" strokeWidth="2.4" d="m11 20.5 3 3 6.5-6.5" pathLength={1} />
  </svg>
);
