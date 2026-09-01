import { Card, CardContent } from "@/components/ui/card";

interface UserStatCardProps {
  label: string;
  value: string;
  detail: string;
  accent?: "blue" | "purple" | "green" | "amber";
}

const accentStyles = {
  blue: "bg-blue-500/10 text-blue-600 ring-blue-500/20",
  purple: "bg-violet-500/10 text-violet-600 ring-violet-500/20",
  green: "bg-emerald-500/10 text-emerald-600 ring-emerald-500/20",
  amber: "bg-amber-500/10 text-amber-600 ring-amber-500/20",
};

export function UserStatCard({ label, value, detail, accent = "blue" }: UserStatCardProps) {
  return (
    <Card className="border border-slate-200 bg-white shadow-sm">
      <CardContent className="p-4">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-sm text-slate-500">{label}</p>
            <p className="mt-2 text-2xl font-semibold text-slate-900">{value}</p>
          </div>
          <div className={`flex h-11 w-11 items-center justify-center rounded-xl ring-1 ${accentStyles[accent]}`}>
            <span className="text-sm font-semibold">{value.slice(0, 1)}</span>
          </div>
        </div>
        <p className="mt-3 text-xs text-slate-500">{detail}</p>
      </CardContent>
    </Card>
  );
}
