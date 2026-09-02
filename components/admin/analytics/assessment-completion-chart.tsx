"use client";
import { Doughnut } from "react-chartjs-2";
import { ArcElement, Chart as ChartJS, Legend, Tooltip, type ChartData } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);
export function AssessmentCompletionChart({ labels, values, completion }: { labels: string[]; values: number[]; completion: string }) {
  const data: ChartData<"doughnut"> = { labels, datasets: [{ data: values, backgroundColor: ["#10b981", "#4f46e5", "#cbd5e1"], borderWidth: 0, hoverOffset: 5 }] };
  return <div className="relative h-full min-h-64"><Doughnut data={data} options={{ responsive: true, maintainAspectRatio: false, cutout: "70%", plugins: { legend: { position: "bottom", labels: { usePointStyle: true, boxWidth: 8 } }, tooltip: { enabled: true } } }} /><div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center pb-8"><strong className="text-3xl font-semibold text-ink">{completion}</strong><span className="text-xs text-muted">completed</span></div></div>;
}
