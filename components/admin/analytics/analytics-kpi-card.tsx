import type { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
export function AnalyticsKpiCard({ title, value, trend, description, icon: Icon, accent }: { title: string; value: string; trend: string; description: string; icon: LucideIcon; accent: string }) {
  return <Card className="h-full p-5 transition-transform duration-200 hover:-translate-y-1 hover:shadow-md"><div className="flex items-start justify-between gap-3"><div><p className="text-xs font-semibold uppercase tracking-[0.1em] text-muted">{title}</p><p className="mt-3 text-3xl font-semibold tracking-tight text-ink">{value}</p><p className="mt-2 text-xs font-semibold text-emerald-600">{trend}</p><p className="mt-1 text-xs text-muted">{description}</p></div><div className={`rounded-xl p-3 text-white ${accent}`}><Icon className="h-5 w-5" /></div></div></Card>;
}
