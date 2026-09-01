import type { LucideIcon } from "lucide-react";

import { Card } from "@/components/ui/card";

export function KpiCard({
  title,
  value,
  trend,
  icon: Icon,
  accent,
}: {
  title: string;
  value: string;
  trend: string;
  icon: LucideIcon;
  accent: string;
}) {
  return (
    <Card className="h-full">
      <div className="flex items-start justify-between gap-4 p-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">{title}</p>
          <h3 className="mt-3 font-display text-3xl font-semibold tracking-[-0.06em] text-ink">{value}</h3>
          <p className="mt-2 text-[0.7rem] font-medium text-olive">{trend}</p>
        </div>

        <div className={`flex h-11 w-11 items-center justify-center rounded-xl text-white ${accent}`}>
          <Icon className="h-5 w-5" />
        </div>
      </div>
    </Card>
  );
}
