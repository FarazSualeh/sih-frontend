import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AdminOpportunitiesPage() {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="mb-6">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-muted">Administration</p>
        <h1 className="mt-2 font-display text-4xl font-semibold tracking-[-0.06em] text-ink">Opportunities</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Opportunity review queue</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm leading-6 text-muted">This workspace can be used for role approval, internship validation, and opportunity moderation.</p>
        </CardContent>
      </Card>
    </div>
  );
}
