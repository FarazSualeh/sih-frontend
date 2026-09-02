import { Badge } from "@/components/ui/badge";
import type { AssessmentStatus, Difficulty } from "@/lib/mock-data/assessments";
export function AssessmentStatusBadge({ status }: { status: AssessmentStatus | Difficulty }) { const variant = status === "Active" || status === "Completed" ? "success" : status === "Scheduled" || status === "Intermediate" ? "info" : status === "Draft" || status === "Beginner" ? "warning" : status === "Archived" || status === "Advanced" ? "danger" : "default"; return <Badge variant={variant}>{status}</Badge>; }
