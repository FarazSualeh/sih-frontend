import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AdminAnalyticsPage() {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="mb-6">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-muted">Administration</p>
        <h1 className="mt-2 font-display text-4xl font-semibold tracking-[-0.06em] text-ink">Analytics</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Engagement and trend analytics</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm leading-6 text-muted">This section can later show funnel metrics, conversion insights, readiness trends, and platform health charts.</p>
        </CardContent>
      </Card>
    </div>
  );
}
