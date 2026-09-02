const stageOrder = ["Applied", "Shortlisted", "Interview Scheduled", "Selected", "Placed"];
export function ApplicationProgress({ stage }: { stage: string }) {
  const current = stageOrder.indexOf(stage);
  const progress = current < 0 ? 18 : ((current + 1) / stageOrder.length) * 100;
  return <div className="flex items-center gap-2"><div className="h-2 w-20 overflow-hidden rounded-full bg-slate-100"><div className="h-full rounded-full bg-indigo-500" style={{ width: `${progress}%` }} /></div><span className="text-xs font-semibold text-muted">{Math.round(progress)}%</span></div>;
}