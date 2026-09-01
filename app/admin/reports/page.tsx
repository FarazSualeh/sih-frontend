import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AdminReportsPage() {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="mb-6">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-muted">Administration</p>
        <h1 className="mt-2 font-display text-4xl font-semibold tracking-[-0.06em] text-ink">Reports</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Generated reports</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm leading-6 text-muted">Use this dashboard to manage exports, compliance summaries, and operational reporting for the platform.</p>
        </CardContent>
      </Card>
    </div>
  );
}
