import { Badge } from "@/components/ui/badge";
import type { OpportunityStatus } from "@/lib/mock-data/opportunities";
import type { ApplicationStage } from "@/lib/mock-data/applications";

export function ApprovalStatusBadge({ status }: { status: OpportunityStatus | ApplicationStage }) {
  const variant = status === "Live" || status === "Placed" || status === "Selected" ? "success" : status === "Pending Approval" || status === "Shortlisted" || status === "Interview Scheduled" ? "warning" : status === "Rejected" || status === "Expired" ? "danger" : status === "Under Review" ? "info" : "default";
  return <Badge variant={variant}>{status}</Badge>;
}