import { TrendingUp } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export function SkillCard({ name, demandScore, companiesDemanding, growth }: { name: string; demandScore: number; companiesDemanding: number; growth: number }) {
  return (
    <Card className="p-4 transition-transform duration-200 hover:-translate-y-1 hover:shadow-md">
      <div className="flex items-center justify-between gap-3"><p className="font-semibold text-ink">{name}</p><Badge variant="info">Emerging</Badge></div>
      <div className="mt-5 flex items-end justify-between"><div><p className="text-xs text-muted">Demand score</p><p className="mt-1 text-2xl font-semibold tracking-tight text-indigo-700">{demandScore}</p></div><div className="text-right"><p className="text-xs text-muted">Hiring companies</p><p className="mt-1 text-sm font-semibold text-ink">{companiesDemanding}</p></div></div>
      <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-emerald-600"><TrendingUp className="h-3.5 w-3.5" />{growth}% growth this quarter</div>
    </Card>
  );
}