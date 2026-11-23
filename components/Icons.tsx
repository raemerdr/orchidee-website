// Thin line icons in one style (1.7 stroke, round ends). Colour comes from `currentColor`.
type P = { size?: number };
const base = (size: number) => ({ width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true });

export const PhoneIcon = ({ size = 20 }: P) => (
  <svg {...base(size)}><path d="M21.5 16.6v2.9a1.9 1.9 0 0 1-2.1 1.9 18.9 18.9 0 0 1-8.2-2.9 18.6 18.6 0 0 1-5.7-5.7A18.9 18.9 0 0 1 2.6 4.6 1.9 1.9 0 0 1 4.5 2.5h2.9a1.9 1.9 0 0 1 1.9 1.6c.1.9.4 1.8.7 2.7a1.9 1.9 0 0 1-.4 2L8.3 10a15.2 15.2 0 0 0 5.7 5.7l1.2-1.2a1.9 1.9 0 0 1 2-.4c.9.3 1.8.6 2.7.7a1.9 1.9 0 0 1 1.6 1.8z" /></svg>
);
export const ArrowIcon = ({ size = 20 }: P) => (
  <svg {...base(size)}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);
export const CheckIcon = ({ size = 20 }: P) => (
  <svg {...base(size)} strokeWidth={2.2}><path d="m5 12.5 4.5 4.5L19 7.5" /></svg>
);
export const PlayIcon = ({ size = 28 }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden><path d="M8 5.5v13a1 1 0 0 0 1.5.86l11-6.5a1 1 0 0 0 0-1.72l-11-6.5A1 1 0 0 0 8 5.5z" fill="currentColor" /></svg>
);
export const StarIcon = ({ size = 20 }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden><path fill="currentColor" d="m12 2.6 2.8 5.9 6.5.8-4.8 4.5 1.2 6.4L12 17l-5.7 3.2 1.2-6.4-4.8-4.5 6.5-.8z" /></svg>
);
/** Nurse / medical care: shield with a cross */
export const CareIcon = ({ size = 28 }: P) => (
  <svg {...base(size)}><path d="M12 2.8 19.5 5.6v6c0 4.7-3.2 8.3-7.5 9.9-4.3-1.6-7.5-5.2-7.5-9.9v-6L12 2.8z" /><path d="M12 8.5v6M9 11.5h6" /></svg>
);
/** Help in daily life: hand holding a heart */
export const HandIcon = ({ size = 28 }: P) => (
  <svg {...base(size)}><path d="M3 15.5h3l4.2 1.6c.7.3 1.5.2 2.1-.2l5.6-3.6a1.5 1.5 0 0 0-1.6-2.5l-3.6 2" /><path d="M6 20.5h3.5l5.5-1.5 5.5-3.5" /><path d="M14.8 4.4a2.1 2.1 0 0 0-3 0l-.3.3-.3-.3a2.1 2.1 0 1 0-3 3l3.3 3.3 3.3-3.3a2.1 2.1 0 0 0 0-3z" /></svg>
);
/** Costs / paperwork */
export const DocIcon = ({ size = 28 }: P) => (
  <svg {...base(size)}><path d="M14 2.8H7A1.8 1.8 0 0 0 5.2 4.6v14.8A1.8 1.8 0 0 0 7 21.2h10a1.8 1.8 0 0 0 1.8-1.8V7.6L14 2.8z" /><path d="M14 2.8v4.8h4.8M8.8 12.5h6.4M8.8 16h4.2" /></svg>
);
export const TeamIcon = ({ size = 28 }: P) => (
  <svg {...base(size)}><circle cx="9" cy="8" r="3.2" /><path d="M3 20c0-3.4 2.7-6 6-6s6 2.6 6 6" /><circle cx="17" cy="9" r="2.5" /><path d="M16 14.2c2.9-.3 5 1.7 5 5" /></svg>
);
export const HomeIcon = ({ size = 28 }: P) => (
  <svg {...base(size)}><path d="M3.5 11 12 4l8.5 7" /><path d="M5.8 9.5v10.7h12.4V9.5" /><path d="M10 20.2v-5.4h4v5.4" /></svg>
);
export const PinIcon = ({ size = 28 }: P) => (
  <svg {...base(size)}><path d="M12 21s-6.8-6-6.8-11.2a6.8 6.8 0 1 1 13.6 0C18.8 15 12 21 12 21z" /><circle cx="12" cy="9.8" r="2.4" /></svg>
);
export const ClockIcon = ({ size = 28 }: P) => (
  <svg {...base(size)}><circle cx="12" cy="12" r="8.8" /><path d="M12 7.5V12l3 2" /></svg>
);
export const MailIcon = ({ size = 28 }: P) => (
  <svg {...base(size)}><rect x="3" y="5.5" width="18" height="13" rx="2" /><path d="m3.8 7 8.2 6 8.2-6" /></svg>
);

/* Two-colour icons: aubergine outline with a magenta detail (used in the hero promises). */
const duo = { width: 30, height: 30, viewBox: "0 0 32 32", fill: "none", strokeWidth: 1.9, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true };
export const DuoTeamIcon = () => (
  <svg {...duo}>
    <circle cx="12" cy="11.5" r="4" stroke="#2e1a3c" />
    <path d="M5 26c0-4.4 3.1-7.5 7-7.5s7 3.1 7 7.5" stroke="#2e1a3c" />
    <circle cx="21.5" cy="12.5" r="3.2" stroke="#2e1a3c" />
    <path d="M18.5 19.3c.9-.5 1.9-.8 3-.8 3.4 0 5.5 2.9 5.5 7.5" stroke="#2e1a3c" />
    <path fill="#c8006c" d="M17.4 3.8c-.7-.8-2-.8-2.7 0-.7.8-.7 2 0 2.8L16 8l1.4-1.4c.7-.8.7-2 0-2.8z" />
  </svg>
);
export const DuoNurseIcon = () => (
  <svg {...duo}>
    <path d="M16 3.5 26 7v8.2c0 6.2-4.2 11-10 13.3C10.2 26.2 6 21.4 6 15.2V7l10-3.5z" stroke="#2e1a3c" />
    <path fill="#c8006c" d="M14.4 10h3.2v3.6h3.6v3.2h-3.6v3.6h-3.2v-3.6h-3.6v-3.2h3.6z" />
  </svg>
);
export const DuoPaperIcon = () => (
  <svg {...duo}>
    <path d="M19 3.5H8.5A1.5 1.5 0 0 0 7 5v22a1.5 1.5 0 0 0 1.5 1.5h15A1.5 1.5 0 0 0 25 27V9.5L19 3.5z" stroke="#2e1a3c" />
    <path d="M19 3.5v6h6M11 13h7" stroke="#2e1a3c" />
    <path d="m11 20.5 3 3 6.5-6.5" stroke="#c8006c" strokeWidth="2.6" />
  </svg>
);
