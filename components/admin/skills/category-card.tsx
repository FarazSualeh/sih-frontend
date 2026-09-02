import { Card } from "@/components/ui/card";

export function CategoryCard({ title, count, popular, coverage }: { title: string; count: number; popular: string; coverage: number }) {
  return (
    <Card className="group p-5 transition-transform duration-200 hover:-translate-y-1 hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <div><p className="text-sm font-semibold text-ink">{title}</p><p className="mt-1 text-xs text-muted">{count} skills</p></div>
        <span className="rounded-lg bg-indigo-50 px-2 py-1 text-xs font-bold text-indigo-700">{coverage}%</span>
      </div>
      <div className="mt-5"><p className="text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-muted">Most popular</p><p className="mt-1 text-sm font-medium text-ink">{popular}</p></div>
      <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-slate-100"><div className="h-full rounded-full bg-indigo-500" style={{ width: `${coverage}%` }} /></div>
    </Card>
  );
}