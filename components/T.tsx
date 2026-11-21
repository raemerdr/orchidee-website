import type { ReactNode } from "react";

// Two wordings of the same text: `d` shows on desktop, `m` on phones (≤ 720px).
// Desktop keeps the original copy; phones get the plainer version for older visitors.
export default function T({ d, m }: { d: ReactNode; m: ReactNode }) {
  return (
    <>
      <bdi className="only-d">{d}</bdi>
      <bdi className="only-m">{m}</bdi>
    </>
  );
}
