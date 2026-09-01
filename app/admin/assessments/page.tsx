import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AdminAssessmentsPage() {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="mb-6">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-muted">Administration</p>
        <h1 className="mt-2 font-display text-4xl font-semibold tracking-[-0.06em] text-ink">Assessments</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Assessment management</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm leading-6 text-muted">Track active assessments, review completion trends, and manage admin-created evaluation cycles.</p>
        </CardContent>
      </Card>
    </div>
  );
}
