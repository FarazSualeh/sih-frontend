"use client";
import { Bar } from "react-chartjs-2";
import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Tooltip, type ChartData } from "chart.js";
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);
export function ReadinessDistributionChart({ labels, values }: { labels: string[]; values: number[] }) {
  const data: ChartData<"bar"> = { labels, datasets: [{ label: "Students", data: values, backgroundColor: "#4f46e5", borderRadius: 7, maxBarThickness: 48 }] };
  return <Bar data={data} options={{ responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false }, tooltip: { enabled: true } }, scales: { y: { beginAtZero: true, grid: { color: "#edf0f5" } }, x: { grid: { display: false } } } }} />;
}
