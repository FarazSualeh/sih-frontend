import type { ReactNode } from "react";

export function SectionHeader({
  eyebrow,
  title,
  action,
}: {
  eyebrow: string;
  title: string;
  action?: ReactNode;
}) {
  return (
    <div className="mb-5 flex items-end justify-between gap-3">
      <div>
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-muted">{eyebrow}</p>
        <h2 className="mt-2 font-display text-[1.7rem] font-semibold tracking-[-0.05em] text-ink">{title}</h2>
      </div>

      {action ? <div>{action}</div> : null}
    </div>
  );
}
