"use client";
import { useEffect, useRef } from "react";
import { Line } from "react-chartjs-2";
import { CategoryScale, Chart as ChartJS, Filler, Legend, LineElement, LinearScale, PointElement, Tooltip, type ChartData } from "chart.js";
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Filler, Tooltip, Legend);
export function ApplicationTrendChart({ labels, values }: { labels: string[]; values: number[] }) {
  const chartRef = useRef<ChartJS<"line"> | null>(null);
  const data: ChartData<"line"> = { labels, datasets: [{ label: "Applications", data: values, borderColor: "#4f46e5", backgroundColor: (context) => { const chart = context.chart; const area = chart.chartArea; if (!area) return "rgba(79, 70, 229, 0.12)"; const gradient = chart.ctx.createLinearGradient(0, area.top, 0, area.bottom); gradient.addColorStop(0, "rgba(79, 70, 229, 0.32)"); gradient.addColorStop(1, "rgba(79, 70, 229, 0.02)"); return gradient; }, fill: true, tension: 0.4, pointRadius: 3, pointBackgroundColor: "#4f46e5" }] };
  useEffect(() => { chartRef.current?.resize(); }, [labels, values]);
  return <Line ref={chartRef} data={data} options={{ responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false }, tooltip: { enabled: true } }, scales: { y: { beginAtZero: true, grid: { color: "#edf0f5" } }, x: { grid: { display: false } } } }} />;
}
