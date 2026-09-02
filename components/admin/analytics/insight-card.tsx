import { Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
export function InsightCard({ title, detail, tag }: { title: string; detail: string; tag?: string }) {
  return <Card className="p-5 transition-transform duration-200 hover:-translate-y-1 hover:shadow-md"><div className="flex items-start gap-3"><div className="rounded-xl bg-indigo-50 p-2.5 text-indigo-700"><Sparkles className="h-4 w-4" /></div><div className="min-w-0"><div className="flex flex-wrap items-start justify-between gap-2"><p className="font-semibold text-ink">{title}</p>{tag && <Badge variant="info">{tag}</Badge>}</div><p className="mt-2 text-sm leading-6 text-muted">{detail}</p></div></div></Card>;
}
