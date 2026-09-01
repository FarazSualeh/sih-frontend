import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AdminApplicationsPage() {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="mb-6">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-muted">Administration</p>
        <h1 className="mt-2 font-display text-4xl font-semibold tracking-[-0.06em] text-ink">Applications</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Application pipeline</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm leading-6 text-muted">Track student applications, industry responses, and application throughput by opportunity type.</p>
        </CardContent>
      </Card>
    </div>
  );
}
