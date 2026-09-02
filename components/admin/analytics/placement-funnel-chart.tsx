"use client";
import { Bar } from "react-chartjs-2";
import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Tooltip, type ChartData } from "chart.js";
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);
export function PlacementFunnelChart({ labels, values, conversions }: { labels: string[]; values: number[]; conversions: string[] }) {
  const data: ChartData<"bar"> = { labels, datasets: [{ label: "People", data: values, backgroundColor: ["#4f46e5", "#6366f1", "#818cf8", "#10b981", "#059669"], borderRadius: 6, barPercentage: 0.72 }] };
  return <div className="relative h-full min-h-64"><Bar data={data} options={{ responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false }, tooltip: { enabled: true } }, scales: { y: { beginAtZero: true, grid: { color: "#edf0f5" } }, x: { grid: { display: false } } } }} /><div className="pointer-events-none absolute bottom-0 left-0 right-0 flex justify-around pb-1 text-[0.65rem] font-semibold text-muted">{conversions.map((conversion, index) => <span key={`${labels[index]}-${conversion}`}>{conversion}</span>)}</div></div>;
}
