import { Badge } from "@/components/ui/badge";

export function DemandBadge({ score, label }: { score?: number; label?: "High Gap" | "Medium Gap" | "Low Gap" }) {
  const gap = label ?? (score !== undefined && score >= 70 ? "High Gap" : score !== undefined && score >= 45 ? "Medium Gap" : "Low Gap");
  const variant = gap === "High Gap" ? "danger" : gap === "Medium Gap" ? "warning" : "success";
  return <Badge variant={variant}>{gap}</Badge>;
}